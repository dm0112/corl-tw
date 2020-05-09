<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <title>TW</title>
</head>
<body>


    <div id="card-login/ reg">
        <button type="button">Login/ Register</button>
    </div>
    <div id="card-panou-utilizator">
        <button type="button">Panou Utilizator</button>
    </div>

    <div class="card-search">
        <form>
            
        <input type="text" id="card-search-general" name="card-search-general" placeholder="Search..." class="">
        <button type="submit" name="submitSearch" >Search</button>
        
        </form>
    </div>

    <div class="card-menu-b">
        <an class = "card-button-alcoolice">Alcoolice</a>
        <div class="card-menu-aafter"> <!-- submenu, after menu b --> 
            <a href="#capacea">Capace</a>
            <a href="#dopuria">Dopuri</a>
            <a href="#etichetea">Etichete</a>
        </div>

        <a class = "card-button-nealcoolice">Nealcoolice</a>
        <div class="card-menu-nafter"> <!-- submenu, after menu b --> 
            <a href="#capacen">Capace</a>
            <a href="#dopurin">Dopuri</a>
            <a href="#eticheten">Etichete</a>
        </div>
    </div>

    
   

    <div class = "card-expanded-sort">
            
    </div>
    <div class="items">

        <!-- there we will insert items from db -->
    </div>
    
    <input type="search" placeholder="Search.." onkeyup="mySearchFunction()" id="searchSimplu" >


</body>
</html>