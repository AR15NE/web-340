const { Duplex } = require('stream');

// Define a CharacterCreator class that extends the Duplex stream class
class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // Initialize an empty array to store character data
    this.data = [];
  }

  // Define the _write method to handle incoming data
  _write(chunk, encoding, callback) {
    try {
        // Convert the chunk to a string
        const chunkString = chunk.toString();
        // Log the chunk
        console.log(chunkString); // Log the chunk
        const characterData = JSON.parse(chunkString);
        // If the character data is missing the class, emit an error and return
        if (!characterData.class) {
            this.emit('error', new Error('Missing character class data'));
            return callback();
        }
        // If the character data is missing the gender, emit an error and return
        if (!characterData.gender) {
            this.emit('error', new Error('Missing character gender data'));
            return callback();
        }
        // If the character data is missing the fun fact, emit an error and return
        if (!characterData.funFact) {
            this.emit('error', new Error('Missing character fun fact data'));
            return callback();
        }
        this.data.push(characterData);
        // Call the callback function to signal that the write operation is complete
        callback();
    } catch (error) {
        // Log the error
        console.error(error); // Log the error
        this.emit('error', new Error('Invalid JSON data'));
        return callback();
    }
}
  // Define the _read method to handle outgoing data
  _read(size) {
  // If the data array is empty signal the end of the stream
  if (this.data.length === 0) {
    this.push(null);
  } else {
    const characterData = this.data.shift();
    // Format the character data as a string
    const formattedDescription = `Class: ${characterData.class}, Gender: ${characterData.gender}, Fun Fact: ${characterData.funFact}`;
    // Push the formatted character data to the readable side of the stream
    this.push(formattedDescription);
    }
  }
}

// Export the CharacterCreator class
module.exports = CharacterCreator;