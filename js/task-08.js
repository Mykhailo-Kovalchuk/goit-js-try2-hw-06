const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", login);

function login(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Будь ласка, заповніть всі поля.");
  } else {
    const formData = { email: email.value, password: password.value };

    console.log(formData);
    loginForm.reset();
  }
}
