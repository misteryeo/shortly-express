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

module.exports = {
  addUser: addUser
};



