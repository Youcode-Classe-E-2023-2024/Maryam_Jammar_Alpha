<?php

include_once '_config/config.php';
include_once '_functions/functions.php';
include_once '_config/db.php';
include_once 'models/Database.php';
include_once 'models/User.php';


spl_autoload_register(function ($class) {
    include_once '_classes/' . $class . '.php';
});


if(isset($_SESSION["signin"])) {
    if (isset($_GET['page']) && !empty($_GET['page'])) {
        if ($_GET['page'] == "signin" || $_GET['page'] == "signup") {
            $page = 'dashboard';
        } else
            $page = trim(strtolower($_GET['page']));
    } else {
        $page = 'home';
    }
} else {
    if ($_GET['page'] == "signup" || $_GET['page'] == "forgotpwd" || $_GET['page'] == "newpwd") {
        $page = trim(strtolower($_GET['page']));
    } else $page = "signin";
}


$all_pages = scandir('controllers');

if (in_array($page . '_controller.php', $all_pages)) {
    include_once 'models/' . $page . '_model.php';
    include_once 'controllers/' . $page . '_controller.php';
    include_once 'views/_layout.php';
} else {
    header('Location: 404.html');
}
