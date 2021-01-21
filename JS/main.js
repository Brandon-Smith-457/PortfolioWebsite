window.onload = windowLoad;

function windowLoad() {
    if (sessionStorage.getItem("mode") == "Dark Mode") {
        toggleDarkMode();
    }
}

function toggleDarkMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("mainDarkMode");

    var buttonElement = document.getElementById("darkModeButton");
    if (buttonElement.innerHTML == "Dark Mode") {
        sessionStorage.setItem("mode", "Dark Mode");
        buttonElement.innerHTML = "Light Mode";
    }
    else {
        sessionStorage.setItem("mode", "Light Mode");
        buttonElement.innerHTML = "Dark Mode";
    }
}