var _ = require('underscore');
var utils = require('./utils');
var randomWords = require('random-words');


module.exports = {

  word: '',
  languageCode: '',

	index: function(req, res) {
    utils.beglobal.languages.all(function(err, results){
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
    this.word = randomWords();
    utils.beglobal.languages.all(function(err, results){
      var fromEnglish = _.filter(results, function(language){
        return language.from.name === 'English'
      });
      var toLanguages = _.map(fromEnglish, function(language){
        return language.to;
      })
      var language = _.findWhere(toLanguages, {name: req.body.language});
      this.languageCode = language.code;
    });

    res.render('quiz-question', {
      language: req.body.language,
      word: this.word
    });
  },

  answerQuiz: function(req, res){
    utils.translateWord('eng', this.languageCode, this.word, function(translated){

      res.send(translated);
    })
  }
};