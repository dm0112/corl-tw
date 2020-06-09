function filter() {
    var api = 'http://localhost/php/filterAPI.php?';

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var country = document.getElementById("country").value;
    var price = document.getElementById("price").value;

    // var category = document.getElementById("category").value;
    category = "";
    if(document.getElementById("category1").checked)
        category = document.getElementById("category1").value;
    else if(document.getElementById("category2").checked)
        category = document.getElementById("category2").value;
    else   if(document.getElementById("category3").checked) 
        category = document.getElementById("category3").value;

    type = "";
    
    if(type1 = document.getElementById("type1").checked)
        type = document.getElementById("type1").value;
    else if(type1 = document.getElementById("type2").checked)
    var type = document.getElementById("type2").value;
    
    

    api = api.concat("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price);
    // console.log(api);

    fetch(api)
        .then(result => result.json())
        .then(data => {
            if (data['responseCode'] == 200) {
                // console.log(data);
                // functii din show.js (inclus in index.html)
                cleanPage();
                populate(data['results']);
            } else alert("Unknown error occured!");

        });
}