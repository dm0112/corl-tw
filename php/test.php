<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

$sql ="SELECT * FROM items";  //interogarea sql

// $result = mysqli_query($conn, "SELECT * FROM items")->fetch_all();

$result = mysqli_query($conn,$sql)->fetch_all(); //luam rezultatele din interogare
mysqli_close($conn);

echo json_encode($result);

// foreach($result as $item){
//     // echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
//     echo $item['name'];
    
// }

?>