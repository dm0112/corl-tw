<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

if(isset($_GET['operation']))
$operation = $_GET['operation'];

// function array2csv(array &$array)
// {
//    if (count($array) == 0) {
//      return null;
//    }
//    ob_start();
//    $df = fopen("php://output", 'w');
//    fputcsv($df, array_keys(reset($array)));
   
//    foreach ($array as $row) {
//       fputcsv($df, $row);
//    }
//    fclose($df);
//    return ob_get_clean();
// }

// if($operation=="exportCSV"){
$stmt = mysqli_prepare($conn, "select type, category, description, country, name, price from items ");
// mysqli_stmt_bind_param($stmt,"ss",$whichOnes,$type);
$execResult = $stmt->execute();
$response['results'] = $stmt->get_result()->fetch_all();
mysqli_stmt_close($stmt);
$response['responseCode']=200;


// makeDict($response['results']);

// // }
// function makeDict(array &$array){
//     echo
// }


echo json_encode($response);
?>