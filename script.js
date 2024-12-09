// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');
 
darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}
 
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() !== "") {
        appendMessage('user', message);
        userInput.value = '';

        // Simple bot responses
        setTimeout(() => {
            botResponse(message);
        }, 1000);
    }
}

function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const textElement = document.createElement('div');
    textElement.classList.add('text');
    textElement.textContent = text;

    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(message) {
    let response = "I'm sorry, I don't understand that.";

    if (message.toLowerCase().includes('hello')) {
        response = 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('hi')) {
            response = 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('menu')) {
        response = 'You can check our menu at our website by clicking the menu button.';
    } else if (message.toLowerCase().includes('hours')) {
        response = 'We are open from 8 AM to 8 PM every day.';
    } else if (message.toLowerCase().includes('time')) {
        response = 'We are open from 8 AM to 8 PM every day.';
    } else if (message.toLowerCase().includes('location')) {
        response = 'We are located at 123 Poblacion,Bugallon,Pangasinan Coffee';
    }

    appendMessage('bot', response);
}