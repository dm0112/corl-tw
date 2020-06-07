function refresh() {
    location.reload();
}

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

if (document.location.href.split("/").slice(-1)[0].split("#")[0] == "index.html")
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
            cleanPage();
            populate(data);
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

            cleanPage();
            populate(data);


        });

}

function populate(items) {

    items.forEach(el => {
        // console.log(el);




        var element =
            '                <div class = "item">' +
            '                <table>' +
            '                    <tr>' +
            '                        <td>Name</td>' +
            '                        <td>' + el[7] + '</td>' +
            '                    </tr>' +
            '                    <tr><img id = "imgItem" src="' + el[6] + '" alt=""> ' +
            '                      </tr>' +
            '                    <tr>' +
            '                        <td>Type</td>' +
            '                        <td>' + type(el[2]) + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Category</td>' +
            '                        <td>' + el[3] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Description</td> ' +
            '                        <td>' + el[4] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Country</td>' +
            '                        <td>' + el[5] + '</td>' +
            '                    </tr>' +
            '                    <tr>' +
            '                        <td>Value</td>' +
            '                        <td>' + el[8] + '</td>' +
            '                    </tr>' +
            '                </table>' +
            '                </div>';


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