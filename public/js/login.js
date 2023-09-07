const techLoginFormHandler = async (event) => {
    event.preventDefault();
    // Code snippets to get the values of the username and password input fields
    const username = document.querySelector('#username-tech-blog-login').value.trim();
    const password = document.querySelector('#password-tech-blog-login').value.trim();
    // If the input fields have values
    if (username && password) {
    // This codes send a POST request to the login endpoint with the input values as JSON data
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/'); 
      } else {

        alert('Failed to log in.'); // Displays the alert when unsuccessful.
      }
    }
  };
  
  // Event listener for the chess login form
  const techLoginForm = document.querySelector('.tech-login-form');
  if (techLoginForm) {
    techLoginForm.addEventListener('submit', techLoginFormHandler);
  }
