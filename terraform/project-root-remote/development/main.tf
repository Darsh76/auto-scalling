provider "aws" {
  region = "us-west-2"
}

# 🔹 Store Terraform State in S3
terraform {
  backend "s3" {
    bucket         = "terraform-uni-kuuli-oregon"
    key            = "terraform/development/terraform.tfstate"
    region         = "us-west-2"
    encrypt        = true
    dynamodb_table = "terraform-locks"
  }
}

# 🔹 Generate an SSH Key Pairs
resource "tls_private_key" "instance_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

resource "aws_key_pair" "generated_key" {
  key_name   = "uni-kuuli-dev-key"
  public_key = tls_private_key.instance_key.public_key_openssh
}

#  Create Security group for dev
resource "aws_security_group" "uni_kuuli_sg" {
  name        = "uni-kuuli-dev-sg"
  description = "Security group for uni-kuuli development instance"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8000
    to_port     = 8050
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Owner = "kuuli"
  }
}

#  Launch EC2 Instance for dev changes
resource "aws_instance" "new_instance" {
  ami                    = "ami-03a41751d177f91e6" # Change to your AMI ID
  instance_type          = "t3.medium"
  key_name               = aws_key_pair.generated_key.key_name
  vpc_security_group_ids = [aws_security_group.uni_kuuli_sg.id]

  tags = {
    Name  = "uni-kuuli-dev-instance"
    Owner = "kuuli"
  }
}

# 🔹 Create Elastic IP for dev
resource "aws_eip" "elastic_ip" {
  domain = "vpc"
}

# 🔹 Associate Elastic IP with Instance
resource "aws_eip_association" "eip_assoc" {
  instance_id   = aws_instance.new_instance.id
  allocation_id = aws_eip.elastic_ip.id
}

# 🔹 Outputs ip
output "public_ip" {
  value = aws_eip.elastic_ip.public_ip
}
