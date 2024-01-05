<?php

if (isset($_POST["products"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/posts";
    $libghiti  = file_get_contents($url);
    echo $libghiti;
//    echo "test";
    exit;
}