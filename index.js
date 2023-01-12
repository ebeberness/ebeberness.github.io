console.log("Welcome to my portfolio page!");

const buttonDark = document.querySelector(".button-dark");
const buttonLight = document.querySelector(".button-light");

buttonDark.addEventListener("click", changeToDark);
buttonLight.addEventListener("click", changeToLight);

function changeToDark(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}  
function changeToLight(){
    document.body.style.backgroundColor = "pink"
    document.body.style.color = "black"
}  

