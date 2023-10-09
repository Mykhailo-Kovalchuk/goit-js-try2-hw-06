const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },

{url: "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696464000&semt=sph",
alt: "Dog"
}
];

const gallery = document.querySelector(".gallery");

//-------------------------- Мій перший спосіб --------------------
// console.log(gallery);

// images.forEach(image => {
//   const photoList = document.createElement("li");
//   const photo = document.createElement("img");
//   photo.src = image.url;
//   photo.alt = image.alt;

//   // console.log(image);
//   // console.log(photo);
//   photoList.append(photo);
  
//   photo.style.width = "500px";

//   gallery.style.display = 'flex';
//   gallery.style.flexDirection = 'column';
//   gallery.style.gap = "36px";
//   gallery.style.padding = '0'; 
  
//   photoList.style.listStyleType = 'none'; 
//   photoList.style.margin = "0 auto"

  
//   gallery.append(photoList);
// });

//-------------------------- Мій другий спосіб --------------------
const markupImages = images.map((image) => `
<li class="photo-list">
<img src="${image.url}" alt="${image.alt} class="photo""></li>`
).join("");

gallery.insertAdjacentHTML('afterbegin', markupImages);