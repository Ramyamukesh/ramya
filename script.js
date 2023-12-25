function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
  
    // Basic validation
    if (username === '' || password === '') {
      errorMessage.textContent = 'Please enter both username and password.';
    } else {
      // Mock authentication logic (replace with actual authentication)
      if (username === 'user' && password === 'pass') {
        errorMessage.textContent = ''; // Clear previous error messages
        alert('Login successful!');
        // Add logic to redirect or perform other actions after successful login
      } else {
        errorMessage.textContent = 'Invalid username or password.';
      }
    }
  }
  