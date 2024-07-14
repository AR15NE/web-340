const CharacterCreator = require('../src/character-creator');

// Test case to verify that the CharacterCreator processes data correctly when written to
describe('CharacterCreator', () => {
  test("should process data correctly when written to", (done) => {
    const characterCreator = new CharacterCreator();
    // Define a character object
    const character = {
      class: 'Warrior',
      gender: 'Male',
      funFact: 'Has a pet dragon named sparky',
    };

    // Convert the character object into a JSON string and send it to the CharacterCreator for handling
    characterCreator.write(JSON.stringify(character));

    // Listen for the 'data' event and verify the transformed data
    characterCreator.on('data', (data) => {
      // Check if the transformed data contains the character's class, gender, and fun fact
      expect(data.toString()).toContain(character.class);
      expect(data.toString()).toContain(character.gender);
      expect(data.toString()).toContain(character.funFact);
      done();
    });
  });

  // Test case to verify that the CharacterCreator emits an 'error' event when invalid data is written
  test("should emit 'error' when invalid data is written", (done) => {
    const characterCreator = new CharacterCreator();
    // Create a Jest mock function
    const mockError = jest.fn(); // Create a Jest mock function

    // Use the mock function as the error event handler
    characterCreator.on('error', mockError); 

    // Write an empty string to the CharacterCreator
    characterCreator.write('');

    // Wait for the event loop to complete
    setImmediate(() => { 
        // Check if the mock function has been called
        expect(mockError).toHaveBeenCalled(); // Check if the mock function has been called
        done();
    });
});

  // Test case to verify that the CharacterCreator transforms data correctly when written to
  test("should transform data correctly when written to", (done) => {
    const characterCreator = new CharacterCreator();
    // Define a character object
    const character = {
      class: 'Mage',
      gender: 'Female',
      funFact: 'Can cast powerful spells but at random'
    };

    characterCreator.write(JSON.stringify(character));

    // Listen for the 'data' event and verify the transformed data
    characterCreator.on('data', (data) => {
      expect(data.toString()).toContain(character.class);
      expect(data.toString()).toContain(character.gender);
      expect(data.toString()).toContain(character.funFact);
      // Call the done function to indicate that the test is complete
      done();
    });
  });
});

// Test case to verify that the CharacterCreator processes very large inputs correctly
test("should process very large inputs correctly", (done) => {
  const characterCreator = new CharacterCreator();
  // Define a large character object
  const largeCharacter = {
      class: 'Rogue'.repeat(1000),
      gender: 'Female'.repeat(1000),
      funFact: 'Has a habit of narrating their own stealthy actions in third person.'.repeat(1000),
  };

  characterCreator.write(JSON.stringify(largeCharacter));

  // Listen for the 'data' event and verify the processed data
  characterCreator.on('data', (data) => {
      expect(data.toString()).toContain(largeCharacter.class);
      expect(data.toString()).toContain(largeCharacter.gender);
      expect(data.toString()).toContain(largeCharacter.funFact);
      // Call the done function to indicate that the test is complete
      done();
  });
});
