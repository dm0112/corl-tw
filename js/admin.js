window.onload = function() {
    console.log(getCookie());
    if (getCookie() != "admin") {
        //document.querySelector("*").style.display = "none";
        //document.getElementsByTagName("body").style.display = "none";
        alert("Access denied!");
        window.location.href = "../index.html";
    }
}

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
                alert("Password confirmed, " + getCookie() + "!");
                showPanel();
            }
        });
}

function showPanel() {
    document.getElementById("confirmPasswordFrame").style.display = "none";
}