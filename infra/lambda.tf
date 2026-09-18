# Packages services/api as a zip and deploys it behind an HTTP API Gateway.
# The build step (installing deps into a package dir) happens in CI before
# `terraform apply` — see .github/workflows/microservice-ci.yml.
data "archive_file" "api" {
  type        = "zip"
  source_dir  = "${path.module}/../services/api/build"
  output_path = "${path.module}/build/api.zip"
}

resource "aws_iam_role" "api_lambda" {
  name = "${var.project}-${var.environment}-api-lambda"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action    = "sts:AssumeRole"
      Effect    = "Allow"
      Principal = { Service = "lambda.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "api_lambda_basic" {
  role       = aws_iam_role.api_lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole"
}

resource "aws_lambda_function" "api" {
  function_name    = "${var.project}-${var.environment}-api"
  role              = aws_iam_role.api_lambda.arn
  handler           = "app.handler.handler"
  runtime           = "python3.12"
  filename          = data.archive_file.api.output_path
  source_code_hash  = data.archive_file.api.output_base64sha256
  timeout           = 15
  memory_size       = 512

  vpc_config {
    subnet_ids         = aws_subnet.private[*].id
    security_group_ids = [aws_security_group.lambda.id]
  }

  environment {
    variables = {
      DATABASE_URL = "postgresql+psycopg://${var.db_username}:${var.db_password}@${aws_rds_cluster.main.endpoint}:5432/${var.db_name}"
      ENVIRONMENT  = var.environment
    }
  }
}

resource "aws_apigatewayv2_api" "api" {
  name          = "${var.project}-${var.environment}-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "api" {
  api_id                 = aws_apigatewayv2_api.api.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.api.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "api" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "$default"
  target    = "integrations/${aws_apigatewayv2_integration.api.id}"
}

resource "aws_apigatewayv2_stage" "api" {
  api_id      = aws_apigatewayv2_api.api.id
  name        = "$default"
  auto_deploy = true
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}
