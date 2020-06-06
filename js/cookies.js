function setCookie(username) {
    document.cookie = "user=" + username + "; path=/;";
}

function deleteCookie(key) {
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

function setUser() {
    if (getCookie() != null) {
        document.getElementById("notLoggedIn").style.display = "none";
        document.getElementById("loggedIn").style.display = "flex";
        document.getElementById("usernameMenu").innerText = getCookie();
    }
}

// function setUser(username) {
//     document.getElementById("usernameMenu").innerText = username;
// }
document.addEventListener("DOMContentLoaded", function(event) {
    setUser();
    console.log(getCookie());
});