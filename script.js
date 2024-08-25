document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const userID = document.getElementById('userID').value;
  const password = document.getElementById('password').value;
  const loginError = document.getElementById('loginError');

  // Mock validation logic
  if (userID === 'testuser' && password === 'password') {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('chatSection').classList.remove('hidden');
    loginError.textContent = '';
  } else {
    loginError.textContent = 'Invalid login credentials.';
  }
});

document.getElementById('sendMessage').addEventListener('click', function () {
  const chatOutput = document.getElementById('chatOutput');
  const chatMessage = document.getElementById('chatMessage').value;

  if (chatMessage.trim() !== '') {
    const messageElement = document.createElement('p');
    messageElement.textContent = `You: ${chatMessage}`;
    chatOutput.appendChild(messageElement);
    chatMessage.value = '';  // Clear input
    chatOutput.scrollTop = chatOutput.scrollHeight;  // Auto scroll to bottom

    // Here you can add logic to send the message to the AI chatbot (API call)
  }
});
