var expect = require('chai').expect;
var Checkout = require('../checkout');
var offerCalculator = require('../offerCalculator');

describe('scanning', function() {
	var cart;

	beforeEach(function() {
		offerCalculator.addOffer('A99',3,130);
		offerCalculator.addOffer('B15',2,45);
		cart = new Checkout();
	});

	describe('A99', function() {
		it('should scan item A99 and add price 50', function() {
			cart.scan('A99');
			expect(cart.total()).to.equal(50);
		});

		it('should scan two A99 and total 100', function() {
			cart.scan('A99');
			cart.scan('A99');
			expect(cart.total()).to.equal(100);
		});

		it('should scan three A99 and total 130', function() {
			cart.scan('A99');
			cart.scan('A99');
			cart.scan('A99');
			expect(cart.total()).to.equal(130);
		});

		it('should scan four A99 and total 180', function() {
			cart.scan('A99');
			cart.scan('A99');
			cart.scan('A99');
			cart.scan('A99');
			expect(cart.total()).to.equal(180);
		});
	});

	describe('B15', function() {
		it('should scan item B15 and add price 30', function() {
			cart.scan('B15');
			expect(cart.total()).to.equal(30);
		});

		it('should scan two B15 and total 45', function() {
			cart.scan('B15');
			cart.scan('B15');
			expect(cart.total()).to.equal(45);
		});

		it('should scan three B15 and total 75', function() {
			cart.scan('B15');
			cart.scan('B15');
			cart.scan('B15');
			expect(cart.total()).to.equal(75);
		});

		it('should scan four B15 and total 90', function() {
			cart.scan('B15');
			cart.scan('B15');
			cart.scan('B15');
			cart.scan('B15');
			expect(cart.total()).to.equal(90);
		});
	});

	describe('C40', function() {
		it('should scan item C40 and add price 60', function() {
			cart.scan('C40');
			expect(cart.total()).to.equal(60);
		});

		it('should scan two C40 and total 120', function() {
			cart.scan('C40');
			cart.scan('C40');
			expect(cart.total()).to.equal(120);
		});

		it('should scan three C40 and total 180', function() {
			cart.scan('C40');
			cart.scan('C40');
			cart.scan('C40');
			expect(cart.total()).to.equal(180);
		});

		it('should scan four C40 and total 240', function() {
			cart.scan('C40');
			cart.scan('C40');
			cart.scan('C40');
			cart.scan('C40');
			expect(cart.total()).to.equal(240);
		});
	});

	describe('T34', function() {
		it('should scan item T34 and add price 99', function() {
			cart.scan('T34');
			expect(cart.total()).to.equal(99);
		});

		it('should scan two T34 and total 198', function() {
			cart.scan('T34');
			cart.scan('T34');
			expect(cart.total()).to.equal(198);
		});

		it('should scan three T34 and total 297', function() {
			cart.scan('T34');
			cart.scan('T34');
			cart.scan('T34');
			expect(cart.total()).to.equal(297);
		});

		it('should scan four T34 and total 240', function() {
			cart.scan('T34');
			cart.scan('T34');
			cart.scan('T34');
			cart.scan('T34');
			expect(cart.total()).to.equal(396);
		});
	});
});