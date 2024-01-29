document.addEventListener("DOMContentLoaded", function () {
  // Função principal de validação do formulário
  function validateForm() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm_password").value

    // Valida o email
    if (!validateEmail(email)) {
      alert("Por favor, insira um endereço de e-mail válido.")
      return false
    }

    // Verifica a correspondência das senhas
    if (password !== confirmPassword) {
      alert("As senhas não coincidem.")
      return false
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    alert("Conta criada com sucesso!")
    // Aqui você pode redirecionar para a tela de login
    window.location.href = "index.html"

    // Restante da sua lógica de envio do formulário
    return true
  }

  // Adiciona evento de clique ao botão de criar conta na tela de registro
  var createAccountButton = document.querySelector(
    ".register-card-form button[type='submit']"
  )
  if (createAccountButton) {
    createAccountButton.addEventListener("click", function (event) {
      event.preventDefault() // Impede o envio do formulário por padrão
      validateForm() // Chama a função de validação do formulário
    })
  }

  // Função auxiliar para alternar a visibilidade da senha
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

  // Adiciona evento de clique aos botões de mostrar/esconder senha na tela de registro
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

  // Função auxiliar para validar o formato do email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }
})
