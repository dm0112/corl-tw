function showInsert() {
    document.getElementById("addItem").style.display = "flex";
    document.getElementById("filter").style.display = "none";
}

function reverseShowInsert() {
    document.getElementById("addItem").style.display = "none";
    document.getElementById("filter").style.display = "flex";
}

function getBase64(file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
}

function callback(img) {
    // console.log("Base64 of file is", base64Data); // Here you can have your code which uses Base64 for its operation, // file to Base64 by oneshubh
    console.log(img);
}


function addItem() {

    var api = 'http://localhost/php/insertAPI.php?';

    var name = document.getElementById("addName").value;
    var description = document.getElementById("addDescription").value;
    var country = document.getElementById("addCountry").value;
    // var type = document.getElementById("addType").value;
    // var category = document.getElementById("addCategory").value;
    var price = document.getElementById("addPrice").value;
    var img = document.getElementById("addImage").files[0];

    if(document.getElementById("addCategory1").checked)
        category = document.getElementById("addCategory1").value;
    else if(document.getElementById("addCategory2").checked)
        category = document.getElementById("addCategory2").value;
    else category = document.getElementById("addCategory3").value;


    
    if(type1 = document.getElementById("addType1").checked)
        type = document.getElementById("addType1").value;
    else 
    var type = document.getElementById("addType2").value;




    // api = api.concat("&name=", name, "&description=", description, "&country=", country,"&type=", type, "&category=", category,"&price=",price,"&img=",img);
    // ----  
    // getBase64(img, callback);
    //  imaginea nu se bine in db, de continuat aici
    api = api.concat("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img);
    // api = api.concat("&img=",img);
    console.log("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img)
    fetch(api)
        .then(result => result.json())
        .then(data => {

            if (data['responseCode'] == 200) {
                console.log(data);
                alert("Item inserted successfully ");
                window.location.replace("index.html");
            } else alert("Unknown error occured!");

        });

    
}
