// Displays a welcome message
console.log('Welcome to Holberton School, what is your name?');

// Capture user input via STDIN
process.stdin.on('data', (input) => {
  const name = input.toString().trim(); // Removes leading and trailing whitespace
  console.log(`Your name is: ${name}`);

  // If the input comes from a pipe (as with "echo"), close the program properly
  if (process.stdin.isTTY) {
    // Interactive mode: no closing message, the program waits for the next entry
    process.stdin.end();
  } else {
    // Non-interactive mode: close message and exit
    console.log('This important software is now closing');
    process.exit();
  }
});
