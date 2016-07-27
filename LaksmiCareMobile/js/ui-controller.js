function onclick_addUser(){
	var user_ = {
		name: $("#name-input").val(),
		login: $("#login-input").val(),
		password: $("#password-input").val(),
		email: $("#email-input").val()
	};
	createUserAccount(user, function(resp){
		alert(resp);
	}, function(){
		alert("Creation user account failed!");
	});
}

function onclick_authUser(){
	var login_ = $("#login-auth-input").val();
	var password_ = $("#password-auth-input").val();
	authUser(login_, password_, function(resp){
		alert(resp);
	}, function () {
		alert("Auth fails!");
	});
}

function genGUID(){
	alert(generateGUID());
}