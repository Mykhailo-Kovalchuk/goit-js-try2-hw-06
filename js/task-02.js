const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

//-------------------------- Мій перший спосіб --------------------

// ingredients.forEach((ingredient) => {
//   const elementList = document.createElement("li");
//   elementList.classList.add("item");

//   // console.log(elementList);
//   elementList.textContent = ingredient;

//   ingredientsList.append(elementList);
// });


//-------------------------- Мій другий спосіб спосіб --------------------
const markup = ingredients.map(element => `
<li>${element}</li>
`).join("");

ingredientsList.insertAdjacentHTML('afterbegin', markup);