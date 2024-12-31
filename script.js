let sendButton = document.getElementById('send-button');
let aiResponses = {
    'hello': 'Hi! How are you?',
    'how are you': 'I\'m good, thanks! How about you?',
    'what is your name': 'My name is Pawss. Nice to meet you!',
};

function add(a, b) {
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a, b) {
    return a*b;
}
function div(a,b){
    if (b==0){
        response='division is not possible.';
    }
    else{
        return a/b;
    }
}
function generateAIResponse(message) {
    let response;
    let parts = message.toLowerCase().split(' ');
    if (parts[0] === 'add' && parts.length ===3) {
        let a = parseFloat(parts[1]);
        let b = parseFloat(parts[2]);
        response = 'the sum is ' + add(a, b);
    } 
    else if (parts[0] === 'mul' && parts.length === 3) {
        let a = parseFloat(parts[1]);
        let b = parseFloat(parts[2]);
        response = 'the multiplication is ' + mul(a,b);
    } 
    else if (parts[0] === 'sub' && parts.length === 3) {
        let a = parseFloat(parts[1]);
        let b = parseFloat(parts[2]);
        response='the subtraction is '+sub(a,b);
    }
    else if(parts[0] === 'div' && parts.length === 3){
        let a = parseFloat(parts[1]);
        let b = parseFloat(parts[2]);
        response='the division is '+div(a,b);
    }
    else {
        response = aiResponses[message.toLowerCase()];
        if (!response) {
            response = 'I do not understand that. Can you please reenter?';
        }
    }
    return response;
}

sendButton.addEventListener('click', function() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value;
    let response = generateAIResponse(message);
    displayMessage(message, true);
    displayMessage(response, false);
    messageInput.value = '';
});

function displayMessage(message, isUserMessage) {
    let messageElement = document.createElement('div');
    messageElement.textContent = message;
    if (isUserMessage) {
        messageElement.style.textAlign = 'right';
        messageElement.style.backgroundColor = '#f0f0f0';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '10px';
        messageElement.style.marginBottom = '10px';
    } else {
        messageElement.style.textAlign = 'left';
        messageElement.style.backgroundColor = '#e0e0e0';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '10px';
        messageElement.style.marginBottom = '10px';
    }
    let chatboxBody = document.getElementById('chatbox-body');
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}