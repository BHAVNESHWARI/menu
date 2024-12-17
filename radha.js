// Function to display a greeting message
function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

// Function to simulate retrieving a username after 1 second
function getUserInput(callback) {
    console.log("Fetching username...");
    setTimeout(() => {
        const retrievedName = "Alice"; // Simulated username
        console.log("Username retrieved.");
        callback(retrievedName); // Call the callback with the name
    }, 1000);
}

// Execute the workflow
getUserInput(displayMessage);
