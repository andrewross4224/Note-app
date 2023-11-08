const notes = require('express').Router();
const path = require('path')
const fs = require('fs')


notes.post('/', (req, res) => {
    console.log(req.body)
    res.json('note')
});

notes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

module.exports = notes;