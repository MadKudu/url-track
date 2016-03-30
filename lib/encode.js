var stringify = require('./stringify');
var crypto = require('crypto');

var ALGORITHM = 'aes-256-ctr';

/*
* @param {string} destination_url the url to redirect to
* @param {string} an object to encode with the metadata
*/
var encode = function (destination_url, metadata, password) {
	var cipher = crypto.createCipher(ALGORITHM, password);
	return cipher.update(stringify(destination_url, metadata), 'ascii', 'hex');
};

exports = module.exports = encode;
