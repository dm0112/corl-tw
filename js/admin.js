window.onload = function() {
    console.log(getCookie());
    if (getCookie() != "admin") {
        //document.querySelector("*").style.display = "none";
        //document.getElementsByTagName("body").style.display = "none";
        alert("Access denied!");
        window.location.href = "../index.html";
    }
}

var globalPass;

function confirmPassword() {
    var api = 'http://localhost/php/adminAPI.php?password=';

    var password = document.getElementById("confirmPassInput").value;

    api = api.concat(password);

    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['responseCode'] == 411)
                alert("Password cannot be empty!");
            else if (data['responseCode'] == 401)
                alert("Wrong password!");
            else if (data['responseCode'] == 400)
                alert("Unknown error occured!");
            else {
                //alert("Password confirmed, " + getCookie() + "!");
                globalPass = password;
                showPanel();
            }
        });
}

function showPanel() {
    document.getElementsByClassName("userTable")[0].style.display = "flex";
    document.getElementById("confirmPasswordFrame").style.display = "none";
    getAllUsers(getCookie());

}

function deleteUser(row) {
    console.log(row);
    var rowInd = row.parentNode.rowIndex;
    var user = document.getElementById("userTable").rows[rowInd].cells[2].innerHTML;
    console.log(rowInd + " " + user);
    if (confirm("Are you sure you want to permanently delete user '" + user + "'?")) {

        var api = 'http://localhost/php/adminDeleteAPI.php?user='.concat(user + '&adminPass=' + globalPass);
        console.log(api);

        fetch(api)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data['responseCode'] == 401)
                    alert("Wrong password!");
                else if (data['responseCode'] == 400)
                    alert("Unknown error occured!");
                else {
                    alert("User " + user + " permanently deleted!");
                    document.getElementById("userTable").deleteRow(rowInd);
                    // location.reload();
                    // showPanel();
                }
            });
    }
}

//getAllUsers(getCookie());
//populatePanel(getAllUsers(getCookie()));

function populatePanel(users) {
    console.log(users);
    var k = 0;
    users.forEach(user => {
        k++;
        var row =
            '<tr><td>' + user[0] + '</td><td>' + user[1] +
            '</td><td>' + user[2] + '</td><td>' + user[3] +
            '</td><td><img src="../delete.png" class="deleteIcon" id="deleteIcon' + k.toString() + '" onclick="deleteUser(this.parentNode)"></td></tr>';
        document.getElementById("userTable").insertAdjacentHTML('beforeend', row);

    })
}

function getAllUsers(user) { // apel getAllUsers(getCookie())
    var api = 'http://localhost/php/populateAPI.php?whichOnes=users&user='.concat(user);
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
                console.log("ok");
                // console.log(data['responseCode']);
                console.log(data['results']);
                populatePanel(data['results']); // de facut functie pentru afisarea userilor
            } else alert("Unknown error occured!");
        });
    //return null;
}