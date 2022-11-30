<?php
include("../db_connection.php");

$data = json_decode(file_get_contents("php://input"));
if (isset($data->productName) && isset($data->productPrice) && isset($data->productDetails) && !empty(trim($data->productName)) && !empty(trim($data->productPrice)) && !empty(trim($data->productDetails))) {
    $productName = mysqli_real_escape_string($db_conn, trim($data->productName));
    $productDetails = mysqli_real_escape_string($db_conn, trim($data->productDetails));
    $productImage = mysqli_real_escape_string($db_conn, trim($data->productImage));
    $productPrice = $data->productPrice;

    $productImage = move_uploaded_file($_FILES['image']['tmp_name'], 'assets/images/' . $_FILES['image']['name']);

    $add = mysqli_query($db_conn, "INSERT INTO products (name,price,details,image) VALUES('$productName',$productPrice,'$productDetails','$productImage')");
    if ($add) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(['success' => true, 'insertId' => $last_id]);
        return;
    } else {
        echo json_encode(['success' => false, 'msg' => 'Server problem. Please try again']);
    }
} else {
    echo json_encode(['success' => false, 'msg' => 'Please fill all the required field!']);
}
// print_r($data);

// $product_insert = mysqli_query($db_conn, "INSERT INTO products SET VALUES");
