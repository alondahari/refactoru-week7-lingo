module.exports = {

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
	}
	
}