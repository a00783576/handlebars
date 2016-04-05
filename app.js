var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var fortune = require('./lib/fortuneCookies.js');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	var randomFortune = {fortune: fortune.getFortune}()};
	res.render('about', {fortune: randomFortune});
});

app.use(function(req, res, next){
	res.status(404);
	res.send('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.send('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' 
	+ app.get('port') + '; press Ctrl-C to terminate.');
})