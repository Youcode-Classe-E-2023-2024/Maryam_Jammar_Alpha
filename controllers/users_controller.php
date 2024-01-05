<?php

if (isset($_POST["users"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/users";
    $data = file_get_contents($url);
    echo $data;
    exit;
}
