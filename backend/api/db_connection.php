<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("localhost:3306", "root", "", "becha_bikri");

//Connection check
if ($db_conn == false) {
    die("ERROR:could not connect" . mysqli_connect_error());
}
error_reporting(E_ALL);
ini_set('display_errors', 'On');