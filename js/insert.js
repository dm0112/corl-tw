function showInsert() {
    document.getElementById("addItem").style.display = "flex";
    document.getElementById("filter").style.display = "none";
}

function reverseShowInsert() {
    document.getElementById("addItem").style.display = "none";
    document.getElementById("filter").style.display = "flex";
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



    
    const formData = new FormData();
    formData.append('files[]',img);
    apiImg = api.concat("&image=yes");

    fetch(apiImg,{
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        if(data['responseCode']==200){
            api = api.concat("&name=", name, "&description=", description, "&country=", country,"&type=", type, "&category=", category,"&price=",price,"&img=",data['imgName']);

            fetch(api)
            .then(result => result.json())
            .then(data => {

                // if (data['responseCode'] == 200) {
                //     console.log(data);
                    alert("Item inserted successfully ");
                    window.location.replace("index.html");
                // } else alert("Unknown error occured!");
                console.log(data);

            });

            }
            else alert("Item add failed, check the fields!")
      })
}

    // ----  
    // var imgconv = 'http://localhost/php/base64conv.php'
    
    //  imaginea nu se bine in db, de continuat aici
    // api = api.concat("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img);
    // api = api.concat("&img=",img);

    
    // console.log("name=", name, "&description=", description, "&country=", country, "&type=", type, "&category=", category, "&price=", price, "&img=", img)
    // console.log(api);
    // console.log(img);
    // fetch(api)
    //     .then(result => result.json())
    //     .then(data => {

    //         // if (data['responseCode'] == 200) {
    //         //     console.log(data);
    //         //     alert("Item inserted successfully ");
    //         //     window.location.replace("index.html");
    //         // } else alert("Unknown error occured!");
    //         console.log(data);

    //     });
    // }
    
