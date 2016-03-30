var chai = require('chai');
var expect = chai.expect;

var encode = require('../lib/encode');

describe('encode', function () {
	it('should return an encoded url', function () {
		var params = encode('http://www.salesforce.com', { tenant: 3354, event_mk: 'mk_interesting_new_signup' });
		expect(params).to.be.a('string');
	});
});
