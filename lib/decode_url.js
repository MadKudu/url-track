var qs = require('qs');
var _ = require('lodash');

/*
@param {string} param
@returns {object} decoded
@return {string} decoded.destination_url
@return {object} decoded.metadata
*/
var decode_url = function (url_param) {
	var query_string = new Buffer(url_param, 'base64').toString('ascii');
	var parsed = qs.parse(query_string) || {};
	console.log(parsed);
	return {
		destination_url: parsed.destination_url,
		metadata: _.omit(parsed, 'destination_url'),
	};
};

exports = module.exports = decode_url;
