<?php
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $name = $_POST['name'];
    $faculty = $_POST['faculty'];
    $department = $_POST['department'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $position = $_POST['position'];
    $degree = $_POST['degree'];
    $university = $_POST['university'];
    $year = $_POST['year'];
    $field = $_POST['field'];
    $leave = $_POST['leave'];
    $start_date = $_POST['start_date'];
    $duration = $_POST['duration'];

    $sql = "INSERT INTO grants (title, name, faculty, department, email, phone, position, degree, university, year, field, leave, start_date, duration)
            VALUES ('$title', '$name', '$faculty', '$department', '$email', '$phone', '$position', '$degree', '$university', '$year', '$field', '$leave', '$start_date', '$duration')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
