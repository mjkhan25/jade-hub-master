var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/routes.js');

var app = express();

app.use(express.static(__dirname + "/public"));
// body-parser 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//body parser init done
//****** session
app.use(session({secret: "akhilasdasasa",  
	resave : true,  saveUninitialized : false}));
 
app.set('view engine', 'jade');

app.get('/', routes.loginPageHandler);
app.get('/toLanding', routes.landingPageHandler);
app.get('/toLogout', routes.logoutPageHandler);
app.post('/toCity', routes.cityPageHandler);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log('HTTP server is listening on port: ' + port);
});