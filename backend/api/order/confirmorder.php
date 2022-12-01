<?php
include("../db_connection.php");
$post_data = file_get_contents("php://input");
if (isset($post_data) && !empty($post_data)) {
    $data = json_decode($post_data);
    $name = $data->name;
    $price = $data->price;
    $payment = $data->payment;

    $order = mysqli_query($db_conn, "INSERT INTO orders (product_name,product_price,payment) VALUES ('$name','$price','$payment')");
    if ($order) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(['success' => true, 'insertId' => $last_id]);
        return;
    } else {
        echo json_encode(['success' => false, 'msg' => 'Server problem. Please try again']);
    }
} else {
    echo json_encode(['success' => false, 'msg' => 'Please fill all the required field!']);
}
