
var globalGuid;
var globalToken;
window.globalUser = null;

$(document).ready(function(){
	$("#p3-t1").bind("change", function(){
		if($("#p3-t1").attr("aria-expanded").val() == true){
			if(globalUser){
				$("#ps-name-input").val(globalUser.name);
				$("#ps-login-input").val(globalUser.login);
				$("#ps-password-input").val(globalUser.password);
				$("#ps-email-input").val(globalUser.email);
				/*$( "#ps-geolocEnabled-select option:selected" ).text() 
				$("#ps-medStat-select option:selected" ).text()*/
				$("#ps-normalRateMin-input").val(globalUser.normalHeartRateMin.toString());
				$("#ps-normalRateMax-input").val(globalUser.normalHeartRateMax.toString());
			}
		}
	});
//	$("#p3-t2").bind("change", function(){
//		alert("p3djfdjfj");
//		if($("#p3-t2").attr("aria-expanded").val() == true){
//			getConfident(globalUser.id, function(data){
//				$("#confident-list").empty();
//				for(var confident in data){
//					$("#confident-list").append("<p>" + confident.name + ", " + confident.email + "</p>");
//				}
//			}, function(){
//				
//			});
//		}
//	});
	
});

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
		$("#ps-name-input").val(globalUser.name);
		$("#ps-login-input").val(globalUser.login);
		$("#ps-password-input").val(globalUser.password);
		$("#ps-email-input").val(globalUser.email);
		/*$( "#ps-geolocEnabled-select option:selected" ).text() 
		$("#ps-medStat-select option:selected" ).text()*/
		$("#ps-normalRateMin-input").val(globalUser.normalHeartRateMin);
		$("#ps-normalRateMax-input").val(globalUser.normalHeartRateMax);
		document.getElementById("redp3").click();
	}, function () {
		console.log("| Auth fails!");
		alert("Authorization failed. User credentials (login or password) are wrong.");
	});
}

function onclickSaveSettings(){
	console.log("=> updateUserData() started");
	console.log();
	var user = {
			id: window.globalUser.id,
			name: $("#ps-name-input").val(),
			login: $("#ps-login-input").val(),
			password: $("#ps-password-input").val(),
			email: $("#ps-email-input").val(),
			geolocEnabled: $( "#ps-geolocEnabled-select option:selected" ).text() == "Yes",
			medStatEnabled: $("#ps-medStat-select option:selected" ).text() == "Yes",
			normalHeartRateMin: parseInt($("#ps-normalRateMin-input").val()),
			normalHeartRateMax: parseInt($("#ps-normalRateMax-input").val())
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

function onclickGetConfident(){
	console.log(window.globalUser);
	getConfident(window.globalUser, function(data){
		$("#confident-list").empty();
		console.log(data);
		data.forEach(function(confident, arr, i){
			$("#confident-list").append("<p>" + confident.name + ", " + confident.email + "</p>");
		});
	}, function(){
		
	});
}

function onclickRegisterDevice(){
	var deviceId = $("#device-id-input").val();
	registerDevice(window.globalUser, deviceId, function(data){
		alert("Device registered! OK!");
	}, function(){
		
	});
}
function genGUID(){
	alert(generateGUID());
}