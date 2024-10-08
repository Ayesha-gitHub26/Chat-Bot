// Simple responses for the bot
const botResponses = {
    "hi": "Hello! How can I assist you today?",
    "how are you?": "I'm just a bot, but I'm here to help!",
    "bye": "Goodbye! Have a great day!",
    "default": "Sorry, I didn't understand that."
};

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;

    // Add user's message to the chat log
    addMessageToChat(userInput, 'user');

    // Get bot's response
    const botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessageToChat(botResponse, 'bot'), 500);

    // Clear input field
    document.getElementById('userInput').value = "";
}

// Function to add a message to the chat log
function addMessageToChat(message, sender) {
    const chatlogs = document.getElementById('chatlogs');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatlogs.appendChild(messageElement);
    chatlogs.scrollTop = chatlogs.scrollHeight;
}

// Function to get bot's response
function getBotResponse(input) {
    return botResponses[input] || botResponses["default"];
}

const sendButton = document.getElementById("send-btn");

sendButton.addEventListener("click", (event) => {
    if(event.key === "enter") {
        sendMessage();
    };
});

const userInput = document.getElementById('userInput');

userInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        sendMessage();
    };
});