# 🚀 Containerized Application Deployment with IaC & Kubernetes

![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=white)
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
- Retrieve and store credentials for kubectl authentication using the command `aws eks update-kubeconfig --region <your-region> --name my-eks-cluster`.
- Confirm cluster access with `kubectl get nodes`.

### Step 2: Application Deployment

- Deploy a sample containerized app (e.g., Nginx or a simple Node.js “Hello World”).
- Create a Kubernetes **Deployment** and **Service**.
- Expose the app externally (LoadBalancer or NodePort).
- Verify accessibility (curl or browser).

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

## 📦 Deliverables

At the end of the exercise, please provide:

- Terraform/OpenTofu code.
- Kubernetes manifests.
- Git repository link (with commit history).
- CI/CD pipeline configuration file.
- Short README with setup steps and usage instructions.

---

## ✅ Evaluation Criteria

- **Correctness:** Infrastructure and app deploy successfully.
- **IaC Quality:** Terraform code is modular and reusable.
- **Kubernetes Knowledge:** Proper use of deployments, services, namespaces.
- **Git Workflow:** Clear commit history and branching strategy.
- **CI/CD:** Pipeline runs successfully and automates deployment.
- **Bonus:** Docker/GitOps integration.

---
