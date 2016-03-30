var stringify = require('./stringify');

/*
* @param {string} destination_url the url to redirect to
* @param {string} an object to encode with the metadata
*/
var encode_url = function (destination_url, metadata) {
	return new Buffer(stringify(destination_url, metadata), 'ascii').toString('base64');
};

exports = module.exports = encode_url;
