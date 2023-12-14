document.getElementById("home").addEventListener("mouseover", mouseOver);
document.getElementById("home").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("home").style.color = "#3bbca7";
    document.getElementById("contact").style.color = "#666666";

}

function mouseOut() {
    document.getElementById("home").style.color = "#666666";
    document.getElementById("contact").style.color = "#3bbca7";

}
