var chai = require('chai');
var expect = chai.expect;

var encode_url = require('../index').encode_url;

describe('encode_url', function () {
	it('should return an encoded url', function () {
		var url = encode_url('http://via.madkudu.com/v1','http://www.salesforce.com', { org_id: 3354, prop_a: 'value_a' }, 'password');
		console.log(url);
		expect(url).to.be.a('string');
	});
});
