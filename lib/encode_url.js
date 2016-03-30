var encode = require('./encode');

/*
* @param {string} root_url the root of the service that will do the redirection
* @param {string} destination_url the url to redirect to
* @param {string} an object to encode with the metadata
*/
var encode_url = function (root_url, destination_url, metadata) {
	return root_url + '/' + encode(destination_url, metadata);
};

exports = module.exports = encode_url;
