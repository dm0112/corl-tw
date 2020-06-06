<?php
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['email']) && $_GET['email']!="") && (isset($_GET['user']) && $_GET['user']!="") && (isset($_GET['password']) && $_GET['password']!="")) {

    require_once("connect.php");
    $email = $_GET['email'];
    $user = $_GET['user'];
    $pass = $_GET['password'];
    // $checkMailsql = $conn->query("select * from users where email = '$email'")->num_rows;
    // $checkUsersql = $conn->query("select * from users where user = '$user'")->num_rows;
    
    

    

    $stmtE = mysqli_prepare($conn, "SELECT * FROM users WHERE email = ?");
    mysqli_stmt_bind_param($stmtE,"s",$email);
    $stmtE->execute();
    $resultE = $stmtE->get_result()->num_rows;
    mysqli_stmt_close($stmtE);
    echo $resultE;

    $stmtU = mysqli_prepare($conn, "SELECT * FROM users WHERE user = (?)");
    mysqli_stmt_bind_param($stmtU,"s",$user);
    $stmtU->execute();
    $resultU = $stmtU->get_result()->num_rows;
    mysqli_stmt_close($stmtU);
    $response['numRowEmail'] = $resultE;
    $response['numRowUsers'] = $resultU;

    
    // $response['numRowEmail'] = $checkMailsql;
    // $response['numRowUsers'] = $checkUsersql;
    $response['passLength'] = strlen($pass);
    echo json_encode($response);
    $pass = md5($pass);
    if($resultU == 0 && $resultE == 0 && strlen($pass) != 0) {
        // $registersql = $conn->query("insert into users (email, user, password) values('$email', '$user', '$pass')");
        $regSQL= mysqli_prepare($conn, "insert into users (email, user, password) values(?, ?, ?)");
        echo $pass;
        mysqli_stmt_bind_param($regSQL,"sss",$email,$user,$pass);
        $regSQL->execute();
        mysqli_stmt_close($regSQL);

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