// Function to simulate a timer
function timer(duration, onComplete) {
    console.log(`Timer started for ${duration} ms.`);
    setTimeout(() => {
        const message = `Timer of ${duration} ms finished`;
        onComplete(message); // Call the callback with the message
    }, duration);
}

// Example usage
function handleTimerComplete(message) {
    console.log(message);
}

// Start the timer with a duration of 2000 ms (2 seconds)
timer(2000, handleTimerComplete);
