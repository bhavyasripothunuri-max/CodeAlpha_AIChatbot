const chatBox = document.getElementById("chat-box");

function getTime() {
    return new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });
}

window.onload = function () {

    chatBox.innerHTML += `
    <div class="message bot-message">
        Hello! I am CodeAlpha AI Chatbot.
        <br>
        Ask me anything about programming.
        <div class="time">${getTime()}</div>
    </div>
    `;
};

function sendMessage() {

    let input = document.getElementById("user-input");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    let lowerMessage = message.toLowerCase();

    chatBox.innerHTML += `
    <div class="message user-message">
        ${message}
        <div class="time">${getTime()}</div>
    </div>
    `;

    input.value = "";

    let reply = "";

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        reply = "Hello! How can I help you?";
    }

    else if (lowerMessage.includes("how are you")) {
        reply = "I am doing great. Thanks for asking!";
    }

    else if (lowerMessage.includes("who are you")) {
        reply = "I am an AI Chatbot created for the CodeAlpha Internship Project.";
    }

    else if (lowerMessage.includes("what is your name")) {
        reply = "My name is CodeAlpha AI Chatbot.";
    }

    else if (lowerMessage.includes("javascript")) {
        reply = "JavaScript is a programming language used to make websites interactive.";
    }

    else if (lowerMessage.includes("java")) {
        reply = "Java is an object-oriented programming language.";
    }

    else if (lowerMessage.includes("python")) {
        reply = "Python is widely used for AI, machine learning, automation, and web development.";
    }

    else if (lowerMessage.includes("html")) {
        reply = "HTML provides the structure of a web page.";
    }

    else if (lowerMessage.includes("css")) {
        reply = "CSS is used to style and design web pages.";
    }

    else if (lowerMessage.includes("student")) {
        reply = "Students can learn programming by building practical projects.";
    }

    else if (lowerMessage.includes("project")) {
        reply = "This chatbot is a project developed for the CodeAlpha Internship.";
    }

    else if (lowerMessage.includes("help")) {
        reply = "I can answer questions about Java, Python, HTML, CSS, JavaScript, AI and Chatbots.";
    }

    else if (lowerMessage.includes("ai")) {
        reply = "Artificial Intelligence enables machines to mimic human intelligence.";
    }

    else if (lowerMessage.includes("chatbot")) {
        reply = "A chatbot is software that communicates with users through messages.";
    }

    else if (lowerMessage.includes("oop")) {
        reply = "OOP stands for Object-Oriented Programming. It is based on classes and objects.";
    }

    else if (lowerMessage.includes("database")) {
        reply = "A database is used to store and manage data efficiently.";
    }

    else if (lowerMessage.includes("sql")) {
        reply = "SQL stands for Structured Query Language and is used to manage databases.";
    }

    else if (lowerMessage.includes("spring boot")) {
        reply = "Spring Boot is a Java framework used to build web applications and APIs quickly.";
    }

    else if (lowerMessage.includes("github")) {
        reply = "GitHub is a platform used for version control and code collaboration.";
    }

    else if (lowerMessage.includes("machine learning")) {
        reply = "Machine Learning is a branch of AI that allows systems to learn from data.";
    }

    else if (lowerMessage.includes("internship")) {
        reply = "This chatbot was developed as part of the CodeAlpha Internship Program.";
    }

    else if (lowerMessage.includes("good morning")) {
        reply = "Good Morning! Have a wonderful day.";
    }

    else if (lowerMessage.includes("good afternoon")) {
        reply = "Good Afternoon! Hope you're having a productive day.";
    }

    else if (lowerMessage.includes("good evening")) {
        reply = "Good Evening! How can I assist you today?";
    }

    else if (
        lowerMessage.includes("thank you") ||
        lowerMessage.includes("thanks")
    ) {
        reply = "You're welcome!";
    }

    else if (lowerMessage.includes("bye")) {
        reply = "Goodbye! Have a nice day!";
    }

    else {
        reply = "Sorry, I don't understand that. Please try another question.";
    }

    setTimeout(() => {

        chatBox.innerHTML += `
        <div class="message bot-message">
            ${reply}
            <div class="time">${getTime()}</div>
        </div>
        `;

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);

    chatBox.scrollTop = chatBox.scrollHeight;
}

document
.getElementById("user-input")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});