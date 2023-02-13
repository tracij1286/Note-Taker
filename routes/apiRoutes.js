// dependencies 
const path = require('path');
const fs = require('fs')

// npm package for unique ids
var uniqid = require('uniqid');


// routing
module.exports = (app) => {

  // GET /api/notes should read the db.json file and return all saved notes as JSON.
  app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note. 
  app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    // creating body for note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      // unique id for each note
      id: uniqid(),
    };
    // pushing created note to be written in the db.json file
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });
};
