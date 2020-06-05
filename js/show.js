function showAll(){
    var api = 'http://localhost:4004/php/populateAPI.php?whichOnes=all';
    fetch(api)
        .then(result => result.json())
        .then(data => {
            
            // console.log(data);
            // data.forEach(element => {
            //     console.log(element);
            //     console.log( " ");
            // });
            populate(data);
        });

}
function showPart(cat, type){
    var api = 'http://localhost:4004/php/populateAPI.php?whichOnes=';
    api = api.concat(cat,"&type=",type);
    fetch(api)
        .then(result => result.json())
        .then(data => { 
            
            console.log(data);
            cleanPage();
            populate(data);

            
        });

}

function populate(items){

    items.forEach(el => {
        // console.log(el);
    

    

var element = 
'                <div class = "item">'+
'                <table>'+
'                    <tr>'+
'                        <td>Name</td>'+ 
'                        <td>'+el[7]+'</td>'+
'                    </tr>'+
'                    <tr><img id = "imgItem" src="'+el[6]+'" alt=""> '+
'                      </tr>'+
'                    <tr>'+
'                        <td>Type</td>'+
'                        <td>'+type(el[2])+'</td>'+
'                    </tr>'+
'                    <tr>'+
'                        <td>Category</td>'+
'                        <td>'+el[3]+'</td>'+
'                    </tr>'+
'                    <tr>'+
'                        <td>Description</td> '+
'                        <td>'+el[4]+'</td>'+
'                    </tr>'+
'                    <tr>'+
'                        <td>Country</td>'+
'                        <td>'+el[5]+'</td>'+
'                    </tr>'+
'                    <tr>'+
'                        <td>Value</td>'+
'                        <td>'+el[8]+'</td>'+
'                    </tr>'+
'                </table>'+
'                </div>';
	

document.getElementById("items").insertAdjacentHTML('beforeend',element);

});    
    
}

function type(a){
    if(a==1)
        return "Alcoholic";
    
    else if(a==2)
        return "Non-Alcoholic";
    return "";
}
// function addCss(){ // de adaugat hover - fixat eliminand "alt" property
//     var cssFile = window.document.styleSheets[0];
//     cssFile.insertRule('#imgItem:hover{border-radius: 20px;transform: scale(1.7);} ');
// }


// stergem elementele existente pentru a le afisa pe cele filtrate
function cleanPage(){ 
    var elementsToBeDeleted = document.getElementsByClassName("item");
    while(elementsToBeDeleted.length > 0){
        elementsToBeDeleted[0].parentNode.removeChild(elementsToBeDeleted[0]);
    } 
}