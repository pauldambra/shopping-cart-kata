var prices = require('./prices');

function ShoppingCart() {
	this.items = {};
}

ShoppingCart.prototype.total = function() {
	var total = 0;

	for(var itemSku in this.items) {
		var itemQuantity = this.items[itemSku];
		total += prices.calculate(itemSku, itemQuantity);
	}

	return total;
};

ShoppingCart.prototype.scan = function(scannedSKU) {
	var currentQuantity = this.items[scannedSKU] || 0;
	this.items[scannedSKU] = ++currentQuantity;
};


module.exports = ShoppingCart;