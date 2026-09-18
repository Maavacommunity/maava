output "api_url" {
  description = "Invoke URL for the HTTP API"
  value       = aws_apigatewayv2_stage.api.invoke_url
}

output "db_cluster_endpoint" {
  description = "Aurora cluster writer endpoint"
  value       = aws_rds_cluster.main.endpoint
}
