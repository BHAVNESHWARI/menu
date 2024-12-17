// Function to simulate user registration
function registerUser(user, callback) {
    console.log("Registering user...");
    setTimeout(() => {
        const success = Math.random() > 0.2; // 80% chance of success
        if (success) {
            console.log("User registered successfully.");
            callback(null, user); // Proceed to next step
        } else {
            callback("Registration failed. Username might already exist.", null);
        }
    }, 1000);
}

// Function to simulate sending a verification email
function sendVerification(user, callback) {
    console.log("Sending verification email...");
    setTimeout(() => {
        const success = Math.random() > 0.2; // 80% chance of success
        if (success) {
            console.log("Verification email sent successfully.");
            callback(null, user); // Proceed to next step
        } else {
            callback("Failed to send verification email. Please try again later.", null);
        }
    }, 1000);
}

// Function to simulate user login
function loginUser(user, callback) {
    console.log("Logging in user...");
    setTimeout(() => {
        const success = Math.random() > 0.2; // 80% chance of success
        if (success) {
            console.log("User logged in successfully.");
            callback(null, user); // Proceed to next step
        } else {
            callback("Login failed. Invalid credentials or server error.", null);
        }
    }, 1000);
}

// Function to simulate displaying a welcome message
function displayWelcomeMessage(user) {
    console.log(`Welcome, ${user}! You have successfully completed the process.`);
}

// Starting the workflow
function startWorkflow(user) {
    registerUser(user, (error, result) => {
        if (error) {
            console.error("Error:", error);
            return;
        }
        sendVerification(result, (error, result) => {
            if (error) {
                console.error("Error:", error);
                return;
            }
            loginUser(result, (error, result) => {
                if (error) {
                    console.error("Error:", error);
                    return;
                }
                displayWelcomeMessage(result);
            });
        });
    });
}

// Example usage
startWorkflow("JohnDoe");
