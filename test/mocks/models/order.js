'use strict';

var proxyquire = require('proxyquire').noCallThru().noPreserveCache();

var AddressModel = require('./address');
var BillingModel = require('./billing');
var ShippingModel = require('./shipping');
var PaymentModel = require('./payment');
var TotalsModel = require('./totals');
var ProductLineItemsModel = require('./productLineItems');

function ProxyModel(){
	return proxyquire('../../../cartridges/app_storefront_base/cartridge/models/order', {
	    'dw/web/URLUtils': {
	    },
	    'dw/order/PaymentMgr': {
	    },
	    'dw/util/StringUtils': {
	        formatMoney: function () {
	            return 'formatted money';
	        }
	    },
	    'dw/web/Resource': {
	        msg: function () {
	            return 'someString';
	        },
	        msgf: function () {
	            return 'someString';
	        }
	    },
	    'dw/system/HookMgr': function () {},
	    '~/cartridge/models/address': AddressModel,
	    '~/cartridge/models/billing': BillingModel,
	    '~/cartridge/models/payment': PaymentModel,
	    '~/cartridge/models/totals': TotalsModel,
	    '~/cartridge/models/productLineItems': ProductLineItemsModel,
	    '~/cartridge/scripts/checkout/shippingHelpers': {}
	});
}

module.exports = ProxyModel();