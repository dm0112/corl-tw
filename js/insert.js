function showInsert() {
    document.getElementById("addItem").style.display = "flex";
    document.getElementById("allBody").style.display = "none";
}

function reverseShowInsert() {
    document.getElementById("addItem").style.display = "none";
    document.getElementById("allBody").style.display = "flex";
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
    var type = document.getElementById("addType").value;
    var category = document.getElementById("addCategory").value;
    var price = document.getElementById("addPrice").value;
    var img = document.getElementById("addImage").files[0];
    // api = api.concat("&name=", name, "&description=", description, "&country=", country,"&type=", type, "&category=", category,"&price=",price,"&img=",img);
    // ----  
    // getBase64(img, callback);
    //  imaginea nu se bine in db, de continuat aici
    api = api.concat("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img);
    // api = api.concat("&img=",img);
    console.log("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img)
    fetch(api)
        .then(result => result.text())
        .then(data => {

            console.log(data);
            window.location.replace("index.html");

        });
}