var qs = require('qs');
var _ = require('lodash');
var crypto = require('crypto');

var ALGORITHM = 'aes-256-ctr';

/*
@param {string} param
@returns {object} decoded
@return {string} decoded.destination_url
@return {object} decoded.metadata
*/
var decode_url = function (url_param, password) {
	var decipher = crypto.createDecipher(ALGORITHM, password);
	var query_string = decipher.update(url_param, 'hex', 'ascii');
	var parsed = qs.parse(query_string) || {};
	return {
		destination_url: parsed.destination_url,
		metadata: _.omit(parsed, 'destination_url'),
	};
};

exports = module.exports = decode_url;
