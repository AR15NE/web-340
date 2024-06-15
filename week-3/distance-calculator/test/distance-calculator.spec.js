'use strict';

// This file contains tests for the distance-calculator following TDD principles.

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Test the distance calculation between Earth and Mars
function testEarthToMars() {
  try {
    const expectedValue = 0.52; 
    assert.strictEqual(calculateDistance('Earth', 'Mars'), expectedValue);
    console.log('Passed testEarthToMars');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test the distance calculation between Venus and Jupiter
function testVenusToJupiter() {
  try {
    const expectedValue = 4.48; 
    assert.strictEqual(calculateDistance('Venus', 'Jupiter'), expectedValue);
    console.log('Passed testVenusToJupiter');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

// Test the distance calculation between Mercury and Neptune
function testMercuryToNeptune() {
  try {
    const expectedValue = 29.66; 
    assert.strictEqual(calculateDistance('Mercury', 'Neptune'), expectedValue);
    console.log('Passed testMercuryToNeptune');
    return true;
  } catch (error) {
    console.error(`Failed testMercuryToNeptune: ${error.message}`);
    return false;
  }
}

// Calling the test functions
testEarthToMars();
testVenusToJupiter();
testMercuryToNeptune();