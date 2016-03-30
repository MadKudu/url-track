var chai = require('chai');
var expect = chai.expect;

var encode = require('../lib/encode');

describe('encode', function () {
	it('should return an encoded url', function () {
		var params = encode('http://www.salesforce.com', { org_id: 3354, prop_a: 'value_a' }, 'password');
		expect(params).to.be.a('string');
	});
});
