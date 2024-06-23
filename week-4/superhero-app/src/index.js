/**
 * Author: Amanda Rovey
 * Date: 06/23/2024
 * File Name: index.js
 * Description: CLI for Taco Stand App
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

// Create an instance of TacoStandEmitter to emit and listen for events
const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Set up event listeners for the tacoStand object
tacoStand.on('serve', (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});
tacoStand.on('prepare', (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});
tacoStand.on('rush', (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

// Listen for user input and handle commands accordingly
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  switch (command) {
    case 'serve':
      // Call the serveCustomer method with the provided arguments
      tacoStand.serveCustomer(args.join(" "));
      break;
    case 'prepare':
      // Call the prepareTaco method with the provided arguments
      tacoStand.prepareTaco(args.join(" "));
      break;
    case 'rush':
      // Call the handleRush method with the provided arguments
      tacoStand.handleRush(args.join(" "));
      break;
    default:
      // Tells the user if the command is unknown
      console.log('Unknown command. Please enter "serve", "prepare", or "rush" followed by a space and the argument.');
  }
});

// Welcome message and instructions for the user
console.log('Welcome to the Taco Stand CLI!');
console.log('Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.');