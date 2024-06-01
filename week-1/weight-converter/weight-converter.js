/**
 * Author: Amanda Rovey
 * Date: May 30th, 2024
 * File Name: Assignment 1.3
 * Description: Chapter 1 Programming Exercise 
*/

"use strict";

// The purpose of this script is to convert pounds to kilograms

// Access the command line arguments
const args = process.argv.slice(2);

//There should only be one command line argument. If not, the script informs the user and exits. 
if (args.length !== 1) {
  console.error('Usage: node weight-converter.js <pounds>');
  process.exit(1); 
}

//The input should be a number, if not, an error is displayed to the user. 
if (isNaN(args[0])) {
  console.error('Input must be a number.');
  process.exit(1);
}

//Next the input is converting from pounds to kilograms. The conversion factor being used is 0.45359237
const pounds = parseFloat(args[0]);
const kilograms = pounds * 0.45359237;

//Lastly, the coverted weight is printed to the console. It is rounded to two decimals places
console.log(kilograms.toFixed(2)); 
