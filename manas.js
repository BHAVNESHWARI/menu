// Prompt the user to enter the countdown time in seconds
let seconds = parseInt(prompt("Enter the countdown time in seconds:"));

// Check for valid input
if (isNaN(seconds) || seconds <= 0) {
  console.log("Please enter a valid number of seconds.");
} else {
  // Start the countdown timer
  let countdown = setInterval(() => {
    console.log(seconds); // Display remaining time

    // When countdown reaches zero, stop the timer and display a message
    if (seconds === 0) {
      clearInterval(countdown); // Stop the countdown
      console.log("Countdown Complete!");
    }
    seconds--; // Decrease the countdown by 1 second
  }, 1000); // Interval set to 1 second (1000 milliseconds)

  // Check for user input every second using setTimeout
  setTimeout(() => {
    // Listen for the "s" key press to stop the countdown
    document.addEventListener("keydown", function stopCountdown(event) {
      if (event.key === "s") {
        clearInterval(countdown); // Stop the countdown
        console.log("Countdown stopped by user!");
        document.removeEventListener("keydown", stopCountdown); // Remove the listener after stopping
      }
    });
  }, 0); // Start checking for keypress immediately
}
