<?php
include('../db_connection.php');

$productList = mysqli_query($db_conn, "SELECT * FROM products");
if (mysqli_num_rows($productList) > 0) {
    while ($row = mysqli_fetch_assoc($productList)) {
        $view_json['name'] = $row['name'];
        $view_json['price'] = $row['price'];
        $view_json['details'] = $row['details'];

        $json_array['productData'][] = $view_json;
    }
    echo json_encode($json_array);
    return;
} else {
    echo json_encode(['success' => false, 'msg' => 'No data available']);
    return;
}
