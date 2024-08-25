document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;

  // Send the login data to Make Webhook
  fetch('https://hook.eu2.make.com/h2j1iwxiktb1bs1arhqxymbm38iau4ef', {  // Replace with your Webhook URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": userID,
      "password": password
    })
  })
  .then(response => response.json())  // Convert response to JSON
  .then(data => {
    if (data.status === 'success') {  // If login is successful
      document.getElementById('loginSection').classList.add('hidden');  // Hide login
      document.getElementById('chatSection').classList.remove('hidden');  // Show chat box
    } else {
      document.getElementById('loginError').textContent = 'Invalid login credentials.';  // Show error
    }
  })
  .catch(error => console.error('Error:', error));  // Handle errors
});
