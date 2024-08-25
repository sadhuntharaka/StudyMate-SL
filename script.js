document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userID = document.getElementById('userID').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!userID || !password) {
        document.getElementById('loginError').textContent = 'Please enter both User ID and Password.';
        return;
    }

    console.log("Sending to Webhook - UserID: ", userID, "Password: ", password);

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
    .then(response => {
        console.log("Raw Response:", response);
        return response.json();
    })
    .then(data => {
        console.log("Parsed Response from Webhook:", data);
        if (data.status === 'success') {
            document.getElementById('loginSection').classList.add('hidden');
            document.getElementById('chatSection').classList.remove('hidden');
        } else {
            document.getElementById('loginError').textContent = 'Invalid login credentials.';
        }
    })
    .catch(error => console.error('Fetch Error:', error));
});
