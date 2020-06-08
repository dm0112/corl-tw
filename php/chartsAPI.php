<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");

    require_once("connect.php");
    $resultFinal;

    $stmt = mysqli_prepare($conn, "select count(*) from users");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all(); /// [0]
    mysqli_stmt_close($stmt);
    $resultFinal['usersCount'] = $result;

    $stmt = mysqli_prepare($conn, "select count(*) from items");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all();
    mysqli_stmt_close($stmt);
    $resultFinal['itemsCount'] = $result;

    $stmt = mysqli_prepare($conn, "select count(*) from itemsowned"); //claimed -- mai multe obiecte la toate lumea
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all();
    mysqli_stmt_close($stmt);
    $resultFinal['claimedCount'] = $result;

    $stmt = mysqli_prepare($conn, "select count(distinct id_item) from itemsowned"); /// owned -- cele care sunt macar la cineva 
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all();
    mysqli_stmt_close($stmt);
    $resultFinal['ownedCount'] = $result;

    
    


    echo json_encode($resultFinal);





// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

?>