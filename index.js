console.log("Welcome to my portfolio page!");

const buttonDark = document.querySelector(".button-dark");
const buttonLight = document.querySelector(".button-light");

buttonDark.addEventListener("click", changeToDark);
buttonLight.addEventListener("click", changeToLight);
// button.addEventListener('click', function () {
//     var elmWitchChange = document.getElementsByClassName('light')
//     for (var i = 0; i < elmWitchChange.length; i++) {
//         elmWitchChange[i].classList.toggle('dark')
//     }
// })

function changeToDark(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}  
function changeToLight(){
    document.body.style.backgroundColor = "pink"
    document.body.style.color = "black"
}  

