<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['user']) && $_GET['user']!="") && (isset($_GET['password']) && $_GET['password']!="")) {

    require_once("connect.php");

    $user = $_GET['user'];
    $pass = $_GET['password'];
    $checkUsersql = $conn->query("select * from users where user = '$user' and password= '$pass'")->num_rows;
    
    $response['numRowUsers'] = $checkUsersql;
    echo json_encode($response);
}
else {

    $response['numRowUsers'] = -1;

    if($_GET['user']=="")
        $response['numRowUsers'] = -2;

    if($_GET['password']=="")
        $response['numRowUsers'] = -3;
    echo json_encode($response);
}

// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>

