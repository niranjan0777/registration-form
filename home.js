
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input values
  var name = document.getElementById("Name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmpass").value;

  var gender1 = document.getElementById("dot-1").checked;
  var gender2 = document.getElementById("dot-2").checked;
  var gender3 = document.getElementById("dot-3").checked;

  // Clear all previous error messages
  document.querySelectorAll(".error-message").forEach(function(el) {
    el.textContent = "";
  });

  var hasError = false;

  // Full Name
  if (name === "") {
    document.getElementById("error-name").textContent = "Full Name is required.";
    hasError = true;
  }

  // Username
  if (username === "") {
    document.getElementById("error-username").textContent = "Username is required.";
    hasError = true;
  }

  // Email
  if (email === "") {
    document.getElementById("error-email").textContent = "Email is required.";
    hasError = true;
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    document.getElementById("error-email").textContent = "Invalid email format.";
    hasError = true;
  }

  // Phone
if (phone === "") {
  document.getElementById("error-phone").textContent = "Phone number is required.";
  hasError = true;
} else if (isNaN(phone)) {
  document.getElementById("error-phone").textContent = "Phone number must contain digits only.";
  hasError = true;
} else if (phone.length !== 10) {
  document.getElementById("error-phone").textContent = "Phone number must be 10 digits.";
  hasError = true;
}


  // Password
  if (password === "") {
    document.getElementById("error-password").textContent = "Password is required.";
    hasError = true;
  }

  // Confirm Password
  if (confirmPassword === "") {
    document.getElementById("error-confirm").textContent = "Please confirm your password.";
    hasError = true;
  } else if (password !== confirmPassword) {
    document.getElementById("error-confirm").textContent = "Passwords do not match.";
    hasError = true;
  }

  // Gender
  if (!gender1 && !gender2 && !gender3) {
    document.getElementById("error-gender").textContent = "Please select a gender.";
    hasError = true;
  }

  // Final check
  if (!hasError) {
    document.querySelector("form").submit(); 
  }

}

document.querySelector("form").addEventListener("submit", validateForm);


