<?php 
header("Content-Type:application/json");
header("Access-Control-Allow-Origin:*");
require_once("connect.php");

$sql ="SELECT * FROM items";  //interogarea sql
// $stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE ");
// mysqli_stmt_bind_param($stmt,'i',$name);
// mysqli_stmt_execute($stmt);
// $stmt -> store_result();
$conditions = array();
$i=0; //pentru a adauga WHERE + and , afisam toate elementele daca nu este niciun filtru

if((isset($_GET['name']) && $_GET['name']!="")){ //construim interogarea, dupa argumentele date
    
    $name = $_GET['name'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    // $sql  = $sql . " name='" . $name . "'";
    $sql  = $sql . " name= (?) ";
    $conditions[$i]=$name;
    $i++;
}
// else $response['responseCode'] = 404;

if((isset($_GET['description']) && $_GET['description']!="")){
    $desc = $_GET['description'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    // $sql = $sql . "description like '%" . $desc . "%'";
    $sql = $sql . "description like CONCAT('%', ? , '%')"; 
    $conditions[$i]=$desc;
    $i++;
    
}
// else $response['responseCode'] = 404;

if((isset($_GET['country']) && $_GET['country']!="")){
    $country = $_GET['country'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql  = $sql . " country= (?) ";
    $conditions[$i]=$country;
    $i++;
    
}
// else $response['responseCode'] = 404;

if((isset($_GET['type']) && $_GET['type']!="")){
    $type = $_GET['type'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql  = $sql . " type= (?) ";
    $conditions[$i]=$type;
    $i++;
    
}
// else $response['responseCode'] = 404;

if((isset($_GET['category']) && $_GET['category']!="")){
    $category = $_GET['category'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql  = $sql . " category= (?) ";
    $conditions[$i]=$category;
    $i++;
    
}
// else $response['responseCode'] = 404;

if((isset($_GET['price']) && $_GET['price']!="")){
    $price = $_GET['price'];
    if($i>0)
        $sql = $sql . ' and ';
    else $sql = $sql . ' WHERE ';
    $sql  = $sql . " price= (?) ";
    $conditions[$i]=$price;
    $i++;
    
}
// else $response['responseCode'] = 404;


// echo $sql;
// $result = mysqli_query($conn,$sql)->fetch_all(); //luam rezultatele din interogare
// mysqli_close($conn);

$stmt = mysqli_prepare($conn,$sql);
// echo $sql;
// echivalentul a $i[0] pana l $i[5]
//// conditions contine conditiile in ordine iar $i reprezinta cate conditii sunt si ordinea lor
if($i==6) 
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-6],$conditions[$i-5],$conditions[$i-4],$conditions[$i-3],$conditions[$i-2],$conditions[$i-1]);
elseif($i==5)
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-5],$conditions[$i-4],$conditions[$i-3],$conditions[$i-2],$conditions[$i-1]);
elseif($i==4)
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-4],$conditions[$i-3],$conditions[$i-2],$conditions[$i-1]);
elseif($i==3)
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-3],$conditions[$i-2],$conditions[$i-1]);
elseif($i==2)
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-2],$conditions[$i-1]);
elseif($i==1)
mysqli_stmt_bind_param($stmt,str_repeat('s',$i),$conditions[$i-1]);

$execResult = $stmt->execute();

$response['results'] = $stmt->get_result()->fetch_all();
mysqli_stmt_close($stmt);
if($execResult == true)
    $response['responseCode'] = 200;
else $response['responseCode'] = 400;

echo json_encode($response);
// foreach($response as $item){
//     echo $item['responseCode'] . " " . $item['results'];
// }
// echo json_encode($result);
//  foreach($result as $item){
//             // echo $item['name'] . ", " . $item['country'] . ", " . $item['description'] . ", " . $item['id_uniq'] . ", " . $item['id_user_fq'] . "\n";
//             print_r(array_keys($a));
//  }

// if(isset($_GET['price']))
// $price = $_GET['price']; else $price = "0";
// if(isset($_GET['category']))
// $category = $_GET['category']; else $category = "0";
// if(isset($_GET['type']))
// $type = $_GET['type']; else $type = "0";
// if(isset($_GET['country']))
// $country = $_GET['country']; else $country = "0";
// if(isset($_GET['description']))
// $desc = $_GET['description']; else $desc = "0";
// if(isset($_GET['name']))
// $name = $_GET['name']; else $name = "0";

// $stmt = mysqli_prepare($conn, "SELECT * FROM items WHERE price = (?) and category = (?) and type = (?) and country = (?) and description = (?)  and name = (?)");
//         mysqli_stmt_bind_param($stmt,"ssssss",$price,$category,$type,$country,$desc,$name);
//         $stmt->execute();
//         $result = $stmt->get_result()->fetch_all();
//         mysqli_stmt_close($stmt);
//         echo json_encode($result);

?>