var chai = require('chai');
var expect = chai.expect;

var stringify = require('../lib/stringify');

describe('stringify', function () {
	it('should encode the destination and metadata_url', function () {
		var string = stringify('http://www.salesforce.com', { tenant: 3354, event_mk: 'mk_interesting_new_signup' });
		expect(string).to.equal('destination_url=http%3A%2F%2Fwww.salesforce.com&tenant=3354&event_mk=mk_interesting_new_signup');
	});
});
