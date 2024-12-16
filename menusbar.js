let loadingInterval = setInterval(() => {
    console.log("Loading...");
  }, 1000); // Repeat every 1 second
  
  // Stop the loading messages after 5 seconds
  setTimeout(() => {
    clearInterval(loadingInterval); // Stops the interval
    console.log("Loaded successfully!");
  }, 5000); // Stop after 5 seconds