output "resources" {
  description = "Resources deployed by Terraform"
  value       = <<-EOF
  >>> 🚨 Details of Deployed Resources...
  Project Name: ${var.project_name}
  VPC ID: ${aws_vpc.main_vpc.id}
  Kubernetes Cluster Name: ${module.local_eks.eks_cluster_name}
  Kubernetes Cluster Region: ${module.local_eks.eks_cluster_region}
  Kubernetes Cluster Status: ${module.local_eks.eks_cluster_status}
  Kubernetes Cluster Endpoint: ${module.local_eks.eks_cluster_endpoint}
  >>> ✅ Infrastructure Deployment Completed!
  EOF
}