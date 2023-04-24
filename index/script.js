'use strict';

function closeNav() {

    document.getElementById("navBar").style.display = "none";
    document.getElementById("mainMenu").style.width = "100%";
    document.getElementById("mainMenu").style.float = "none";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("header").style.display = "flex";
    document.getElementById("header").style.gap = "20px";

}

function openNav() {
    document.getElementById("mainMenu").style.float = "right";
    document.getElementById("mainMenu").style.width = "82%";
    document.getElementById("navBar").style.display = "inline-block";
    document.getElementById("openNav").style.display = "none";

}