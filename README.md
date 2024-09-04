# CURRENCY CONVERTER

This project is a NestJS-based application that provides a currency conversion API. It includes features such as caching using Redis, security measures (CSRF tokens), and locale-based currency formatting.

## Table of Contents

1. Prerequisites
2. Setup and Run with Docker
3. Manual Setup and Run without Docker
4. Environment Variables (.env)
5. Running Test Cases
6. API Endpoints

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

## Troubleshooting
If you encounter any issues:

- Ensure that Redis is running and accessible at the configured host and port.
- Verify that all environment variables are correctly set in the .env file.
- Check Docker logs using docker-compose logs for detailed error messages.
