function addToMyList(item_id, username){
    // console.log(item_id, username);
    var api = 'http://localhost/php/operationsAPI.php?operation=addItemToList';
    api = api.concat("&item_id=",item_id,"&username=",username);
    fetch(api)
        .then(result => result.json())
        .then(data => {
            // console.log(location.href.includes("index.html"));
            // console.log(data['responseCode']);
            if(data['responseCode'] == 200){
            console.log("added succesfully");
            }
            else if(data['responseCode'] == 400)
                    alert("Item already in the list");
                    else alert("Unkown error occured!");


        });


}

// function addCss(){ // de adaugat hover - fixat eliminand "alt" property
// var cssFile = window.document.styleSheets[0];
// cssFile.insertRule('.addToMyList{display: flex;} ');
// }