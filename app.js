var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var quizController = require('./controllers/quiz.js');


var app = express();”
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/quiz', quizController.index);

app.post('/translate', indexController.translate);
app.post('/getLangTo', indexController.getLangTo);

var server = app.listen(9613, function() {
	console.log('Express server listening on port ' + server.address().port);
});
