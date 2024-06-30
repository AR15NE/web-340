/**
 * Author: Amanda Rovey 
 * Date: 06/30/24
 * File Name: pie.js
 * Description: This file defines a function to simulate baking a pie with specific ingredients.
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentialIngredients = ['flour', 'sugar', 'butter'];
  const hasAllEssentials = essentialIngredients.every(ingredient => ingredients.includes(ingredient));

  if (!hasAllEssentials) {
    console.warn('Warning: Missing essential ingredient(s).');
    process.exit(1);
  }

  // Construct the message based on whether pieType is provided
  let message = 'The ';
  if (pieType) {
    message += `${pieType} `;
  }
  message += 'pie was successfully baked with ingredients: ' + ingredients.join(', ') + '.';

  // Return the constructed message
  return message;
}

module.exports = { bakePie };