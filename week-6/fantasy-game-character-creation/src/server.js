/**
 * Author: Amanda Rovey 
 * Date: 07/05/24
 * File Name: server.js
 */

const http = require('http');
const url = require('url');
const querystring = require('querystring');

//This object will store the character's data and will be updated as requests occur. 
let character = {};

//Server set up - will listen for incoming HTTP requests and respond 
const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url);
  const params = querystring.parse(reqUrl.query);

  //Handle routes based on the request method
  if (req.method === 'POST' && reqUrl.pathname === '/create-character') {
    character = {
      class: params.class,
      gender: params.gender,
      funFact: params.funFact
    };
    res.writeHead(200);
    res.end('Character created successfully');
  } else if (req.method === 'POST' && reqUrl.pathname === '/confirm-character') {
    //Defines the allowed classes and genders
    const allowedClasses = ['Warrior', 'Mage', 'Rogue'];
    const allowedGenders = ['Male', 'Female', 'Other'];

    //Validates the character data
    if (!allowedClasses.includes(character.class) || !allowedGenders.includes(character.gender) || !character.funFact) {
      res.writeHead(400);
      res.end('Invalid character data');
    } else {
      res.writeHead(200);
      res.end('Character confirmed');
    }
  } else if (req.method === 'GET' && reqUrl.pathname === '/view-character') {
    //Send said character data
    res.writeHead(200);
    res.end(JSON.stringify(character));
  } else {
    //Handles unknown routes
    res.writeHead(404);
    res.end();
  }
});

//Start the server 
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Export the server and character functions
module.exports = {
  server,
  getCharacter: () => character,
  setCharacter: (newCharacter) => { character = newCharacter; }
};