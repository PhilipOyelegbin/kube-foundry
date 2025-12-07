#----------------------------------------------------------------
# Variables for EKS Module
#----------------------------------------------------------------
variable "project_name" {
  type        = string
  description = "The name of the project"
}

variable "eks_version" {
  type = string
  description = "The EKS version"
}

variable "aws_subnet" {
  type = object({
    az1 = object({ id = string })
    az2 = object({ id = string })
  })
  description = "The AWS Subnet IDs for EKS cluster"
}

variable "eks_node_instance_types" {
  description = "The EKS instance types"
  type = string
}