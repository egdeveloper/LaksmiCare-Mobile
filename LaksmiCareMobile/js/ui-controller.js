
var globalGuid;
var globalToken;
window.globalUser = null;

function onclick_addUser(){
	var user = {};
	user.name = $("#name-input").val();
	user.login = $("#login-input").val();
	user.password = $("#password-input").val();
	user.email = $("#email-input").val();
	console.log(user.name);
	createUserAccount(user, function(resp){
		alert("Sign up is successfull!");
		document.getElementById("redp1").click();
	}, function(){
		alert("Creation user account failed!");
	});
}

function onclick_authUser(){
	console.log("=> authUser() started");
	var login = $("#login-auth-input").val();
	var password = $("#password-auth-input").val();
	console.log("| Login = " + login);
	console.log("| Password = " + password);
	authUser(login, password, function(data){
		console.log("| Auth successfull");
		globalToken = data.token;
		window.globalUser  = data.user;
//		var tokenDB = new Database("tokens");
//		tokenDB.insert({"_id" : "def-token", "token" : data.token}, function(err, resp){
//			if(err){
//				alert("Internal application error: could not save token to local storage!");
//			}
//		});
		document.getElementById("redp3").click();
	}, function () {
		console.log("| Auth fails!");
	});
	document.getElementById("redp3").click();
}

function onclickSaveSettings(){
	console.log("=> updateUserData() started");
//	var tokenDB = new Database("tokens");
//	tokenDB.findAll(function(err, resp){
//		console.log(resp);
//	});
	var user = {
			id: window.globalUser.id,
			name: $("#ps-name-input").val(),
			login: $("#ps-login-input").val(),
			password: $("#ps-password-input").val(),
			email: $("#ps-email-input").val(),
			geolocEnabled: $("ps-geolocEnabled-select").val() == "on",
			medStatEnabled: $("ps-medStat-select").val() == "on"
	};
	updateUserData(user, function(resp){
		console.log("| Update successfull");
		window.globalUser  = user;
	}, function(){
		console.log("| Saving settings failed!");
		alert("Coul not save settings!");
	});
}

function onclickAddConfident(){
	var confident = {
			name: $("#confident-name-input").val(),
			email: $("#confident-email-input").val()
	};
	addConfident(window.globalUser, confident, function(data){
		if(window.globalUser.confident){
			window.globalUser.confident.push(data);
		}
		else{
			window.globalUser.confident = [];
			window.globalUser.confident.push(data);
		}
		$("#confident-list").append("<p>" + confident.name + ": " + confident.email + " </p>");
	}, function(){
		alert("Adding confident failed!");
	});
}

function genGUID(){
	alert(generateGUID());
}