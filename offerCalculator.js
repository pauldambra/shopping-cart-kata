
module.exports.getOfferTotal = function(sku, quantity) {
	var result = {
		offerTotal:0,
		unmatchedItems: quantity
	};

	var skuOffer = offers[sku];

	if (skuOffer && quantity >= skuOffer.quantity) {
		var numberOfOfferMatches = Math.floor(quantity / skuOffer.quantity);
		result.unmatchedItems = quantity % skuOffer.quantity;
		result.offerTotal = skuOffer.price * numberOfOfferMatches;
	}

	return result;
};

var offers = {};

module.exports.addOffer = function(sku, quantity, price) {
	offers[sku] = {
		quantity: quantity,
		price: price
	};
};