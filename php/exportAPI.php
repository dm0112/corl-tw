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
    
    $stmt = mysqli_prepare($conn, "select count(*) from users");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_row(); /// [0]
    mysqli_stmt_close($stmt);
    $resultFinal['usersCount'] = $result;
    // echo $resultFinal['usersCount'];

    $stmt = mysqli_prepare($conn, "select count(*) from items");
    $stmt->execute();
    $result = $stmt->get_result()->fetch_row();
    mysqli_stmt_close($stmt);
    $resultFinal['itemsCount'] = $result;

    $stmt = mysqli_prepare($conn, "select count(*) from itemsowned"); //claimed -- mai multe obiecte la toate lumea
    $stmt->execute();
    $result = $stmt->get_result()->fetch_row();
    mysqli_stmt_close($stmt);
    $resultFinal['claimedCount'] = $result;

    $stmt = mysqli_prepare($conn, "select count(distinct id_item) from itemsowned"); /// owned -- cele care sunt macar la cineva 
    $stmt->execute();
    $result = $stmt->get_result()->fetch_row();
    mysqli_stmt_close($stmt);
    $resultFinal['ownedCount'] = $result;
    // function createXMLfile(){

    $fp = fopen('php://memory', 'w');
    fwrite($fp,"<article xmlns='http://docbook.org/ns/docbook'>
    <info>
     <title>Colr</title>
     <author><personname>
    <firstname>Serban</firstname>
    <surname>Movila</surname></personname>
    <personname><firstname>Daniel</firstname>
    <surname>Mihai</surname>
     </personname></author>
     <pubdate>2020</pubdate>
    </info>
   
    <section id='intro'>
     <title>DocBook</title>
     <para>Statistics in xml format</para>
     </section>");


    fwrite($fp, "<section id='body'>");

    fwrite($fp,"<title>Total users</title>
     <para>There are " . $resultFinal['usersCount'][0] ." registered.</para>");
     fwrite($fp,"<title>Total items</title>
     <para>There are " . $resultFinal['itemsCount'][0] ." registered.</para>");
     fwrite($fp,"<title>Total items in users collections</title>
     <para>There are " . $resultFinal['claimedCount'][0] ." registered.</para>");
     fwrite($fp,"<title>Distinct items that are in users collection</title>
     <para>There are " . $resultFinal['ownedCount'][0] ." registered.</para>");

     fwrite($fp,"</section>");
   
    
    fwrite($fp,"</article>");

//    fwrite($fp, $test);

   fseek($fp, 0);
   header('Content-Type: application/xml');
//    // tell the browser we want to save it instead of displaying it
   header('Content-Disposition: attachment; filename="'. "export.xml".'";');
//    // make php send the generated csv lines to the browser
   fpassthru($fp);
   


}



?>