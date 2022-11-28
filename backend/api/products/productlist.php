<?php
include('../db_connection.php');

$productList = mysqli_query($db_conn, "SELECT * FROM products");
if (mysqli_num_rows($productList) > 0) {
    while ($row = mysqli_fetch_assoc($productList)) {
        // $viewjson['name'] = $row['name'];
        // $viewjson['price'] = $row['price'];
        // $viewjson['details'] = $row['details'];

        // $jsonarray['productData'][] = $viewjson;
        print_r($row);
    }
    // echo json_encode($jsonarray);
}
