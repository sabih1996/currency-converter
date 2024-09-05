# CURRENCY CONVERTER

This project is a NestJS-based application that provides a currency conversion API. It includes features such as caching using Redis, security measures (CSRF tokens), and locale-based currency formatting.

## Table of Contents

1. Prerequisites
2. Setup and Run with Docker
3. Manual Setup and Run without Docker
4. Deployment to production
5. API Endpoints
6. Documentation

## Prerequisites

Before starting, ensure that you have the following installed on your machine:

- [Node.js(v20 or higher)](https://nodejs.org/en)
- [npm (v7 or higher))](https://www.npmjs.com/)
- [Docker if you plan to run the application with Docker](https://www.docker.com/)
- [Redis (if you plan to run the application without Docker)](https://redis.io/)

## Setup and Run with Docker

### Step 1: Clone the Repository

```bash
$ git clone <repository-url>
$ cd currency-converter
```

### Step 2: Build and Run the Docker Containers

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the application.
- Start the application along with Redis in separate containers.

The application will be accessible at http://localhost:3000.

### Step 3: RUN Test Cases

#### Run all test cases:

```bash
$ npm run test
```

#### Run specific test case file:

```bash
$ npm run test:watch file_name
```

## Manual Setup and Run without Docker

### Step 1: Clone the Repository

```bash
$ git clone <repository-url>
$ cd currency-converter
```

### Step 2: Install Dependencies

```bash
$ npm install
```

### Step 3: Setup Redis

#### Option 1: Install Redis Locally

Follow the official Redis installation guide to install Redis on your machine.

#### Option 2: Start Redis with Docker (if not running the app with Docker)

```bash
$ docker run -p 6379:6379 --name redis -d redis
```

### Step 4: Set Up Environment Variables

Create a .env file in the root of the project and configure it as follows:

```
# Application Settings
PORT=

# Redis Configuration
REDIS_HOST=
REDIS_PORT=
REDIS_PASSWORD=

# InfluxDB Configuration
INFLUXDB_ADMIN_USER=
INFLUXDB_ADMIN_PASSWORD=
INFLUXDB_DB=

# SWOP Configuration
SWOP_API_KEY=
SWOP_API_ENDPOINT=

#LOCALE Configuration
LOCALE_API_ENDPOINT=https://restcountries.com/v3.1/alpha
```

### Step 5: Run the Application

```bash
$ npm run start:dev
```

### Step 6: Running Test Cases

#### Run all test cases:

```bash
$ npm run test
```

#### Run specific test case file:

```bash
$ npm run test:watch file_name
```

## Deployment to production

To deploy your NestJS application in a production environment, we'll walk through the steps for building a Docker image, pushing it to a container registry (Docker Hub or Amazon ECR), and deploying it on AWS ECS (Elastic Container Service). Below is a detailed guide for each step.

#### Step 1: Build the Docker Image

1. Navigate to Your Project Directory: Open your terminal and navigate to the root directory of your project.

```bash
cd currency-converter
```

2. Build the Docker Image: Run the following command to build the Docker image for your application. Replace your-app-name with a suitable name for your application.

```bash
docker build -t your-app-name .
```

3. Verify the Image: Once the image is built, you can verify it using the following command:

```bash
docker images
```

You should see your image listed with the name your-app-name.

#### Step 2: Push the Docker Image to Docker Hub

1. Create a Docker Hub Account: If you don't have a Docker Hub account, create one at hub.docker.com.
2. Login to Docker Hub: Log in to your Docker Hub account from the command line:

```bash
docker login
```

You'll be prompted to enter your Docker Hub username and password.

3. Tag Your Docker Image: Before pushing the image to Docker Hub, tag it with your Docker Hub repository name. Replace your-username with your Docker Hub username and your-app-name with your app name. Example name given below:

```bash
docker tag your-app-name your-username/your-app-name:latest
```

4. Push the Image to Docker Hub: Push the tagged image to your Docker Hub repository:

```bash
docker push your-username/your-app-name:latest
```

You can now view your image in your Docker Hub account with details.

#### Step 3: Push the Docker Image to Amazon ECR (Optional Alternative to Docker Hub)

1. Create an ECR Repository: Go to the AWS Management Console, navigate to the ECR service, and create a new repository.

2. Authenticate Docker to ECR: Run the following command to authenticate Docker to your ECR registry. Replace aws-region with your AWS region.

```bash
aws ecr get-login-password --region aws-region | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<aws-region>.amazonaws.com
```

3. Tag Your Docker Image for ECR: Tag the image for ECR, replacing `<aws_account_id>` and `<aws-region>` with your actual account ID and region.

```bash
docker tag your-app-name:latest <aws_account_id>.dkr.ecr.<aws-region>.amazonaws.com/your-app-name:latest
```

4. Push the Image to ECR: Push the image to your ECR repository:

```bash
docker push <aws_account_id>.dkr.ecr.<aws-region>.amazonaws.com/your-app-name:latest
```

#### Step 4: Deploy the Docker Image to AWS ECS

1. Set Up ECS Cluster: In the AWS Management Console, go to the ECS service and create a new ECS cluster. You can choose between Fargate (serverless) or EC2 (managed) launch types. For simplicity, let's use Fargate.

2. Create an ECS Task Definition:

- Go to the ECS Task Definitions page and create a new task definition.
- Choose the Fargate launch type.
- Define the container settings:
  - Image: Use the image URL from Docker Hub or ECR (e.g., your-username/your-app-name:latest or <aws_account_id>.dkr.ecr.<aws-region>.amazonaws.com/your-app-name:latest).
  - Memory and CPU: Allocate memory and CPU according to your application's needs.
  - Port Mappings: Map port 3000 on the container to port 80 (or another port) on the host if you'd like to expose the application.
3. Create an ECS Service:

- Go to the ECS Services section and create a new service within your cluster.
- Choose your task definition and Fargate as the launch type.
- Set the desired number of tasks (e.g., 1 for a single instance).
- Configure networking by selecting your VPC, subnets, and security groups. Make sure to allow inbound traffic on the port you've exposed (e.g., port 80).

4. Deploy the Service:

- Once the service is created, ECS will automatically deploy the container using the image from Docker Hub or ECR.
- You can monitor the deployment status in the ECS dashboard.
5. Access Your Application: After deployment, ECS will assign a public IP address or DNS name to your running task. You can access your application using this public endpoint (e.g., `http://<public-ip>:80`).

Step 5: Monitor and Scale the Deployment
ECS Scaling: You can configure auto-scaling for your ECS service to adjust the number of running tasks based on CPU/memory usage or other metrics.
CloudWatch Logs: Monitor your application logs in CloudWatch by configuring your task definition to forward logs to CloudWatch.
Health Checks: Set up health checks in your ECS service to ensure that your containers are healthy and automatically replaced if they fail.

#### Step 5: Monitor and Scale the Deployment
- ECS Scaling: You can configure auto-scaling for your ECS service to adjust the number of running tasks based on CPU/memory usage or other metrics.
- CloudWatch Logs: Monitor your application logs in CloudWatch by configuring your task definition to forward logs to CloudWatch.
- Health Checks: Set up health checks in your ECS service to ensure that your containers are healthy and automatically replaced if they fail.

## API Endpoints

### Currency Conversion

- Endpoint: /currency/convert
- Method: GET
- Parameters:
  - sourceCurrency: The currency code you want to convert from (e.g., USD).
  - targetCurrency: The currency code you want to convert to (e.g., EUR).
  - amount: The amount of sourceCurrency to convert.
- Example:

```bash
curl "http://localhost:3000/currency/convert?sourceCurrency=USD&targetCurrency=EUR&amount=100"
```

### CSRF Token Generation

- Endpoint: /security/csrf-token
- Method: GET
- Description: This endpoint generates a CSRF token that must be included in subsequent API requests.

## Documentation

#### For Api documentation see swagger by hitting following endpoint:

```
http://localhost:3000/api
```

## Troubleshooting

If you encounter any issues:

- Ensure that Redis is running and accessible at the configured host and port.
- Verify that all environment variables are correctly set in the .env file.
- Check Docker logs using docker-compose logs for detailed error messages.
- Before commiting any code make sure you write all test cases otherwise husky pre-commit will stop your code for commit if any test suite fails
