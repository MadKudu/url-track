var qs = require('qs');
var _ = require('lodash');

/*
* @param {string} destination_url the url to redirect to
* @param {string} an object to encode with the metadata
*/
var stringify_metadata = function (destination_url, metadata) {
	return qs.stringify(_.extend({ destination_url: destination_url },  metadata));
};

exports = module.exports = stringify_metadata;
