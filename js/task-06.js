const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', () => {
const inputValue = inputText.value;

if (inputValue.length === parseInt(inputText.getAttribute('data-length'))) {

    inputText.classList.add('valid');
    inputText.classList.remove('invalid')
} else {
    inputText.classList.add('invalid')
    inputText.classList.remove('valid')
    
}
})
