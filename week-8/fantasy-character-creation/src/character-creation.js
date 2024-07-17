/*
Name: Amanda Rovey
Date: 7/17/2024
File Name: character-creation.js
*/

"use strict";

const fs = require('fs').promises;
const path = require('path');
// Setting up the path to the characters.json file to store all character data.
const CHARACTER_FILE = path.join(__dirname, 'characters.json');

async function createCharacter(character) {
  let characters = [];
  
  try {
    // Attempt to read the existing characters from the file
    const data = await fs.readFile(CHARACTER_FILE, 'utf8');
    characters = JSON.parse(data);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      // If the error is not 'File not found', rethrow it
      throw error;
    }
  }

  // Add the new character to the array
  characters.push(character);

  // Write the updated array of characters back to the file
  await fs.writeFile(CHARACTER_FILE, JSON.stringify(characters, null, 2));
}


async function getCharacters() {
  try {
    const data = await fs.readFile(CHARACTER_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Rethrow any errors for the caller to handle
    throw error;
  }
}

// Exporting the functions
module.exports = { createCharacter, getCharacters };