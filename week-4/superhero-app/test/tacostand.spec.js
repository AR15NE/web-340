/**
 * Author: Amanda Rovey
 * Date: 6/23/2024
 * File Name: taco-stand.spec.js
 * Description: Test suite for TacoStandEmitter using TDD principles
 */
"use strict";

const assert = require("assert");
const EventEmitter = require("events");
const TacoStandEmitter = require("../src/taco-stand");

// Test for serveCustomer method
function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();
    // Define a test customer name
    const customer = "John";
    tacoStand.on('serve', (servedCustomer) => {
      assert.strictEqual(servedCustomer, customer);
    });
    tacoStand.serveCustomer(customer);
    // Log a success message if the test passes
    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    // Log an error message if the test fails
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

// Test for prepareTaco method
function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    const taco = "beef";
    tacoStand.on('prepare', (preparedTaco) => {
      assert.strictEqual(preparedTaco, taco);
    });
    tacoStand.prepareTaco(taco);
    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

// Test for handleRush method
function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    const rush = "lunch";
    tacoStand.on('rush', (handledRush) => {
      assert.strictEqual(handledRush, rush);
    });
    tacoStand.handleRush(rush);
    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Function to run all unit tests
function runTests() {
  testServeCustomer();
  testPrepareTaco();
  testHandleRush();
}

runTests();