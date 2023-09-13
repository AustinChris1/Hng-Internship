<?php
// Database configuration
require_once("db.php");

// Set headers to allow cross-origin requests (CORS)
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

// Define HTTP methods
$method = $_SERVER["REQUEST_METHOD"];

// CRUD operations
switch ($method) {
    case "GET":
        // Read a person's details
        if (isset($_GET['id'])) {
            $id = $_GET['id'];
            $sql = $db->query("SELECT * FROM persons WHERE id = '$id'");
        } else {
            // Read all persons
            $sql = $db->query("SELECT * FROM persons");
        }
        $result = $sql;
        $data = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }else{
            echo "No user found";
        }
        echo json_encode($data);
        break;

    case "POST":
        // Create a new person
        $data = json_decode(file_get_contents("php://input"));
        if (isset($data->name)) {
            $name = $data->name;
            $name = htmlentities($name);
            $name = strip_tags($name);
            $name = $db->real_escape_string($name);
        }


        $sql = $db->query("INSERT INTO persons (name) VALUES ('$name')");
        if ($sql === TRUE) {
            $id = $db->insert_id;
            echo "Person created successfully with id " . $id;
        } else {
            echo "Error: " . $sql . "<br>" . $db->error;
        }
        break;

    case "PUT":
        // Update an existing person
        $data = json_decode(file_get_contents("php://input"));
        var_dump($data);
        $id = $data->id;
        $query = "id = $id";
        if (isset($data->name)) {
            $name = $data->name;
            $name = htmlentities($name);
            $name = strip_tags($name);
            $name = $db->real_escape_string($name);
            $query = $query . ", name = '$name'";
        }



        $sql = $db->query("UPDATE persons SET $query WHERE id = '$id'");
        if ($sql === TRUE) {
            echo "Person updated successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $db->error;
        }
        break;

    case "DELETE":
        // Delete a person
        $id = $_GET['id'];
        $sql = $db->query("DELETE FROM persons WHERE id = '$id'");
        if ($sql === TRUE) {
            echo "Person deleted successfully.";
        } else {
            echo "Error: " . $sql . "<br>" . $db->error;
        }
        break;
}

// Close the database connection
$db->close();
