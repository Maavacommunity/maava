terraform {
  required_version = ">= 1.7.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Configure a remote backend before applying to a real environment, e.g.:
  # backend "s3" {
  #   bucket         = "maava-tfstate"
  #   key            = "maava/terraform.tfstate"
  #   region         = "us-east-1"
  #   dynamodb_table = "maava-tflock"
  #   encrypt        = true
  # }
}

provider "aws" {
  region = var.aws_region
}
