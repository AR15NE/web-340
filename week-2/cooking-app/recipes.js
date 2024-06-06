/*
 * Author: Amanda Rovey
 * Date: June 5th 2024
 * File Name: recipes.js 
 * Description: js file for assignment 2.2
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // This joins the ingredients together into a string separated by commas and a space
  const ingredientList = ingredients.join(', ');
  // Creates the recipe string with the correct formatting
  const recipeString = `Recipe created with ingredients: ${ingredientList}`;
  return recipeString;
}

// Define the setTimer function - Sets a timer for a specific number of minutes and returns a confirmation message
function setTimer(minutes) {
  // Ensures the output string matches the expected format exactly
  return `Timer set for ${minutes} minutes`; //The confirmation message for the user 
}

// Define the quit function - Exits the program and gives a confirmation message to the user. 
function quit() {
  // Returns the expected string
  return 'Program exited';
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};
