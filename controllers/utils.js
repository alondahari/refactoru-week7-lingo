var BeGlobal = require('node-beglobal');

module.exports = {

	beglobal: new BeGlobal.BeglobalAPI({
	  api_token: 'EnFlBGhzxWZ503BLH5G5ig%3D%3D'
	}),

	translateWord: function(from, to, word){
	  beglobal.translations.translate(
	    {text: word, from: from, to: to},
	    function(err, results) {
	      if (err) {
	        return console.log(err);
	      }

	      return results;
	    }
	  );
	},

	getCode: function(language){

	}

}
