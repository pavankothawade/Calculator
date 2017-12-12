var http=require('http');
var express=require('express');
var app=express();
var path=require('path');
var bodyParser = require('body-parser');
var home = require('./routes/home');
app.set('port', process.env.PORT || 3000);

/*app.get('/', function(req, res){
	res.sendFile(__dirname +'/index.html');
});
app.listen(8000);*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(bodyParser.urlencoded());
app.get('/', home.index);
app.post("/add", function(req, res) {
	var result = {};
	result.result = parseInt(req.body.num1) + parseInt(req.body.num2);
	res.json(result);
});
app.post("/subtract", function(req, res) {
	var result = {};
	result.result = parseInt(req.body.num1) - parseInt(req.body.num2);
	res.json(result);
});
app.post("/multiply", function(req, res) {
	var result = {};
	result.result = parseInt(req.body.num1) * parseInt(req.body.num2);
	res.json(result);
});
app.post("/divide", function(req, res) {
	var result = {};
	result.result = parseInt(req.body.num1) / parseInt(req.body.num2);

	res.json(result);
});
app.post('/', home.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

