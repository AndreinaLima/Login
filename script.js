function validateForm() {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let confirmPassword = document.getElementById("confirm_password").value

  if (!validateEmail(email)) {
    alert("Por favor, insira um endereço de e-mail válido.")
    return false
  }

  if (password !== confirmPassword) {
    alert("As senhas não coincidem.")
    return false
  }

  alert("Conta criada com sucesso!")
  window.location.href = "index.html"

  return true
}

let createAccountButton = document.querySelector(
  ".register-card-form button[type='submit']"
)
if (createAccountButton) {
  createAccountButton.addEventListener("click", function (event) {
    event.preventDefault()
    validateForm()
  })
}

function togglePasswordVisibility(inputField, showButton, hideButton) {
  if (inputField.type === "password") {
    inputField.type = "text"
    showButton.style.display = "none"
    hideButton.style.display = "inline-block"
  } else {
    inputField.type = "password"
    showButton.style.display = "inline-block"
    hideButton.style.display = "none"
  }
}

let showPasswordButton = document.getElementById("showPasswordButton")
let hidePasswordButton = document.getElementById("hidePasswordButton")
let passwordInput = document.getElementById("password")
if (showPasswordButton && hidePasswordButton && passwordInput) {
  showPasswordButton.addEventListener("click", function () {
    togglePasswordVisibility(
      passwordInput,
      showPasswordButton,
      hidePasswordButton
    )
  })

  hidePasswordButton.addEventListener("click", function () {
    togglePasswordVisibility(
      passwordInput,
      hidePasswordButton,
      showPasswordButton
    )
  })
}


