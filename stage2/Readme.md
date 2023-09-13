# Project Documentation

## PHP REST API

### Introduction

This documentation provides an overview of the PHP REST API for managing person records. The API supports CRUD (Create, Read, Update, Delete) operations on person data stored in a database.

### API Endpoints

The API offers the following endpoints:

- `GET /person`: Retrieve details of one or all persons.
- `POST /person`: Create a new person.
- `PUT /person`: Update an existing person.
- `DELETE /person`: Delete a person.

### Database Configuration

Database configuration is handled in `db.php`. Ensure that the database credentials are correctly set in this file.

### Request and Response Formats

#### GET api/person

- **Request**: No request body required.
- **Response**: Returns JSON data containing person details. Example:

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
    }
  ]
  
#### POST /person

- **Request**: Creates a user by sending a JSON object with person details. Example:

  ```json
  {
    "id": "1"
    "name": "Alice Smith",
  }

#### PUT /person

- **Request**: Updates a user by sending a JSON object with person details. Example:

  ```json
    {
  "id": 1,
  "name": "Updated Name",
    }

#### DELETE /person

- **Request**: Deletes a user by sending a JSON object with person details. Example:

  ```json
    {
  "id": 1,
    }

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
```bash
$ sudo apt install -y nodejs
```
OR

Node.js: [Download and Install Node.js](https://nodejs.org/)

- Database (e.g., MySQL, PostgreSQL)

- Git installed (for cloning the repository).

PHP (>= 7.4)

## Installation

1. Clone the repo

```
git clone https://github.com:AustinChris1/Hng-Internship.git
```
2. Change directory
```
cd Hng-Internship/stage2/
```
3. Install required node packages
```
npm install
```
4. Setup the database
  If you are using phpmyadmin import the persons.sql file found in the repo

5. Start your apache and mysql server

6. To run the testing script, follow these steps:

Navigate to the directory containing the JavaScript testing script (test.js).

Open your terminal or command prompt.

Execute the script using Node.js:

  Run tests using nodejs by
  ```
  node test.js
  ```
- You can find more documentation on the testing [here](https://github.com/AustinChris1/Hng-Internship/blob/main/stage2/Documentation.md)