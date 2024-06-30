/**
 * Author: Amanda Rovey 
 * Date: 06/30/24
 * File Name: pie.spec.js
 * Description: This file contains unit tests for the bakePie function using TDD Principles
 */

"use strict";

const { bakePie } = require("../src/pie");

// Mocking console.warn to prevent actual logging
console.warn = jest.fn();

describe('bakePie', () => {
  // Test 1: Successful pie with all ingredients
  test('should bake a pie with all essential ingredients', () => {
    const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']);
    expect(result).toBe('The apple pie was successfully baked with ingredients: flour, sugar, butter, apples.');
  });

  // Test 2: Missing an essential ingredient
  test('should log a warning and exit if an essential ingredient is missing', () => {
    // Mocking process.exit to prevent actual exiting
    process.exit = jest.fn();

    bakePie('apple', ['sugar', 'butter', 'apples']);
    expect(console.warn).toHaveBeenCalledWith('Warning: Missing essential ingredient(s).');
    expect(process.exit).toHaveBeenCalledWith(1);

    // Restore the original process.exit after the test
    process.exit = jest.requireActual('process').exit;
  });

  // Test 3: Unexpected input (no pie type provided)
  test('should handle unexpected input gracefully', () => {
    const result = bakePie('', ['flour', 'sugar', 'butter']);
    expect(result).toBe('The pie was successfully baked with ingredients: flour, sugar, butter.');
  });

});