document.addEventListener("DOMContentLoaded", function () {
 
  function validateForm() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm_password").value

   
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

 
  var createAccountButton = document.querySelector(
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


  var showPasswordButton = document.getElementById("showPasswordButton")
  var hidePasswordButton = document.getElementById("hidePasswordButton")
  var passwordInput = document.getElementById("password")

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

  var showConfirmPasswordButton = document.getElementById(
    "showConfirmPasswordButton"
  )
  var hideConfirmPasswordButton = document.getElementById(
    "hideConfirmPasswordButton"
  )
  var confirmPasswordInput = document.getElementById("confirm_password")

  if (
    showConfirmPasswordButton &&
    hideConfirmPasswordButton &&
    confirmPasswordInput
  ) {
    showConfirmPasswordButton.addEventListener("click", function () {
      togglePasswordVisibility(
        confirmPasswordInput,
        showConfirmPasswordButton,
        hideConfirmPasswordButton
      )
    })

    hideConfirmPasswordButton.addEventListener("click", function () {
      togglePasswordVisibility(
        confirmPasswordInput,
        hideConfirmPasswordButton,
        showConfirmPasswordButton
      )
    })
  }


  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }
})
