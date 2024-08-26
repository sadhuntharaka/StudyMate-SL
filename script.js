document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from refreshing the page

    // Get user inputs
    const userID = document.getElementById('userID').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if fields are empty
    if (!userID || !password) {
        document.getElementById('loginError').textContent = 'Please enter both User ID and Password.';
        return;
    }

    // Display the payload in the console for debugging
    console.log("Sending Payload - UserID: ", userID, "Password: ", password);

    // Send login data to the Webhook
    fetch('https://hook.eu2.make.com/lhjjig0icekvu0b0mevn5fu1di8xvvp3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userID": userID,
            "password": password
        })
    })
    .then(response => {
        // Check if the response is valid JSON
        return response.text().then(text => {
            try {
                // Parse JSON if it's a valid response
                return JSON.parse(text);
            } catch (error) {
                throw new Error("Response is not valid JSON: " + text);
            }
        });
    })
    .then(data => {
        // Handle the response from the Webhook
        console.log("Parsed Response from Webhook:", data);

        if (data.status === 'success') {
            // If login is successful, hide the login form and show the chat section
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('chatSection').classList.remove('hidden');
        } else {
            // If login fails, display the error message
            document.getElementById('loginError').textContent = 'Invalid login credentials.';
        }
    })
    .catch(error => console.error('Fetch Error:', error));  // Log any errors
});
