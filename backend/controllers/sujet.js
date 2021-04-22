const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0123',
  database: 'p7'
});

exports.create = (req, res,) => {
  var sql = `INSERT INTO sujets (pseudo, titre, message, dt) VALUES 
  ('pseudo', '${req.body.titre}', '${req.body.message}', now())`;
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    else {
      console.log("test")
      console.log(result)
    }
  })
}

exports.getOne = (req, res ) => {
  var sql = `SELECT * FROM sujets`;
  con.query = (sql, function (err, result) {
    if (err) console.log(err)
    console.log(result)
    console.log("réponse du serveur")
    res.status(201).json({message : 'réponse serveur !'}) 
  })
}