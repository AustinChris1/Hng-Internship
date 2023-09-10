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

#### GET /person

- **Request**: No request body required.
- **Response**: Returns JSON data containing person details. Example:

  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "johndoe@example.com"
    }
  ]
#### POST /person

- **Request**: Creates a user by sending a JSON object with person details. Example:

  ```json
  {
    "name": "Alice Smith",
    "age": 25,
    "email": "alice@example.com"
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
