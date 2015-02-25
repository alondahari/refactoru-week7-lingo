var _ = require('underscore');
var utils = require('./utils');

var indexController = {
	index: function(req, res) {
    utils.beglobal.languages.all(function(err, results){
      var from = _.map(results, function(language){
        // return language.from.name;
        return {name : language.from.name,
          code: language.from.code};
      });
      // console.log(from, 'hello');
      // var fromLanguages = _.unique(from);
      var cache = [];
      var uniqueFrom = _.filter(from, function(value){
        if (_.contains(cache, value.code)) {
          return false;
        }
        else
        {
          cache.push(value.code);
          return true;
        }
      });
      res.render('index', {data: uniqueFrom});
    });
	},

  translate: function(req, res) {
    utils.translateWord(
      req.body.fromLang, 
      req.body.toLang, 
      req.body.word,
      function(results){
        res.send(results);
      });
    // console.log(req.body.wordToTranslate);
    // res.send(req.body.wordToTranslate);
  },

  getLangTo: function(req, res) {
    utils.beglobal.languages.all(function(err, results){
      var theseLangs = _.filter(results, function(result){
        return result.from.code === req.body.language;
      });
      var toLanguages = _.pluck(theseLangs, 'to');
      var returnArr = _.map(toLanguages, function(language){
        return {name : language.name,
          code: language.code};
      });
      // var code = _.pluck()
      res.send(returnArr);
      // console.log(returnArr);
    });
  }
};

module.exports = indexController;