function validatePassword(password, confirmPassword) {
  if (password === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful");
  }
}

// Example usage:
validatePassword("myPassword123", "myPassword123"); // Password Matched. Password validation Successful.
validatePassword("password1", "password2"); // Password didn't match. Password validation unsuccessful