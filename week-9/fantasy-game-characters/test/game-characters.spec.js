/**
 * Author: Amanda Rovey
 * Date: 7/24/24
 * File: game-characters.spec.js
 */

const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  // Before each test, create a new instance of GameCharacters
  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  // Test case to check if the getCharacters method returns game characters data
  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((error, data) => {
      // The callback function checks if there was no error and if data was returned
      expect(error).toBeNull();
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  // Test case to check if an error is handled when the script file is not found
  test("should handle an error when the game characters data script is not found", (done) => {
    gameCharacters = new GameCharacters("non-existent-file.js");
    gameCharacters.getCharacters((error, data) => {
      // The callback function checks if there was an error and if no data was returned
      expect(error).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });

  // Test case to check if an error is handled when the script file fails
  test("should handle an error when the game characters data script fails", (done) => {
    gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((error, data) => {
      // The callback function checks if there was an error and if no data was returned
      expect(error).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });
});