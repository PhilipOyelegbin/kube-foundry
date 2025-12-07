#----------------------------------------------------------------
# EKS Cluster Outputs
#----------------------------------------------------------------
output "eks_cluster_name" {
  description = "The name for the EKS cluster"
  value = aws_eks_cluster.main_eks.name
}

output "eks_cluster_region" {
  description = "The region for the EKS cluster"
  value = aws_eks_cluster.main_eks.region
}

output "eks_cluster_status" {
  description = "The status for the EKS cluster"
  value = aws_eks_cluster.main_eks.status
}

output "eks_cluster_endpoint" {
  description = "The endpoint for the EKS cluster"
  value = aws_eks_cluster.main_eks.endpoint
}