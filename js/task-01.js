const categories = document.querySelector("#categories");
console.log(`Numbers of categories: ${categories.children.length}`);

const list = document.querySelectorAll(".item");
list.forEach((element) =>
  console.log(`Category: ${element.firstElementChild.textContent} 
Elements: ${element.lastElementChild.children.length}`)
);
