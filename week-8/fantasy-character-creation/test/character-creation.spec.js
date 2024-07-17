/*
Name: Amanda Rovey
Date: 7/17/2024
File Name: character-creation.js
*/

"use strict";

const fs = require('fs').promises;
const { createCharacter, getCharacters } = require('../src/character-creation');
const path = require('path');
const CHARACTER_FILE = path.join(__dirname, '..', 'src', 'characters.json');

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;
  let mockCharacters = []; 

  // The beforeEach function runs before each test, setting up the necessary environment.
  beforeEach(() => {
    // Resetting modules to clear cache and ensure fresh state for each test.
    jest.resetModules();
    mockCharacters = []; // Reset the state before each test

    // Mocking readFile to return a resolved promise
    jest.spyOn(fs, 'readFile').mockImplementation(() => {
      return Promise.resolve(JSON.stringify(mockCharacters));
    });

    // Mocking writeFile to update the mock character array
    jest.spyOn(fs, 'writeFile').mockImplementation((filePath, data) => {
      mockCharacters = JSON.parse(data); // Update the state with the new data
      return Promise.resolve();
    });

    // Requiring the character creation functions to be tested.
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // Test to verify that a new character can be written to the mock file.
  test("writes a new character to the file", async () => {
    const character = { class: 'Mage', gender: 'Other', specialTrait: 'Wise' };
    await createCharacter(character);
    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  // Test to verify that characters can be read from the mock file.
  test("reads characters from the file", async () => {
    const character = { class: 'Rogue', gender: 'Male', specialTrait: 'Stealthy' };
    await createCharacter(character);
    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  // Test to verify that errors are properly thrown when reading from a non-existent file.
  test("handles errors when reading from the file", async () => {
    // Mock readFile to simulate an error
    jest.spyOn(fs, 'readFile').mockImplementation(() => Promise.reject(new Error("File not found")));
    await expect(getCharacters()).rejects.toThrow("File not found");
  });
});