var chai = require('chai');
var expect = chai.expect;

var encode_url = require('../index').encode_url;
var decode_url = require('../index').decode_url;

var PASSWORD = 'password';

describe('decode_url', function () {

	it('should decode an url - simple', function () {
		var destination_url = 'http://www.salesforce.com';
		var metadata = {
			prop_a: 12,
			prop_b: 'value'
		};
		var root_url = 'http://via.madkudu.com/v1';

		var encoded = encode_url(root_url, destination_url, metadata, PASSWORD).replace(root_url + '/', '');
		var decoded = decode_url(encoded, PASSWORD);

		expect(decoded).to.be.an('object');
		expect(decoded.destination_url).to.equal(destination_url);
		expect(decoded.metadata).to.deep.equal({
			prop_a: '12',
			prop_b: 'value'
		});
	});

	it('should decode an url - nested', function () {
		var destination_url = 'http://www.salesforce.com/abc/cde/efg?ab=cd&ef=gh';
		var metadata = {
			prop_a: 12,
			prop_b: 'value',
			obj: {
				prop_c: 'abc'
			}
		};
		var root_url = 'http://via.madkudu.com/v1';

		var encoded = encode_url(root_url, destination_url, metadata, PASSWORD).replace(root_url + '/', '');
		var decoded = decode_url(encoded, PASSWORD);

		expect(decoded).to.be.an('object');
		expect(decoded.destination_url).to.equal(destination_url);
		expect(decoded.metadata).to.deep.equal({
			prop_a: '12',
			prop_b: 'value',
			obj: {
				prop_c: 'abc'
			}
		});
	});

});
