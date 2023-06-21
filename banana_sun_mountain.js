//Create an array to hold messages
let messages = [];
//Loop through and add messages to the array
for (let i = 1; i <= 1000; i++) {
    messages.push("Mental Health Matters");
}

//Create script to display messages
let showMessages = () => {
    for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);
    }
}

//Call showMessages function
showMessages();