<?php
include("../db_connection.php");
$post_data = file_get_contents("php://input");
if (isset($post_data) && !empty($post_data)) {
    $data = json_decode($post_data);
    $email = $data->email;
    $password = $data->password;
    $confirm_password = $data->confirm_password;

    $register = mysqli_query($db_conn, "INSERT INTO register (email,password,confirm_password) VALUES ('$email','$password','$confirm_password')");
    if ($register) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(['success' => true, 'insertId' => $last_id]);
        return;
    } else {
        echo json_encode(['success' => false, 'msg' => 'Server problem. Please try again']);
    }
} else {
    echo json_encode(['success' => false, 'msg' => 'Please fill all the required field!']);
}
