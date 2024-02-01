document.addEventListener("DOMContentLoaded", function () {
  var togglePasswordButton = document.getElementById("togglePasswordButton")
  var passwordInput = document.getElementById("password")

  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        togglePasswordButton.innerHTML =
          '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility</span>'
      } else {
        passwordInput.type = "password"
        togglePasswordButton.innerHTML =
          '<span class="material-icon material-symbols-outlined" style="cursor: pointer;">visibility_off</span>'
      }
    })
  }



  // Função auxiliar para validar o formato do email
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
  }
})
