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
            if (data['responseCode'] == 411)
                alert("Email, username or password cannot be empty!");
            else if (data['numRowEmail'] > 0)
                alert("Email already in use!");
            else if (data['numRowUsers'] > 0)
                alert("User already exists!");
            else if (data['responseCode'] == 400)
                alert("Unknown error occured!");
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
            if (data['responseCode'] == 411)
                alert("Username or password cannot be empty!");
            else if (data['responseCode'] == 401)
                alert("Invalid credentials!");
            else if (data['responseCode'] == 400)
                alert("Unknown error occured!");
            else {
                alert("You have been logged in!");
                //document.location.href = "index.html";
                setUserCookie(username);
                setUserMenu();

                var rememberMe = document.getElementById("rememberMe");
                if (rememberMe.checked == true) {
                    document.cookie = "rememberUser=" + document.getElementById("userLog").value;
                    document.cookie = "rememberPass=" + document.getElementById("passLog").value;
                } else {
                    console.log(document.cookie.indexOf("rememberUser="));
                    if (document.cookie.indexOf("rememberUser=") != -1) {
                        //document.cookie = "rememberUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
                        //document.cookie = "rememberPass=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
                        deleteCookie("rememberUser");
                        deleteCookie("rememberPass");
                    }
                    console.log(document.cookie);
                }
                document.location.href = "../index.html";

            }

        });
}