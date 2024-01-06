<?php

if(isset($_GET["id"])) {
    extract($_GET);

} else header("Location: index.php?page=users");
