const notes = require('express').Router();
const path = require('path')
const fs = require('fs')

notes.post('/', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        const current = JSON.parse(data);
        current.push(req.body);
        const updated = JSON.stringify(current, null, 2);
        fs.writeFile('./db/db.json', updated, (err) => err && console.error(err));
        res.json('Notes updated!');
      });
});

notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

module.exports = notes;