#----------------------------------------------------------------
# VPC and Networking
#----------------------------------------------------------------
resource "aws_vpc" "main_vpc" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "${var.project_name}-main_vpc"
  }
}

data "aws_availability_zones" "available" {
  state = "available"
}

resource "aws_subnet" "pub_subnets" {
  count                   = 2
  vpc_id                  = aws_vpc.main_vpc.id
  cidr_block              = var.subnets_cidr[count.index]
  availability_zone       = element(data.aws_availability_zones.available.names, count.index)
  map_public_ip_on_launch = true
  enable_dns64            = true

  tags = {
    Name = "${var.project_name}-pub_subnet_${count.index + 1}"
  }

  depends_on = [aws_vpc.main_vpc]
}

resource "aws_internet_gateway" "main_ig" {
  vpc_id = aws_vpc.main_vpc.id

  tags = {
    Name = "${var.project_name}-main_ig"
  }
}

resource "aws_route_table" "pub_rt" {
  vpc_id = aws_vpc.main_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main_ig.id
  }

  tags = {
    Name = "${var.project_name}-pub_rt"
  }
}

resource "aws_route_table_association" "pub_rt_assoc" {
  count          = 2
  subnet_id      = aws_subnet.pub_subnets[count.index].id
  route_table_id = aws_route_table.pub_rt.id
}

module "local_eks" {
  source       = "./modules/eks"
  project_name = var.project_name
  eks_version  = "1.31"
  aws_subnet = {
    az1 = { id = aws_subnet.pub_subnets[0].id }
    az2 = { id = aws_subnet.pub_subnets[1].id }
  }
  eks_node_instance_types = "t3.micro"
}