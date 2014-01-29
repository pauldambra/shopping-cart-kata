var expect = require('chai').expect;
var offerCalculator = require('../offerCalculator');

describe('the offer calculator', function() {
	it('should allow you to add an offer', function() {
		expect(offerCalculator.addOffer).to.exist;
	});

	it('should allow you to get an offer total', function() {
		expect(offerCalculator.getOfferTotal).to.exist;
	});

	describe('when there are no offer', function() {
		it('should calculate offer price as 0 and remaining untotalled items as quantity passed in', function() {
			//a99 is 50 each of 3 for 130
			var result = offerCalculator.getOfferTotal('A99', 4);
			expect(result).to.eql({
				offerTotal:0,
				unmatchedItems:4
			});
		});
	});

	describe('when there is a matching offer', function() {
		it('should calculate offer price and remaining untotalled items', function() {
			//a99 is 50 each of 3 for 130
			offerCalculator.addOffer('A99',3,130);
			var result = offerCalculator.getOfferTotal('A99', 4);
			expect(result).to.eql({
				offerTotal:130,
				unmatchedItems:1
			});
		});
	});
});