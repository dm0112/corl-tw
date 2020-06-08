window.onload = function() {
    console.log(getCookie());
    if (getCookie() == undefined) {
        alert("Access denied!");
        window.location.href = "../index.html";
    }
}

function changePass() {
    var api = 'http://localhost/php/changePasswordAPI.php?user=';

    var user = getCookie();
    var oldPass = document.getElementById("oldPass").value;
    var newPass = document.getElementById("newPass").value;
    var newPassConfirm = document.getElementById("newPassConfirm").value;

    api = api.concat(user, "&oldPass=", oldPass, "&newPass=", newPass, "&confirmNewPass=", newPassConfirm);
    console.log(api);
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['responseCode'] == 400)
                alert("Unexpected error!");
            else if (data['responseCode'] == 411)
                alert("Neither field must be empty!");
            else if (data['responseCode'] == 406)
                alert("New password confirmation failed!")
            else if (data['responseCode'] == 403)
                alert("Invalid current password!");
            else alert("Password successfully updated!")
        });
}

function changeEmail() {
    var api = 'http://localhost/php/changeEmailAPI.php?user=';

    var user = getCookie();
    var oldEmail = document.getElementById("oldEmail").value;
    var newEmail = document.getElementById("newEmail").value;
    var confirmNewEmail = document.getElementById("newEmailConfirm").value;
    var oldPass = document.getElementById("emailPass").value;

    api = api.concat(user, "&oldEmail=", oldEmail, "&newEmail=", newEmail, "&confirmNewEmail=", confirmNewEmail, "&oldPass=", oldPass);
    console.log(api);
    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['responseCode'] == 400)
                alert("Unexpected error!");
            else if (data['responseCode'] == 411)
                alert("Neither field must be empty!");
            else if (data['responseCode'] == 406)
                alert("New email confirmation failed!")
            else if (data['responseCode'] == 403)
                alert("Invalid current password!");
            else alert("Email successfully updated!")
        });
}