function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body')
const buttonChangeColor = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  body.style.backgroundColor = nameColor.textContent = getRandomHexColor();
})