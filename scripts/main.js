/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/


function changeText(){
    var name = window.prompt("Write your name");
    document.getElementById("text").innerHTML ="Mozilla is Cool, " + name;

}
/*
// Changing the h1 text by pointing the logo
document.getElementById("img").addEventListener("mouseover", mouseOver);
function mouseOver(){
    document.getElementById("text").innerHTML = 'Hello world!';
}*/


// The second change
document.getElementById("img").addEventListener("mouseover", mouseOver);
function mouseOver(){
    document.getElementById("text").innerHTML = 'Is Brave even Cooler?';
    document.getElementById("img").src = "images/brave-icon.png";
    document.body.style.backgroundColor = "white";

}
