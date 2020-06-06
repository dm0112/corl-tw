function showLogin() {
    document.getElementById("logFrame").style.display = "flex";
    document.getElementById("regFrame").style.display = "none";
}

function showRegister() {
    document.getElementById("logFrame").style.display = "none";
    document.getElementById("regFrame").style.display = "flex";
}

function tryRegister() {
    //                      port schimbat aici si mai jos
    var api = 'http://localhost/php/registerAPI.php?email=';

    var email = document.getElementById("emailReg").value;
    var username = document.getElementById("userReg").value;
    var password = document.getElementById("passReg").value;

    api = api.concat(email, "&user=", username, "&password=", password);

    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['numRowEmail'] == -2)
                alert("Email cannot be empty!");
            else if (data['numRowUsers'] == -2)
                alert("Username cannot be empty!");
            else if (data['passLength'] == 0)
                alert("Password cannot be empty!");
            else if (data['numRowEmail'] > 0)
                alert("Email already in use!");
            else if (data['numRowUsers'] > 0)
                alert("User already exists!");
            else alert("User successfully registered!");
        });
}

function tryLogin() {
    //                      port schimbat aici
    var api = 'http://localhost/php/loginAPI.php?user=';

    var username = document.getElementById("userLog").value;
    var password = document.getElementById("passLog").value;

    api = api.concat(username, "&password=", password);

    fetch(api)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data['numRowUsers'] == -2)
                alert("Username cannot be empty!");
            else if (data['numRowUsers'] == -3)
                alert("Password cannot be empty!");
            else if (data['numRowUsers'] == 0)
                alert("Invalid credentials!");
            else {
                alert("You have been logged in!");
                //document.location.href = "index.html";
                document.getElementById("notLoggedIn").style.display = "none";
                document.getElementById("loggedIn").style.display = "flex";

            }

        });
}