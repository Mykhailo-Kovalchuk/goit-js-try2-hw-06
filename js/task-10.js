function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnRemove = document.querySelector("[data-destroy]");

const input = document.querySelector(".input");
const matherDiv = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = parseFloat(input.value);

  if (amount > 100 || amount < 0) {
    alert("Числовий діапазон від 1 до 100!");

//------------------------- Мій перший спосіб --------------------------
  // } else {
  //   let boxSize = 30;
  //   for (let i = 1; i <= amount; i++) {
  //     const newDiv = document.createElement("div");

  //     newDiv.textContent = `Box ${i}`;
  //     newDiv.style.backgroundColor = getRandomHexColor();
  //     newDiv.style.width = `${boxSize}px`;
  //     newDiv.style.height = `${boxSize}px`;
  //     newDiv.style.fontSize = 12 + "px";

  //     matherDiv.append(newDiv);

  //     boxSize += 10;

  //     console.log(matherDiv);

  //     btnRemove.addEventListener("click", () => {
  //       //Це моя функція destoyBox
  //       newDiv.remove();
  //       input.value = "";
  //     });
  //   }
  // } 

// ---------------------- мій другий спосіб -----------------------
  } else { 
    let boxSize = 30;
    const newDivsArray = [];
    

    for (let i = 1; i <= amount; i++) {
      const newDiv = document.createElement("div");

      newDiv.textContent = `Box ${i}`;
      newDiv.style.backgroundColor = getRandomHexColor();
      newDiv.style.width = `${boxSize}px`;
      newDiv.style.height = `${boxSize}px`;
      newDiv.style.fontSize = 12 + "px";

      newDivsArray.push(newDiv);

      boxSize += 10;
    }


    matherDiv.innerHTML = '';
newDivsArray.forEach(item => {
  matherDiv.append(item);
});


btnRemove.addEventListener("click", () => {
  //Це моя функція destoyBox
  input.value = "";
  newDivsArray.forEach(div => div.remove());

});
};
}

btnCreate.addEventListener("click", createBoxes);
