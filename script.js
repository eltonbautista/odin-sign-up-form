const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const firstName = document.getElementById("first_name")
const lastName = document.getElementById("last_name")

password.addEventListener("input", function (event) {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("Please include: At least 8 characters, An uppercase letter, a number, and/or a symbol.");
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});

confirmPassword.addEventListener("input", function (event) {
    if (confirmPassword.validity.patternMismatch) {
        confirmPassword.setCustomValidity("Please include: At least 8 characters, An uppercase letter, a number, and/or a symbol.");
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity("");
    }
  });

  firstName.addEventListener("input", function (event) {
    if (firstName.validity.patternMismatch) {
        firstName.setCustomValidity("No symbols or numbers please!");
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity("");
    }
  });

  lastName.addEventListener("input", function (event) {
    if (lastName.validity.patternMismatch) {
        lastName.setCustomValidity("No symbols or numbers please!");
        lastName.reportValidity();
    } else {
        lastName.setCustomValidity("");
    }
  });
