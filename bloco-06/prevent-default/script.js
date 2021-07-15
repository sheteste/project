


const button = document.querySelector("#buttonSubmit");
let inputName = document.querySelector("#inputName");
const nameUser = document.querySelector("#nameUser");

function getUserValue(event){
    event.preventDefault();
    console.log(inputName.value);
    nameUser.innerHTML = inputName.value;
}
button.addEventListener('click', getUserValue);