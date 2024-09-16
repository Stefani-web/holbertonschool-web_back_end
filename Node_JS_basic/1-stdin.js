// Displays a welcome message
console.log("Welcome to Holberton School, what is your name?");

// Capture user input via STDIN
process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Removes leading and trailing whitespace
  console.log(`Your name is: ${name}`);

  // Closes the program properly
  console.log("This important software is now closing");
  process.exit();  // Terminate the Node.js process
});
