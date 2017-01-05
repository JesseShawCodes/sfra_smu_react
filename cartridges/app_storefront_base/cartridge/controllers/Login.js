'use strict';

var server = require('server');
var CustomerMgr = require('dw/customer/CustomerMgr');
var URLUtils = require('dw/web/URLUtils');

server.get('Show', server.middleware.https, function (req, res, next) {
    res.render('/account/login', {
        navTabValue: 'login'
    });
    next();
});

server.get('Logout', function (req, res, next) {
    // TODO clear form elements?
    CustomerMgr.logoutCustomer(false);
    res.redirect(URLUtils.url('Home-Show'));
    next();
});

module.exports = server.exports();