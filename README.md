# 🚀 Containerized Application Deployment with IaC & Kubernetes

![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-blue?logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHubActions-232F3E?logo=githubactions&logoColor=white)
![Deployment Status](https://img.shields.io/badge/Deployment-Success-brightgreen)

This project involves provisioning a Kubernetes cluster, deploying a containerized application, and setting up a CI/CD pipeline using Infrastructure-as-Code (IaC) and Kubernetes. It demonstrates the full lifecycle of deploying an application in a cloud environment with a focus on automation and scalability.

## 🛠 Pre‑Installed Tools

Before starting, ensure you have the following installed and configured:

- **Terraform**
- **AWS CLI**
- **kubectl** (configured to access my cluster)
- **VS Code** (or your preferred IDE)
- **Git** (with a GitHub account)

---

## 📄 Steps to Complete the Task

### Step 1: Infrastructure Setup

- Use **Terraform** to provision:

  - A Kubernetes cluster (EKS on AWS).
  - Networking basics (VPC, subnets, IAM roles).

  ![snapshot](./evidence/)

- Retrieve and store credentials for kubectl authentication using the command `aws eks update-kubeconfig --region <your-region> --name my-eks-cluster`.
- Map my IAM user ARN to kubernetes system:masters group for full admin access using the command

  ```bash
  aws eks create-access-entry --cluster-name kube-foundry-main_eks-cluster --principal-arn arn:aws:iam::<ACCOUNT_ID>:user/<user-name> --type STANDARD --region eu-west-2

  aws eks associate-access-policy --cluster-name kube-foundry-main_eks-cluster --principal-arn arn:aws:iam::<ACCOUNT_ID>:user/<user-name> --policy-arn arn:aws:eks::aws:cluster-access-policy/AmazonEKSClusterAdminPolicy --access-scope type=cluster --region eu-west-2
  ```

- Confirm cluster access with `kubectl get nodes`.

  ![snapshot](./evidence/)

### Step 2: Application Deployment

- Deploy the sample containerized app **dwellingbloom** [Dockerfile](./Dockerfile).
- Create a Kubernetes [Deployment](./kubernetes//deployment.yml) and [Service](./kubernetes/service.yml).

  ```bash
  kubectl apply -f kubernetes/deployment.yml
  kubectl get pods
  kubectl apply -f kubernetes/service.yml
  kubectl get svc webapp
  ```

- Expose the app externally (LoadBalancer or NodePort).

  ![snapshot](./evidence/)

- Verify accessibility via the browser as shown below.

  ![snapshot](./evidence/)

### Step 3: Git Workflow

- Initialize a Git repository.
- Commit Terraform code, Kubernetes manifests, and app source code.
- Demonstrate branching:
  - Create a feature branch for app deployment.
  - Merge into main with a pull request.

### Step 4: CI/CD Pipeline

- Configure a simple pipeline (GitHub Actions or GitLab CI).
- Pipeline should:
  - Run `terraform plan` on pull requests.
  - Apply Terraform and deploy manifests on merge to main.

### Step 5: Bonus (Optional)

- Build a Docker image for the app and push to a registry.
- Implement GitOps with ArgoCD or Flux.

---

## Clean up

- Remove deployment and service

  ```bash
  kubectl delete deployment webapp-deployment

  kubectl delete service webapp-service
  ```

- Destroy infrastructure using the command `terraform destroy`

---
