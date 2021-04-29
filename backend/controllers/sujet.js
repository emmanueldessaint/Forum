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
  var sql = `INSERT INTO sujets (pseudo, titre, message, ArrivalDate) VALUES ('pseudo', '${req.body.title}', '${req.body.message}', now())`
  con.query(sql, function (err, result) {
    if (err) console.log(err)
    console.log("message posté !")
    res.status(201).json({message : 'Utilisateur crée avec succès !'})  // il faut afficher la page d'accueil
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
  var sql = `SELECT * FROM sujets WHERE id = '${req.body.id}';`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}
