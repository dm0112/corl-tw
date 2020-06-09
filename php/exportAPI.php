<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

if(isset($_GET['operation']))
$operation = $_GET['operation'];

$stmt = mysqli_prepare($conn, "select type, category, description, country, name, price, img from items ");
// mysqli_stmt_bind_param($stmt,"ss",$whichOnes,$type);
$execResult = $stmt->execute();
$response['results'] = $stmt->get_result()->fetch_all();
mysqli_stmt_close($stmt);
$response['responseCode']=200;

if($operation=="exportCSV"){

$cat = array('type', 'category', 'description', 'country', 'name', 'price', "img");
$fp = fopen('php://memory', 'w'); 
fputcsv($fp,$cat);
foreach ($response['results'] as $fields) {
    fputcsv($fp, $fields);
}
fseek($fp, 0);
// fclose($fp);

// echo $response['results'];

    header('Content-Type: application/csv');
    // tell the browser we want to save it instead of displaying it
    header('Content-Disposition: attachment; filename="'. "export.csv".'";');
    // make php send the generated csv lines to the browser
    fpassthru($fp);


}
/// how many countries, how many items from each country, how many corks/ labels/ caps from each country
else if($operation=="exportDocBook"){
    

    function createXMLfile(){
    $filePath = "export.xml";
    $dom = new DOMDocument('1.0', 'utf-8');
    $root = $dom->createElement("article");

    $dom->appendChild($root); 
    $dom->save($filePath); 
 



     }
        
     createXMLfile();


}


?>