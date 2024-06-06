/*
 * Author: Amanda Rovey
 * Date: June 5th 2024
 * File Name: recipes.js 
 * Description: js file for assignment 2.2
*/

// Import your module using require - this will access the functions in the recipes.js file 
const recipes = require('./recipes');

// Implement your CLI program here
console.log(recipes.createRecipe(['flour', 'sugar', 'eggs']));
console.log(recipes.setTimer(5));
console.log(recipes.quit());