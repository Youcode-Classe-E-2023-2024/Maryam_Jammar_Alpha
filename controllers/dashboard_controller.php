<?php

session_start();

session_destroy();
header('Location: index.php?page=home');


if (!isset($_SESSION["signin"])) {
    if (isset($_GET['page'])) {
        $allowedPages = ["signin", "signup", "password_recovery", "change_password"];
        $page = in_array($_GET['page'], $allowedPages) ? $_GET['page'] : 'signin';
    } else {
        $page = 'signin';
    }
} else {
    $page = 'dashboard';
}

// If $_GET['page'] is not set or empty, set $page to 'dashboard'
if (empty($page)) {
    $page = 'dashboard';
}

// Additional processing for $page if needed
$page = trim(strtolower($page));