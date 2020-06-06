function filter(){
    var api = 'http://localhost/php/filterAPI.php?';

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var country = document.getElementById("country").value;
    var type = document.getElementById("type").value;
    var category = document.getElementById("category").value;
    var price = document.getElementById("price").value;
    api = api.concat("name=", name, "&description=", description, "&country=", country,"&type=", type, "&category=", category,"&price=",price);

    fetch(api)
        .then(result => result.json())
        .then(data => {
            
            // console.log(data);
            // functii din show.js (inclus in index.html)
            cleanPage();
            populate(data);
            
        });
}
