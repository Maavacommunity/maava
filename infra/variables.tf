variable "aws_region" {
  description = "AWS region to deploy into"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment name (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "project" {
  description = "Project name, used as a resource name prefix"
  type        = string
  default     = "maava"
}

variable "db_name" {
  description = "Name of the default database"
  type        = string
  default     = "maava"
}

variable "db_username" {
  description = "Master username for RDS"
  type        = string
  default     = "maava"
}

variable "db_password" {
  description = "Master password for RDS (pass via TF_VAR_db_password or a secrets manager, never commit)"
  type        = string
  sensitive   = true
}
