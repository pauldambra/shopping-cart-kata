var offerCalculator = require('./offerCalculator');

var products = {
	'A99': 50,
	'B15': 30,
	'C40': 60,
	'T34': 99,
};

module.exports.calculate = function(sku, quantity) {
	var total = 0;
	var offerCalculationResult = offerCalculator.getOfferTotal(sku, quantity);
	total += products[sku] * offerCalculationResult.unmatchedItems;
	total += offerCalculationResult.offerTotal;
	return total;
};