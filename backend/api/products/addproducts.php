<?php
include("./api/db_connection.php");

$productlist = mysqli_query($db_conn, "SELECT * FROM products");

if (mysqli_num_rows($productlist) > 0) {
    while ($row = mysqli_fetch_assoc($productlist)) {
        print_r($row);
    }
}
