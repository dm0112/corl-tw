<?php
require_once("connect.php");
$h = fopen("import.csv","r");

$data = fgetcsv($h, 1000, ",");
$i=0;
while (($data = fgetcsv($h, 1000, ",")) !== FALSE) 
{   
    if($i != 0){
    $stmt = mysqli_prepare($conn, "INSERT INTO items (type, category, description, country, name, price, img) VALUES
    (?,?,?,?,?,?,?) ");

    mysqli_stmt_bind_param($stmt, 'sssssss',$data[0],$data[1], $data[2], $data[3], $data[4],
    $data[5], $data[6]);

    // echo mysqli_stmt_execute($stmt);
    
    }
    $i++;}
fclose($h);
?>