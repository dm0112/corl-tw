<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

$sql ="SELECT * FROM items";  //interogarea sql
// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();

$i=0; //pentru a adauga WHERE + and , afisam toate elementele daca nu este niciun filtru

if((isset($_GET['name']) && $_GET['name']!="")){ //construim interogarea, dupa argumentele date
    
    $name = $_GET['name'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql  = $sql . " name='" . $name . "'";
    $i++;
   
}
if((isset($_GET['description']) && $_GET['description']!="")){
    $desc = $_GET['description'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql = $sql . "description like '%" . $desc . "%'";
    
    $i++;
    
}
if((isset($_GET['country']) && $_GET['country']!="")){
    $country = $_GET['country'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql = $sql . "country= '" . $country . "'";
    $i++;
    
}

if((isset($_GET['type']) && $_GET['type']!="")){
    $type = $_GET['type'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql = $sql . "type= '" . $type . "'";
    $i++;
    
}
if((isset($_GET['category']) && $_GET['category']!="")){
    $category = $_GET['category'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql = $sql . "category= '" . $category . "'";
    $i++;
    
}
if((isset($_GET['price']) && $_GET['price']!="")){
    $price = $_GET['price'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql = $sql . "price= '" . $price . "'";
    $i++;
    
}
// echo $sql;
$result = mysqli_query($conn,$sql)->fetch_all(); //luam rezultatele din interogare
mysqli_close($conn);

echo json_encode($result);

// foreach($result as $item){
//     echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
//     // echo $item['name'];
    
// }

?>