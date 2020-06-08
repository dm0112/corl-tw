<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
if ((isset($_GET['user']) && $_GET['user']!="") && 
(isset($_GET['oldEmail']) && $_GET['oldEmail']!="") && 
(isset($_GET['newEmail']) && $_GET['newEmail']!="") && 
(isset($_GET['confirmNewEmail']) && $_GET['confirmNewEmail']!="") &&
(isset($_GET['oldPass']) && $_GET['oldPass']!="")) {

    $user = $_GET['user'];
    $oldPass = $_GET['oldPass'];
    $oldEmail = $_GET['oldEmail'];
    $confirmNewEmail = $_GET['confirmNewEmail'];
    $newEmail = $_GET['newEmail'];

    if($newEmail == $confirmNewEmail)
    {
        require_once("connect.php");

        $oldPass = md5($oldPass);
        
        //se verifica daca parola este corecta
        $stmt = mysqli_prepare($conn, "select * from users where user = ? and password = ?");
        mysqli_stmt_bind_param($stmt,"ss",$user,$oldPass);
        $stmt->execute();
        $dbOldPass = $stmt->get_result()->num_rows;
        mysqli_stmt_close($stmt);
        //echo $dbOldPass;
        if($dbOldPass > 0) {
            $stmt = mysqli_prepare($conn, "update users set email = ? where user = ?");
            mysqli_stmt_bind_param($stmt,"ss",$newEmail,$user);
            $result = $stmt->execute();
            // $result = $stmt->get_result();
            mysqli_stmt_close($stmt);
            //echo json_encode($result);
            //echo $pass;
            //echo $result;
            if($result > 0)
                $response['responseCode'] = 200;
            else
                $response['responseCode'] = 400;
            echo json_encode($response);
        }
        else {
            $response['responseCode'] = 403;
            echo json_encode($response);
        }

    }
    else {
        $response['responseCode'] = 406;
        echo json_encode($response);
    }
}
else {

    $response['responseCode'] = 400;

    if($_GET['user']=="" || $_GET['oldPass']=="" || $_GET['newEmail']=="" || $_GET['confirmNewEmail']=="" || $_GET['oldEmail']=="")
        $response['responseCode'] = 411;

    echo json_encode($response);
}

// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>

