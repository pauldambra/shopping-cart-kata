var expect = require('chai').expect;
var prices = require('../prices');
var offerCalculator = require('../offerCalculator');

describe('calculate prices', function() {
	beforeEach(function() {
		offerCalculator.addOffer('A99',3,130);
		offerCalculator.addOffer('B15',2,45);
	});

	describe('A99', function() {
		it('should scan item A99 and add price 50', function() {
			expect(prices.calculate('A99', 1)).to.equal(50);
		});

		it('should scan two A99 and total 100', function() {
			expect(prices.calculate('A99', 2)).to.equal(100);
		});

		it('should scan three A99 and total 130', function() {
			expect(prices.calculate('A99', 3)).to.equal(130);
		});

		it('should scan four A99 and total 180', function() {
			expect(prices.calculate('A99', 4)).to.equal(180);
		});
	});

	describe('B15', function() {
		it('should scan item B15 and add price 30', function() {
			expect(prices.calculate('B15', 1)).to.equal(30);
		});

		it('should scan two B15 and total 45', function() {
			expect(prices.calculate('B15', 2)).to.equal(45);
		});

		it('should scan three B15 and total 75', function() {
			expect(prices.calculate('B15', 3)).to.equal(75);
		});

		it('should scan four B15 and total 90', function() {
			expect(prices.calculate('B15', 4)).to.equal(90);
		});
	});

	describe('C40', function() {
		it('should scan item C40 and add price 60', function() {
			expect(prices.calculate('C40', 1)).to.equal(60);
		});

		it('should scan two C40 and total 120', function() {
			expect(prices.calculate('C40', 2)).to.equal(120);
		});

		it('should scan three C40 and total 180', function() {
			expect(prices.calculate('C40', 3)).to.equal(180);
		});

		it('should scan four C40 and total 240', function() {
			expect(prices.calculate('C40', 4)).to.equal(240);
		});
	});

	describe('T34', function() {
		it('should scan item T34 and add price 99', function() {
			expect(prices.calculate('T34', 1)).to.equal(99);
		});

		it('should scan two T34 and total 198', function() {
			expect(prices.calculate('T34', 2)).to.equal(198);
		});

		it('should scan three T34 and total 297', function() {
			expect(prices.calculate('T34', 3)).to.equal(297);
		});

		it('should scan four T34 and total 240', function() {
			expect(prices.calculate('T34', 4)).to.equal(396);
		});
	});
});