function ShowHideDiv(mehr) {
    var info_text = document.getElementById("info_text");
    info_text.style.display = mehr.checked ? "flex" : "none";

    var text = document.getElementsByClassName("mehr_anzeigen");
    text[0].innerHTML = mehr.checked ? "weniger anzeigen" : "Mehr anzeigen"
    text[0].style.color = mehr.checked ? "#003056" : "#810a1a"
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}