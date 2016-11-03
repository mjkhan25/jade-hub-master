
exports.loginPageHandler = function(req, res){
	req.session.destroy();
	console.log("Login Page");
	res.render('login.jade', {});
}

exports.landingPageHandler = function(req, res){
	console.log("processing GET request for landing page. Req Param  " + req.query.nm);

	var person;
	if (req.session.userName){   //session store has userName
		console.log("User Name already in session. It is " + req.session.userName);
		person = req.session.userName;
	}else{ //session store does NOT have userName
		// read username from req.query and keep into the session store
		person = req.query.nm;
		req.session.userName = person;
		console.log("User Name does not exist in session. Hence storing it in session store " + person);
	}

	res.render('landingpage.jade', {welcomeMessage:person});
}

exports.cityPageHandler = function(req, res){
	var interestValue = req.body.interest;
	var cityNameValue, taglineValue;
	var famousfor = new Array();
	console.log("received interestValue  as " + interestValue);


	if (interestValue === 'history'){
		cityNameValue = 'Rome';
		taglineValue = 'City of earliest civilization';
		famousfor = ["Colloseum", "Trevi Fountain"];
	}else if (interestValue === 'fashion'){
		cityNameValue = 'Paris';
		taglineValue = 'Fashion capital of the world ';
		famousfor = ["Eiffel Tower"];
	}else if (interestValue === 'finance'){
		cityNameValue = 'New York';
		taglineValue = 'Business capital of the world ';
		famousfor = ["Statue of Liberty", "Wall Street"];
	}
	
	res.render('city.jade', {
						cityName:cityNameValue, 
						tagline: taglineValue, 
						person:req.session.userName,
						FAMOUSFOR:famousfor
					});
}

// use extra logout button in app
exports.logoutPageHandler = function(req, res){
	res.render('login.jade', {});
}