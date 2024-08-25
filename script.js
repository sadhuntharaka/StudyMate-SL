document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;

  // Log the values to ensure they are being captured
  console.log("UserID: ", userID);
  console.log("Password: ", password);

  // Send the login data to Make Webhook
  fetch('https://hook.eu2.make.com/h2j1iwxiktb1bs1arhqxymbm38iau4ef', {
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
    console.log("Response from Webhook:", data);  // Log the response
    if (data.status === 'success') {
      document.getElementById('loginSection').classList.add('hidden');
      document.getElementById('chatSection').classList.remove('hidden');
    } else {
      document.getElementById('loginError').textContent = 'Invalid login credentials.';
    }
  })
  .catch(error => console.error('Error:', error));  // Log errors
});
