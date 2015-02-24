var BeGlobal = require('node-beglobal');
var _ = require('underscore');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'EnFlBGhzxWZ503BLH5G5ig%3D%3D'
});

var indexController = {
	index: function(req, res) {
    beglobal.languages.all(function(err, results){
      var from = _.map(results, function(language){
        return language.from.name;
      });
      var fromLanguages = _.unique(from);
      res.render('index', {data: fromLanguages});
    });
		// res.render('index');
	},

  translate: function(req, res) {
    res.send(req.body.wordToTranslate);
  },

  getLangTo: function(req, res) {
    beglobal.languages.all(function(err, results){
      var theseLangs = _.filter(results, function(result){
        return result.from.name === req.body.language;
      });
      var toLanguages = _.pluck(theseLangs, 'to');
      var returnArr = _.pluck(toLanguages, 'name');
      res.send(returnArr);
      // console.log(theseLangs);
    });
  }
};

module.exports = indexController;