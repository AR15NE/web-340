/**
 * Author: Amanda Rovey
 * Date: 7/24/24
 * File: game-characters.js
 */


// This function is used to create child processes
const { spawn } = require("child_process");
const path = require("path")

// Define the GameCharacters class
class GameCharacters {
  // The constructor accepts a script file name
  constructor(scriptFileName) {
    this.scriptPath = path.join(__dirname, scriptFileName);
  }

  // The getCharacters method retrieves the game characters data
  getCharacters(callback) {
    //Spawns a child process to run the script file
    let process = spawn("node", [this.scriptPath]);

    process.stdout.on("data", (data) => {
      // When data is received, it passes them to the callback
      callback(null, JSON.parse(data.toString()));
    });

    // Listens for data from the stderr of the child process
    process.stderr.on("data", (data) => {
      // When error data is received, it logs the error and passes it to the callback
      console.error(`stderr: ${data}`);
      callback(data, null);
    });
    //Listens for the 'error' event from the child process
    process.on("error", (error) => {
      console.error(`spawn error: ${error}`);
      callback(error, null);
    });
  }
}

module.exports = { GameCharacters };