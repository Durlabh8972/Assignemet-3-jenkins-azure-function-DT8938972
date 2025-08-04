
# Jenkins CI/CD Pipeline to Deploy Azure Function 

## Overview
This repository demonstrates a full CI/CD pipeline using Jenkins to deploy an Azure Function.

## Contents
- `index.js`: Azure Function that returns "Hello, World!"
- `package.json`: Node.js project configuration with Jest and Supertest
- `__tests__/function.test.js`: Automated test cases for the function
- `Jenkinsfile`: Jenkins Pipeline definition
- `README.md`: Documentation and setup guide

## Prerequisites
- Azure account with Function App and Resource Group
- Jenkins installed with Azure CLI, GitHub, and Pipeline plugins
- GitHub repository connected to Jenkins
- Jenkins credentials for Azure (client ID, secret, tenant ID)

## Instructions
1. **Clone the repo** and push it to your GitHub account.
2. **Set up Jenkins** to use the Jenkinsfile from this repo.
3. **Ensure Jenkins credentials** include:
   - AZURE_CLIENT_ID
   - AZURE_CLIENT_SECRET
   - AZURE_TENANT_ID
4. **Run the pipeline** and verify:
   - Build stage installs dependencies
   - Test stage runs all tests successfully
   - Deploy stage pushes code to Azure Function.

## Testing the Azure Function
Visit the Azure Function URL in a browser or use Postman to verify output is: `Hello, World!`
