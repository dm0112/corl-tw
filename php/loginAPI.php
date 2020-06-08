<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['user']) && $_GET['user']!="") && (isset($_GET['password']) && $_GET['password']!="")) {

    require_once("connect.php");

    $user = $_GET['user'];
    $pass = $_GET['password'];
    // $checkUsersql = $conn->query("select * from users where user = '$user' and password= '$pass'")->num_rows; //deprecated
    $pass = md5($pass);
    $stmt = mysqli_prepare($conn, "select * from users where user = ? and password = ?");
    mysqli_stmt_bind_param($stmt,"ss",$user,$pass);
    $stmt->execute();
    $result = $stmt->get_result()->num_rows;
    mysqli_stmt_close($stmt);
    //echo json_encode($result);
    //echo $pass;
    if($result > 0)
        $response['responseCode'] = 200;
    else
        $response['responseCode'] = 401;
    echo json_encode($response);
}
else {

    $response['responseCode'] = 400;

    if($_GET['user']=="")  // redundant din conditia if-ului de mai sus
        $response['responseCode'] = 411;

    if($_GET['password']=="") // redundant din conditia if-ului de mai sus
        $response['responseCode'] = 411;
    echo json_encode($response);
}

// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>

