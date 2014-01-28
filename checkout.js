function ShoppingCart() {
	this.items = {};
}

var offers = {};

var addOffer = function(sku, quantity, price) {
	offers[sku] = {
		quantity: quantity,
		price: price
	};
};

var calculatePrice = function(price, quantity) {
	return price * quantity;
};

ShoppingCart.prototype.total = function() {
	var total = 0;

	for(var itemSku in this.items) {
		var itemQuantity = this.items[itemSku];
		var skuOffer = offers[itemSku];

		if (skuOffer) {
			if (itemQuantity >= skuOffer.quantity) {
				//apply the discount
				var numberOfOfferMatches = Math.floor(itemQuantity / skuOffer.quantity);
				var numberOfUnmatchedItems = itemQuantity % skuOffer.quantity;

				total += calculatePrice(skuOffer.price, numberOfOfferMatches);
				total += calculatePrice(products[itemSku], numberOfUnmatchedItems);
			} else {
				total += calculatePrice(products[itemSku], itemQuantity);
			}
		} else {
			total += calculatePrice(products[itemSku], itemQuantity);
		}
	}

	return total;
};

var products = {
	'A99': 50,
	'B15': 30,
	'C40': 60,
	'T34': 99,
};

ShoppingCart.prototype.scan = function(scannedSKU) {
	var currentQuantity = this.items[scannedSKU] || 0;
	this.items[scannedSKU] = ++currentQuantity;
};


module.exports = ShoppingCart;
module.exports.addOffer = addOffer;