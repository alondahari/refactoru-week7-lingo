var BeGlobal = require('node-beglobal');
var _ = require('underscore');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'EnFlBGhzxWZ503BLH5G5ig%3D%3D'
});

module.exports = {
	index: function(req, res) {
    res.render('quiz')
	}
};