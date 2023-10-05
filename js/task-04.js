const counter = document.querySelector('#counter');
counter.style.display = "flex";
counter.style.gap = "24px";

const value = document.querySelector("#value");
value.style.fontSize = "28px";
value.style.color = "blue";

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

let counterValue = 0; 

buttonPlus.addEventListener('click', () => {
   counterValue = counterValue +=1;
   value.textContent = counterValue;
});

buttonMinus.addEventListener('click', () => {
    counterValue = counterValue -=1;
   value.textContent = counterValue; 
});

