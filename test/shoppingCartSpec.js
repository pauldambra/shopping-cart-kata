var expect = require('chai').expect;
var Checkout = require('../checkout.js');

describe('the shopping cart', function() {
	var cart;

	beforeEach(function() {
		cart = new Checkout();
	});

	it('should have a static add offers function', function() {
		expect(Checkout.addOffer).to.exist;
	});

	it('should have a total function', function() {
		expect(cart.total).to.exist;
	});

	it('should have a total of zero if the basket is empty', function() {
		expect(cart.total()).to.equal(0);
	});

	it('should be able to scan an item', function() {
		expect(cart.scan).to.exist;
	});
});