/**
 * Author: Amanda Rovey 
 * Date: 07/05/24
 * File Name: server.spec.js
 */

const http = require('http');
const { server, setCharacter } = require('../src/server');

//Define the test suite
describe('Server', () => {
  beforeEach(() => {
    // Reset the character object before each test
    setCharacter({ class: 'Warrior', gender: 'Male', funFact: 'Strong' });
  });
  
  //Testing to verify the character creation function 
  it('should create a character', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create-character?class=Warrior&gender=Male&funFact=Strong',
      method: 'POST'
    };

    //Send the request and check the response 
    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });

    req.end();
  });

  //Testing to confirm character creation
  it('should confirm character creation', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm-character',
      method: 'POST'
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);
      done();
    });

    req.end();
  });

  //Testing invalid character data 
  it('should reject invalid character data', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create-character?class=InvalidClass&gender=InvalidGender&funFact=',
      method: 'POST'
    };

    const req = http.request(options, (res) => {
      expect(res.statusCode).toBe(200);

      //Define the request options
      const confirmOptions = {
        hostname: 'localhost',
        port: 3000,
        path: '/confirm-character',
        method: 'POST'
      };

      const confirmReq = http.request(confirmOptions, (res) => {
        expect(res.statusCode).toBe(400);
        done();
      });

      confirmReq.end();
    });

    req.end();
  });

  //Test verifying the character viewing functionality
  it('should view the character', (done) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/view-character',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      //Once all data is recieved, check the character details 
      res.on('end', () => {
        expect(JSON.parse(data)).toEqual({
          class: 'Warrior',
          gender: 'Male',
          funFact: 'Strong'
        });
        done();
      });
    });

    req.end();
  });
});