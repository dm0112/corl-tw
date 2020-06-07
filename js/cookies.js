function setUserCookie(username) {
    document.cookie = "user=" + username + "; path=/;";
}

function deleteCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

function deleteGlobalCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie() {
    if (document.cookie.indexOf('user=') != -1) {
        c = document.cookie.split('; ').find(row => row.startsWith('user')).split('=')[1];
        //console.log(c);
        return c;
    }
    return null;
}

function setUserMenu() {
    if (getCookie() != null) {
        if (getCookie() == "admin") {
            document.getElementById("adminPanel").style.display = "flex";
        }
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("loggedIn").style.display = "flex";
        document.getElementById("usernameMenu").innerText = getCookie();
    }
}

function rememberMe() {

}
// function setUser(username) {
//     document.getElementById("usernameMenu").innerText = username;
// }
document.addEventListener("DOMContentLoaded", function(event) {
    setUserMenu();
    console.log(getCookie());
});


//console.log(document.cookie.split('; ').find(row => row.startsWith('rememberPass')).split('=')[1]);
if (location.href.split("/").slice(-1) == "logReg.html" && document.cookie.indexOf('rememberUser=') != -1) {
    document.addEventListener("DOMContentLoaded", function(event) {
        console.log(document.cookie);
        document.getElementById("rememberMe").checked = true;
        document.getElementById("userLog").value = document.cookie.split('; ').find(row => row.startsWith('rememberUser')).split('=')[1];
        document.getElementById("passLog").value = document.cookie.split('; ').find(row => row.startsWith('rememberPass')).split('=')[1];
    });

}

function checkAdminPermissions() {
    console.log(document.cookie);
    //console.log(document.cookie.split('; ').find(row => row.startsWith('user')).split('=')[1]);
    if (document.cookie.indexOf('user=') != -1) {
        if (document.cookie.split('; ').find(row => row.startsWith('user')).split('=')[1] != "admin") {
            alert("Access denied!");
            return false;
        }
        var pass = prompt("Confirm password:");
        console.log(pass);
    }
}