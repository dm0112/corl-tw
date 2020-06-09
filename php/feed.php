<?php 
header("Access-Control-Allow-Origin:*");
header('Content-type: application/xml');
require_once("connect.php");

echo "<?xml version='1.0' encoding='utf-8'?>\n";
echo "<rss version='2.0' xmlns:atom='http://www.w3.org/2005/Atom'> rel='self'\n";
echo "<channel>\n";

echo "<title>Rss Feed</title>\n";
echo "<description>Charts</description>\n";
echo "<link>https://lowlyn.github.io/corl-tw/</link>\n";


$stmt = mysqli_prepare($conn, "SELECT count(*) from itemsowned");
    // SELECT i.*, count(io.username) FROM itemsowned io join items i on i.id_uniq=io.id_item  group by id_item order by count(username) desc
    $stmt->execute();
    $result = $stmt->get_result()->fetch_row();
    mysqli_stmt_close($stmt);
    $total_items_collections = $result[0];

$stmt = mysqli_prepare($conn, "SELECT i.*, count(io.username) FROM itemsowned io join items i on i.id_uniq=io.id_item  group by id_item order by count(username) desc LIMIT 5");
    // SELECT i.*, count(io.username) FROM itemsowned io join items i on i.id_uniq=io.id_item  group by id_item order by count(username) desc
    $stmt->execute();
    $result = $stmt->get_result()->fetch_all();
    mysqli_stmt_close($stmt);
    $resultFinal['topDesc'] = $result;
    // echo json_encode($resultFinal);


// $stmt = $conn->query('SELECT * FROM items ORDER BY id_uniq DESC LIMIT 10');
foreach($resultFinal['topDesc'] as $row) {
    
     echo "<item>";
         echo "<title>Name: $row[6]</title>\n";
         echo "<description>Description: $row[3] \n ; 
         $row[8] people added this item to their collection out of $total_items_collections total items added to collection\n
         </description>\n";
         echo "<link>http://localhost/php/populateAPI.php?whichOneRss=$row[0]</link>\n";
         echo "<guid>http://localhost/php/populateAPI.php?whichOneRss=$row[0]</guid>\n";
         echo "<atom:link href='localhost/php/feed.php' rel='self' type='application/rss+xml'/>\n";
     echo "</item>\n";

    }   

    echo "</channel>\n";
    echo "</rss>\n";

    

?>