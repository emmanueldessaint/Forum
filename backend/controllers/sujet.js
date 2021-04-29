const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0123',
  database: 'p7'
});

exports.createSujet = (req, res,) => {
  var sqlSujet = `INSERT INTO sujets (pseudo, titre, ArrivalDate) VALUES ('pseudo', '${req.body.title}', now())`
  con.query(sqlSujet, function (err, result) {
    if (err) console.log(err)
    var sqlMessage = `INSERT INTO messages (pseudo, message, ArrivalDate) VALUES ('pseudo', '${req.body.message}', now())`
    con.query(sqlMessage, function (err, result) {
      if (err) console.log(err)
      console.log("message posté !")
      res.status(201).json({message : 'Le sujet a été crée et le message posté !'}) 
    })
  })
}
exports.getAllSujets = (req, res,) => {
  var sql = `SELECT * FROM sujets;`
  con.query(sql, function (err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}
exports.getOneSujet = (req, res,) => {
  var sql = `SELECT * FROM messages WHERE id = '${req.body.id}';`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}
exports.createMessage = (req, res,) => {
  var sql = `INSERT INTO messages (pseudo, message, ArrivalDate) VALUES ('pseudo', '${req.body.message}', now())`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}