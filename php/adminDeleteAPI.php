<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['user']) && $_GET['user']!="") && (isset($_GET['adminPass']) && $_GET['adminPass']!="")) {
    require_once("connect.php");

    $user = $_GET['user'];
    $adminPass = $_GET['adminPass'];
    $adminPass = md5($adminPass);

    $stmt = mysqli_prepare($conn, "select * from users where user = 'admin' and password = ?");
    mysqli_stmt_bind_param($stmt,"s",$adminPass);
    $stmt->execute();
    $confirmPass = $stmt->get_result()->num_rows;
    mysqli_stmt_close($stmt);
    if($confirmPass > 0) {


        $stmt = mysqli_prepare($conn, "delete from users where user = ?");
        mysqli_stmt_bind_param($stmt,"s",$user);
        $result = $stmt->execute();
        mysqli_stmt_close($stmt);
        if($result > 0){
            $stmt = mysqli_prepare($conn, "delete from itemsowned where username = ?");
            mysqli_stmt_bind_param($stmt,"s",$user);
            $stmt->execute();
            mysqli_stmt_close($stmt);
            $response['responseCode'] = 200;
        }
        else
            $response['responseCode'] = 400;
        echo json_encode($response);
    }
    else {
        $response['responseCode'] = 401;
        echo json_encode($response);
    }
}
else {

    $response['responseCode'] = 400;
    echo json_encode($response);
}

// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>