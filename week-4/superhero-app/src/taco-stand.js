/**
 * Author: Amanda Rovey
 * Date: 6/23/2024
 * File Name: taco-stand.js
 * Description: Defines the TacoStandEmitter class 
 */

const EventEmitter = require("events");

// TacoStandEmitter class definition
class TacoStandEmitter extends EventEmitter {
  // Method to emit a 'serve' event with the customer's name
  serveCustomer(customer) {
    this.emit('serve', customer);
  }

  // Method to emit a 'prepare' event with the taco type
  prepareTaco(taco) {
    this.emit('prepare', taco);
  }
  // Method to emit a 'rush' event with the rush type
  handleRush(rush) {
    this.emit('rush', rush);
  }
}

module.exports = TacoStandEmitter;