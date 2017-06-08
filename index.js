'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

console.log("wp-start installed successfully");
module.exports = function(number, locale) {
  return number.toLocaleString(locale);
};


var prompt = require('prompt');

var properties = [{
    name: 'username',
    validator: /^[a-zA-Z\s\-]+$/,
    warning: 'Username must be only letters, spaces, or dashes'
  },
  {
    name: 'password',
    hidden: true
  },
  {
    name: 'number'
  }
];

prompt.start();

prompt.get(properties, function(err, result) {
  if (err) {
    return onErr(err);
  }
  console.log('Command-line input received:');
  console.log('  Username: ' + result.username);
  console.log('  Password: ' + result.password);
});

function onErr(err) {
  console.log(err);
  return 1;
}
