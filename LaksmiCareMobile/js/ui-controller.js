function onclick_addUser(){
	var user = {};
	user.name = $("#name-input").val();
	user.login = $("#login-input").val();
	user.password = $("#password-input").val();
	user.email = $("#email-input").val();
	console.log(user.name);
	createUserAccount(user, function(resp){
		alert("Sign up is successfull!");
		document.getElementById("redp3").click();
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
	authUser(login, password, function(resp){
		console.log("| Auth successfull");
		globalUser = resp;
		document.getElementById("redp3").click();
	}, function () {
		console.log("| Auth fails!");
	});
	document.getElementById("redp3").click();
}

function onclickSaveSettings(){
	
}

function onclickAddConfident(){
	
}

function genGUID(){
	alert(generateGUID());
}