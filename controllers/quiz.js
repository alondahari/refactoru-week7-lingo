var BeGlobal = require('node-beglobal');
var _ = require('underscore');

var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'EnFlBGhzxWZ503BLH5G5ig%3D%3D'
});

module.exports = {
	index: function(req, res) {
    beglobal.languages.all(function(err, results){
      var fromEnglish = _.filter(results, function(language){
        return language.from.name === 'English'
      });
      var toLanguages = _.map(fromEnglish, function(language){
        return language.to;
      })
      var languages = _.pluck(toLanguages, 'name');
      res.render('quiz', {data: languages});
    });
  },

  startQuiz: function(req, res){
    res.render('quiz-question', req.body);
  }
};