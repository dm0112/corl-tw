<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if (isset($_GET['password']) && $_GET['password']!="") {
    require_once("connect.php");

    $pass = $_GET['password'];
    $pass = md5($pass);
    $stmt = mysqli_prepare($conn, "select * from users where user = 'admin' and password = ?");
    mysqli_stmt_bind_param($stmt,"s",$pass);
    $stmt->execute();
    $result = $stmt->get_result()->num_rows;
    mysqli_stmt_close($stmt);
    if($result > 0)
        $response['responseCode'] = 200;
    else
        $response['responseCode'] = 401;
    echo json_encode($response);
}
else {

    $response['responseCode'] = 400;

    if($_GET['password']=="")
        $response['responseCode'] = 411;
    echo json_encode($response);
}

// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>