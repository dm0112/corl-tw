<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");




$sql ="SELECT * FROM items";
if(isset($_GET['whichOnes'])){
    $type = "";
    $whichOnes = $_GET['whichOnes'];
    if(isset($_GET['type']))
    $type = $_GET['type'];
    if($whichOnes != ""){

        if($whichOnes == "all"){
            if($type!="")
            {
                $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE type = (?)");
                mysqli_stmt_bind_param($stmt,"d",$type);
            }
            else
            {
            $stmt = mysqli_prepare($conn, "SELECT * FROM items");
            }
            $execResult = $stmt->execute();
            
            $response['results'] = $stmt->get_result()->fetch_all();
            mysqli_stmt_close($stmt);
            if($execResult == true)
                $response['responseCode'] = 200;
            else $response['responseCode'] = 400;
            echo json_encode($response);
            
            // foreach($result as $item){
            //     echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
            //     // echo $item['name'];
                
            // }
        }
        elseif($whichOnes =="owned"){
        if(isset($_GET['user']))
        $user = $_GET['user'];


        $stmt = mysqli_prepare($conn, "SELECT * FROM items i left join itemsowned io on i.id_uniq=io.id_item where io.username=? ");
        mysqli_stmt_bind_param($stmt,"s",$user);
        $execResult = $stmt->execute();
            
        $response['results'] = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        if($execResult == true)
            $response['responseCode'] = 200;
        else $response['responseCode'] = 400;
        echo json_encode($response);
        }
        elseif($whichOnes =="users"){
            if(isset($_GET['user']))
            $user = $_GET['user'];
    
            if($user=='admin'){
            $stmt = mysqli_prepare($conn, "SELECT * FROM users where user!=?");
            mysqli_stmt_bind_param($stmt,"s",$user);
            $execResult = $stmt->execute();
                
            $response['results'] = $stmt->get_result()->fetch_all();
            
            mysqli_stmt_close($stmt);
            if($execResult == true)
                $response['responseCode'] = 200;
            else $response['responseCode'] = 400;
            echo json_encode($response);
            }

            else $response['responseCode'] = 400; // daca nu avem drept
            }
        elseif ($type=="") {
        $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE category = (?)");
        mysqli_stmt_bind_param($stmt,"s",$whichOnes);
        $execResult = $stmt->execute();
            
        $response['results'] = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        if($execResult == true)
            $response['responseCode'] = 200;
        else $response['responseCode'] = 400;
        echo json_encode($response);
        // foreach($result as $item){
        //     echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
        //     // echo $item['name'];
            
        // }
        }
        elseif ($type!=""){
        $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE category = (?) and type = (?)");
        mysqli_stmt_bind_param($stmt,"ss",$whichOnes,$type);
        $execResult = $stmt->execute();
            
        $response['results'] = $stmt->get_result()->fetch_all();
        mysqli_stmt_close($stmt);
        if($execResult == true)
            $response['responseCode'] = 200;
        else $response['responseCode'] = 400;

        echo json_encode($response);
        }


    }


}
?>