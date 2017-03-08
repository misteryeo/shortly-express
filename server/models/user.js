var db = require('../db');
var utils = require('../lib/utility');

// Write you user database model methods here

// ADD USER TO THE DATABASE
var addUser = function(user) {
  var queryString = 'INSERT INTO users (username, password) VALUES (?, ?)';
  var userPass = utils.passwordHash(user);
  var userDetails = [user.username, userPass];
  return db.queryAsync(queryString, userDetails);
};

// // CHECK USER EXISTS
// var checkUserExists = function (req, res, next) {
//   var queryString = 'SELECT * FROM users where username = ?';
//   db.queryAsync(queryString, [user.username])
//   .then(function(results) {
//     console.log('results: ', results);
//     if (results.length === 0) {
//       res.redirect('/login');
//     } else {
//       res.redirect('/signup');
//     }
//   });
// };

// LOGIN USER
var loginUser = function(user) {
  var queryString = 'SELECT password FROM users WHERE username = ?';
  return db.queryAsync(queryString, [user.username])
}

module.exports = {
  addUser: addUser,
  loginUser: loginUser
};

