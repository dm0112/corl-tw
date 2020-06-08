function refresh() {
    location.reload();
}


function showMyItems(user) { //apel showMyItems(getCookie())
    var api = 'http://localhost/php/populateAPI.php?whichOnes=owned&user='.concat(user);
    console.log(api);
    fetch(api)
        .then(result => result.json())
        .then(data => {
            // console.log(data);
            // data.forEach(element => {
            //     console.log(element);
            //     console.log( " ");
            // });
            if (data['responseCode'] == 200) {
                // console.log(data['responseCode']);
                cleanPage();
                populate(data['results']);
            } else alert("Unknown error occured!");
        });
}

//console.log(document.cookie);
//getAllUsers(getCookie());

function showOnLoad(link, str) {
    var page;
    if (link != undefined)
        var page = link.href.split("/").slice(-1)[0].split("#");
    else
        var page = str.split("/").slice(-1)[0].split("#");
    //var page = document.location.href.split("/").slice(-1)[0].split("#");
    if (page[1] != undefined) {
        var type;
        if (page[1] == "alcoholic")
            type = 1;
        else
            type = 2;

        if (page[2] != undefined) {
            var cat = page[2];
            showPart(cat, type);
        } else {
            showPart("all", type)
        }
    } else {
        console.log("showall");
        showAll();
    }
}
console.log(document.location.href.split("/").slice(-1)[0].split("#")[0] == "index.html");
console.log(document.location.href.split("/").slice(-1));

if (document.location.href.split("/").slice(-1)[0].split("#")[0] == "index.html" ||
    document.location.href.split("/").slice(-1)[0].split("#")[0] == "")
    showOnLoad(undefined, document.location.href);
// function sendHome(cat, type) {
//     console.log(cat + " " + type);
//     if (location.href.split("/").slice(-1) != "index.html") {
//         window.location.href = "../index.html";
//         //#" + cat.charAt(0).toUpperCase() + cat.slice(1);
//     }
//     //window.addEventListener("load", function() {
//     if (cat != undefined && type != undefined) {

//         if (cat == "all") {
//             if (type == 1) {
//                 document.getElementById("alcoholicSub").click();
//             } else
//                 document.getElementById("nonAlcoholicSub").click();
//         } else {
//             cat = cat.charAt(0).toUpperCase() + cat.slice(1);

//             if (type == 1) {
//                 console.log("alcoholic" + cat);
//                 document.getElementById("alcoholic" + cat).click();

//             } else
//                 document.getElementById("nonAlcoholic" + cat).click();
//         }
//     }
//     //});
// }

function showAll() {

    //sendHome(undefined, undefined);
    var api = 'http://localhost/php/populateAPI.php?whichOnes=all&type=';
    console.log(api);
    fetch(api)
        .then(result => result.json())
        .then(data => {
            // console.log(data);
            // data.forEach(element => {
            //     console.log(element);
            //     console.log( " ");
            // });
            if (data['responseCode'] == 200) {
                // console.log(data['responseCode']);
                cleanPage();
                populate(data['results']);
            } else alert("Unknown error occured!");
        });

}

// console.log(location.href.split("/"));
// if (location.href.split("/").slice(-1) == "index.html") {
//     //document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("show");
//     showAll();
//     //    });
// }

function showPart(cat, type) {
    //sendHome(cat, type);
    document.getElementById
    var api = 'http://localhost/php/populateAPI.php?whichOnes=';
    api = api.concat(cat, "&type=", type);
    console.log(api);
    fetch(api)
        .then(result => result.json())
        .then(data => {
            console.log(location.href.includes("index.html"));
            // console.log(data['responseCode']);
            if (data['responseCode'] == 200) {
                cleanPage();
                populate(data['results']);
            } else alert("Unknown error occured!");


        });

}

function populate(items) {



    items.forEach(el => {
        // console.log(el);


        // elementul este despartit in 3 bucati pentru a verifica daca exista user logat pentru butonul de addToMyList

        var elementPart1 =
            '                <div class = "item">' +
            // '                <button type="button" class="addToMyList" name="addToMyList" onclick="addToMyList(item, idUser)">+</button>' +
            '                <table>' +
            '                    <tr>' +
            '                        <td>Name</td>' +
            '                        <td>' + el[6] + '</td>' +
            '                    </tr>' +
            // '                    <tr><img id = "imgItem" src="' + el[5] + '" alt=""> ' + //imaginea care 2x erori
            '                    <tr><img id = "imgItem" src="test.jpg" alt=""> ' + //imaginea care 2x erori

            '                      </tr>' +
            '                    <tr>' +
            '                        <td>Type</td>' +
            '                        <td>' + type(el[1]) + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Category</td>' +
            '                        <td>' + el[2] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Description</td> ' +
            '                        <td>' + el[3] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Country</td>' +
            '                        <td>' + el[4] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Value</td>' +
            '                        <td>' + el[7] + '</td>' +
            '                    </tr>';

        if (getCookie()) var elementPart2 =
            '                    <tr>' +
            '                        <td></td>' +
            '                        <td></td>' +
            '                        <td><button type="button" class="addToMyList" name="addToMyList" onclick="addToMyList(' + el[0] + ', ' + "'" + getCookie() + "'" + ')">➕</button></td>' +
            '                    </tr>';
        else var elementPart2 = "";
        var elementPart3 =

            '                </table>' +

            '                </div>';
        var element = elementPart1.concat(elementPart2).concat(elementPart3);
        document.getElementById("items").insertAdjacentHTML('beforeend', element);

    });


}

function type(a) {
    if (a == 1)
        return "Alcoholic";

    else if (a == 2)
        return "Non-Alcoholic";
    return "";
}
// function addCss(){ // de adaugat hover - fixat eliminand "alt" property
//     var cssFile = window.document.styleSheets[0];
//     cssFile.insertRule('#imgItem:hover{border-radius: 20px;transform: scale(1.7);} ');
// }


// stergem elementele existente pentru a le afisa pe cele filtrate
function cleanPage() {
    var elementsToBeDeleted = document.getElementsByClassName("item");
    while (elementsToBeDeleted.length > 0) {
        elementsToBeDeleted[0].parentNode.removeChild(elementsToBeDeleted[0]);
    }
}