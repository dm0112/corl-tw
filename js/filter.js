function filter(){
    var api = 'http://localhost:4004/php/filterAPI.php?';

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var country = document.getElementById("country").value;
    var type = document.getElementById("type").value;
    var category = document.getElementById("category").value;
    var price = documnet.getElementById("price").value;
    api = api.concat("&name=", name, "&description=", description, "&country=", country,"&type=", type, "&category=", category,"&price=",price);

    fetch(api)
        .then(result => result.json())
        .then(data => {
            
            console.log(data);
            
        });
}