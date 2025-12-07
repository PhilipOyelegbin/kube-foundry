#----------------------------------------------------------------
# Root Variables for VPC
#----------------------------------------------------------------
variable "aws_region" {
  type        = string
  description = "The AWS region to deploy resources in."
}

variable "vpc_cidr" {
  type        = string
  description = "The VPC CIDR range"
}

variable "subnets_cidr" {
  type        = list(string)
  description = "The subnets CIDR range"
}

variable "project_name" {
  type        = string
  description = "The name of the project"
}