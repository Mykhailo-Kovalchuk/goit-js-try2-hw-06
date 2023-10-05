const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const elementList = document.createElement("li");
  elementList.classList.add("item");

  // console.log(elementList);
  elementList.textContent = ingredient;

  ingredientsList.append(elementList);
});
