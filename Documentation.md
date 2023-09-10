# JavaScript Testing Script

## Introduction

This JavaScript testing script is designed to interact with the PHP REST API for managing person records. The script allows you to perform CRUD (Create, Read, Update, Delete) operations on person data through API requests.

## Prerequisites

Before using the testing script, ensure that you have the following prerequisites installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

Additionally, you need to install the required npm packages:

- `node-fetch`: To make HTTP requests from Node.js.
- `inquirer`: To create interactive command-line prompts.

To install these packages, navigate to the directory containing the testing script (`test.js`) and run:

```bash
pnpm install @inquirer/select
pnpm install @inquirer/input
pnpm install @inquirer/confirm
```
## Running the test script

To run the testing script, follow these steps:

Navigate to the directory containing the JavaScript testing script (test.js).

Open your terminal or command prompt.

Execute the script using Node.js:

```bash
cd stage2
node test.js
```
## Available Actions
The testing script provides the following actions:

- Create a Person: Creates a new person record with a specified name, age, and email.

- Read a Person: Retrieves details of a person by entering their ID.

- Update a Person: Updates a person's details, allowing you to change the name, age, or email.

- Delete a Person: Deletes a person record by specifying their ID.

## Test Workflow
- Follow the on-screen prompts to select an action and provide necessary information.

- The script sends API requests to the specified API endpoints of your PHP REST API.

- View the console for API responses.

## Example Usage
Here's an example of how to run the script:

- Run the script using `node test.js

- Follow the on-screen prompts to perform various actions.

- Observe the console for API responses.-




