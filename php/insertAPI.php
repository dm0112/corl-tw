<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

// $path = "../images/";

// if ((isset($_GET['img']) && $_GET['img']!="")){
//     $content = base64_decode($_GET['img']);
//     $file = fopen($path, 'w+');
//     fwrite($file, $content);
//     fclose($file);
    
// }

// echo $file;

if ((isset($_GET['name']) && $_GET['name']!="") && (isset($_GET['description']) && $_GET['description']!="")
&& (isset($_GET['country']) && $_GET['country']!="") &&(isset($_GET['type']) && $_GET['type']!="") 
&&(isset($_GET['category']) && $_GET['category']!="") &&(isset($_GET['price']) && $_GET['price']!="") 
&&(isset($_GET['img']) && $_GET['img']!="")) {
$stmt = mysqli_prepare($conn, "INSERT INTO items (name, description, country, type, category, price, img) VALUES
(?,?,?,?,?,?,?) ");

mysqli_stmt_bind_param($stmt, 'sssssss',$_GET['name'],$_GET['description'], $_GET['country'], $_GET['type'], $_GET['category'],
$_GET['price'], $_GET['img']);

mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
// echo "ok";
// echo base64_decode($_GET['img']);

}
else {
    // echo "F";
}
?>