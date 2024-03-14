// DOM Manipulation

// Event Listeners

// element.addEventListener("click", function);

const buttonThree = document.querySelector(".btn-3");

// console.log(buttonThree);

function alertBtn() {
    alert('I also love Javascript');
}

buttonThree.addEventListener("click", alertBtn);

const buttonOne = document.querySelector(".btn-1");

function bgChange() {
    buttonOne.style.backgroundColor = 'red';
}

buttonOne.addEventListener('mouseover', bgChange);