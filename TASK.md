# 📄 Project Task

You will provision and deploy a simple containerized application using Infrastructure‑as‑Code and Kubernetes.

## 🛠 Pre‑Installed Tools

Before starting, ensure you have the following installed and configured:

- **Terraform / OpenTofu**
- **AWS CLI** and/or **GCP CLI** (choose one cloud provider)
- **kubectl** (configured to access your cluster)
- **VS Code** (or your preferred IDE)
- **Git** (with a GitHub or GitLab account)

---

### Step 1: Infrastructure Setup

- Use **Terraform/OpenTofu** to provision:
  - A Kubernetes cluster (EKS on AWS or GKE on GCP).
  - Networking basics (VPC, subnets, IAM roles/service accounts).
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
