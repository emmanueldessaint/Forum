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
  var sqlSujet = `INSERT INTO sujets (pseudo, titre, ArrivalDate, nbMessages) VALUES ('${req.body.pseudo}', '${req.body.title}', now(), "1")`
  con.query(sqlSujet, function (err, result) {
    if (err) console.log(err)
    console.log(result)

    var count = `SELECT COUNT(id) FROM sujets;`
    con.query(count, function (err, resultFunction) {
      if (err) console.log(err)
      console.log(resultFunction)
      
      console.log(resultFunction[0])
      
      
      var resultCount = resultFunction +1
      console.log(resultCount)
        var sqlMessage = `INSERT INTO messages (idSujet, pseudo, message, ArrivalDate) VALUES ('${resultCount}', '${req.body.pseudo}', '${req.body.message}', now())`
        con.query(sqlMessage, function (err, result) {
          if (err) console.log(err)
          console.log("message posté !")
        })
      // res.status(201).json({message : 'Le sujet a été crée et le message posté !'}) 
      res.status(201).json({resultFunction}) 
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
  var sql = `INSERT INTO messages (idSujet, pseudo, message, ArrivalDate) VALUES ('${req.body.id}', '${req.body.pseudo}', '${req.body.message}', now())`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    
    var sql2 = `UPDATE sujets SET nbMessages= (nbMessages +1) WHERE id='${req.body.id}';`
    con.query(sql2, function(err, resultatreq) {
      if (err) console.log(err)
    })
      // var sql = `SELECT * FROM messages WHERE idSujet = '${req.body.id}';`
      // con.query(sql, function(err, result) {
      // if (err) console.log(err)
      // console.log(result)
      // res.status(201).json({result})
      // })
    
    console.log(result)
    
  })
}
exports.getAllMessages = (req,res) => {
  var sql = `SELECT * FROM messages WHERE idSujet = '${req.body.id}';`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}
exports.countMessages = (req,res) => {
  var sql = `SELECT count(*) FROM messages WHERE idSujet = '${req.body.id}';`
  con.query(sql, function(err, result) {
    if (err) console.log(err)
    console.log(result)
    res.status(201).json({result})
  })
}