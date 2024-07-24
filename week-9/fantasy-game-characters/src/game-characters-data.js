/**
 * Author: Amanda Rovey
 * Date: 7/24/24
 * File: game-characters-data.js
 */

// This script creates an array of character objects
let characters = [
  { class: "Warrior", gender: "Male", funFact: "Can bench press a Bugbear" },
  { class: "Mage", gender: "Female", funFact: "Can summon a rain cloud, but only indoors." },
  { class: "Rogue", gender: "Male", funFact: "Expert at disarming traps, but can’t open child-proof lids." }
];

// Logs the array to the console as a JSON string.
console.log(JSON.stringify(characters));