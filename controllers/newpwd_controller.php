<?php

if (isset($_POST["reset"])) {

    $selector = $_POST["selector"];
    $validator = $_POST["validator"];
    $password = $_POST["password"];
    $passwordRepeat = $_POST["c_password"];

    if (empty($selector) || empty($validator)) {
        header("Location: index.php?page=newpwd?newpwd=empty");
        exit();
    }else if ($password != $passwordRepeat) {
        header("Location: index.php?page=newpwd?newpwd=pwdnotsame");
        exit();
    }

    $currentData = date("U");

//    require 'index.php?page='

    $sql = "SELECT * FROM pwdReset WHERE pwdResetSelector=? AND pwdResetExpires >= ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo "There was an error!";
        exit();
    }else {
        mysqli_stmt_bind_param($stmt, "s", $selector);
        mysqli_stmt_execute($stmt);
//        include currenr data

        $result = mysqli_stmt_get_result($stmt);
        if (!$row = mysqli_fetch_assoc($result)) {
            ehco "You need to re-submit your reset request.";
            exit();
        }else {
            $tokenBin = hex2bin($validator);
            $tokenCheck = $passowrd_verify($tokenBin, $row["pwdResetToken"]);

            if ($tokenCheck === false) {
                ehco "You need to re-submit your reset request.";
                exit();
            }elseif ($tokenCheck === true) {
                $tokenEmail = $row['pwdResetEmail'];

                $sql = "SELECT * FROM users WHERE emailUsers=?;";
                $stmt = mysqli_stmt_init($conn);
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "There was an error!";
                    exit();
                }else {
                    mysqli_stmt_bind_param($stmt, "s", $tokenEmail);
                    mysqli_stmt_execute($stmt);
                    $result = mysqli_stmt_get_result($stmt);
                    if (!$row = mysqli_fetch_assoc($result)) {
                        ehco "There was an error !";
                        exit();
                    }else {

                        $sql = "UPDATE users SET pwdUsers=? WHERE emailUser=?";
                        $stmt = mysqli_stmt_init($conn);
                        if (!mysqli_stmt_prepare($stmt, $sql)) {
                            echo "There was an error!";
                            exit();
                        }else {
                            $newPwdHash = password_hash($password, PASSWORD_DEFAULT);
                            mysqli_stmt_bind_param($stmt, "ss", $newPwdHash, $tokenEmail);
                            mysqli_stmt_execute($stmt);

                            $sql = "DELETE FROM pwdReset WHERE pwdResetEmail=?";
                            $stmt = mysqli_stmt_init($conn);
                            if (!mysqli_stmt_prepare($stmt, $sql)) {
                                echo "There was an error!";
                                exit();
                            }else {
                                mysqli_stmt_bind_param($stmt, "s", $userEmail);
                                mysqli_stmt_execute($stmt);
                                header("Location: ");
                            }


                        }
                    }
                }
            }
        }
    }


}else{
    header("Location: index.php?page=forgotpwd?reset=success");
}
