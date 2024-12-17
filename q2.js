// Task 1: Simulate a network request
function task1(callback) {
    console.log("Task 1 started...");
    setTimeout(() => {
        console.log("Task 1 complete");
        callback(); // Call the next task
    }, 1000);
}

// Task 2: Simulate a network request
function task2(callback) {
    console.log("Task 2 started...");
    setTimeout(() => {
        console.log("Task 2 complete");
        callback(); // Call the next task
    }, 1000);
}

// Task 3: Simulate a network request
function task3(callback) {
    console.log("Task 3 started...");
    setTimeout(() => {
        console.log("Task 3 complete");
        callback(); // Call the next task
    }, 1000);
}

// Task 4: Simulate a network request
function task4(callback) {
    console.log("Task 4 started...");
    setTimeout(() => {
        console.log("Task 4 complete");
        callback(); // Final callback
    }, 1000);
}

// Execute tasks in a nested callback sequence
function runTasks() {
    task1(() => {
        task2(() => {
            task3(() => {
                task4(() => {
                    console.log("All tasks completed");
                });
            });
        });
    });
}

// Start the task execution
runTasks();
