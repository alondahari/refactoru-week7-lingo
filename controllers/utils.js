var BeGlobal = require('node-beglobal');
var key = require('./key.js')

module.exports = {

	beglobal: new BeGlobal.BeglobalAPI({
	  api_token: key
	}),

	translateWord: function(from, to, word, cb){
	  this.beglobal.translations.translate(
	    {text: word, from: from, to: to},
	    function(err, results) {
	      if (err) {
	        return console.log(err);
	      }

	      cb(results);
	    }
	  );
	}

}
