<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");




$sql ="SELECT * FROM items";
if(isset($_GET['whichOnes'])){

    $whichOnes = $_GET['whichOnes'];
    if(isset($_GET['type']))
    $type = $_GET['type'];
    if($whichOnes != ""){

        if($whichOnes == "all"){
        $stmt = mysqli_prepare($conn, "SELECT * FROM items");
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        
        echo json_encode($result);
        
        // foreach($result as $item){
        //     echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
        //     // echo $item['name'];
            
        // }
        }
        elseif ($type=="") {
        $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE category = (?)");
        mysqli_stmt_bind_param($stmt,"s",$whichOnes);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        echo json_encode($result);
        // foreach($result as $item){
        //     echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
        //     // echo $item['name'];
            
        // }
        }
        elseif ($type!=""){
        $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE category = (?) and type = (?)");
        mysqli_stmt_bind_param($stmt,"ss",$whichOnes,$type);
        $stmt->execute();
        $result = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        echo json_encode($result);
        }


    }


}
?>