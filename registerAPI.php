<?php
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['email']) && $_GET['email']!="") && (isset($_GET['user']) && $_GET['user']!="") && (isset($_GET['password']) && $_GET['password']!="")) {

    require_once("connect.php");
    $email = $_GET['email'];
    $user = $_GET['user'];
    $pass = $_GET['password'];
    $checkMailsql = $conn->query("select * from users where email = '$email'")->num_rows;
    $checkUsersql = $conn->query("select * from users where user = '$user'")->num_rows;
    
    $response['numRowEmail'] = $checkMailsql;
    $response['numRowUsers'] = $checkUsersql;
    $response['passLength'] = strlen($pass);
    echo json_encode($response);

    if($checkMailsql == 0 && $checkUsersql == 0 && strlen($pass) != 0) {
        $registersql = $conn->query("insert into users (email, user, password) values('$email', '$user', '$pass')");
        $conn -> close();
    }
}
else {

    $response['numRowEmail'] = -1;
    $response['numRowUsers'] = -1;
    $response['passLength'] = -1;

    if($_GET['email']=="")
        $response['numRowEmail'] = -2;

    if($_GET['user']=="")
        $response['numRowUsers'] = -2;

    if($_GET['password']=="")
        $response['passLength'] = 0;
    echo json_encode($response);
}

?>