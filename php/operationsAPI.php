<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");
if(isset($_GET['operation']) && $_GET['operation']!=""){

    $operation = $_GET['operation'];
    if($operation=="addItemToList"){

    if(isset($_GET['username']) && $_GET['username']!="")
    $username = $_GET['username'];
    if(isset($_GET['item_id']) && $_GET['item_id']!="")
    $item_id = $_GET['item_id'];

    // echo $username . " " . $item_id;
        
    $stmt = mysqli_prepare($conn, "select * from itemsowned where username=? and id_item=?");
    
    mysqli_stmt_bind_param($stmt, 'ss',$username,$item_id);
    
    $execResult = $stmt->execute();

    $response['results'] = $stmt->get_result()->num_rows;
    mysqli_stmt_close($stmt);
    if($execResult == true && $response['results']==0){
        $response['responseCode'] = 200;
        $stmt = mysqli_prepare($conn, "INSERT INTO itemsowned (username, id_item) VALUES(?,?)");
    
        mysqli_stmt_bind_param($stmt, 'ss',$username,$item_id);
        
        if(mysqli_stmt_execute($stmt) == true)
            $response['responseCode'] = 200;
        else
            $response['responseCode'] = 400;
        mysqli_stmt_close($stmt);
        
        }
    else $response['responseCode'] = 400;

    echo json_encode($response);
    

    }

}


?>