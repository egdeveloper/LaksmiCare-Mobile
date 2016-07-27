
/*const HOST = "http://146.185.143.85:8080";*/
//const HOST = "http://localhost:8080";
const HOST = "http://192.168.0.156:8080";
var tdb;

//$(document).ready(function(){
//	tdb = new Dexie('tokens');
//	Dexie.exists('tokens').then(function(exists){
//		if(!exists){
//			tdb.version(1).stores({
//				tokens: "name, guid"
//			});
//			console.log(tdb);
//		}
//	});
//	tdb.open();
//});

function authUser(login, password, onSuccess, onFail){
	console.log("=> authUser() started");
	console.log("| Login = " + login);
	console.log("| Password = " + password);
	$.ajax({
	    url: HOST + "/user?login=" + login + "&password=" + password,
	    type: "GET",
	    headers: {
	    	"Content-Type" : "application/json"
	    },
	    dataType: 'json',
	    success : function(data){
	    	/*tdb.tokens.add({"name" : "def-token", "guid" : data.token});*/
	    	onSuccess(data);
	    }
	}).fail(onFail);
}

function createUserAccount(user, onSuccess, onFail){
	console.log("=> createUserAccount() started");
	console.log("| User =" + user);
	console.log("=> createUserAccount() started");
	console.log("| User = " + user);
	$.ajax({
		url: HOST + "/user",
		type: "POST",
		headers: {
			"Content-Type" : "application/json"
		},
		dataType: "json",
		data: JSON.stringify(user),
		success: onSuccess
	}).fail(onFail);
}

function updateUserData(user, onSuccess, onFail){
	console.log("=> createUserAccount() started");
	console.log("| User =" + user);
	/*tdb.tokens.where('name').equals('def-token').each(function(token){
		$.ajax({
			url: HOST + "/user?token=" + token,
			type: "PUT",
			headers: {
				"Content-Type" : "application/json"
			},
			dataType: "json",
			data: JSON.stringify(user),
			success: onSuccess
		}).fail(onFail);
		return;
	});*/
	$.ajax({
		url: HOST + "/user",
		type: "PUT",
		headers: {
			"Content-Type" : "application/json"
		},
		data: JSON.stringify(user),
		success: onSuccess
	}).fail(onFail);
}

function addConfident(user, confident, onSuccess, onFail){
	$.ajax({
		url: HOST + "/user/" + user.id + "/confident",
		method: "POST",
		headers: {
			"Content-Type" : "application/json"
		},
		dataType: "json",
		data: JSON.stringify(confident),
		success: onSuccess
	}).fail(onFail);
}

function getConfident(user, onSuccess, onFail){
	$.ajax({
		url: HOST + "/user/" + user.id + "/confident-list",
		method: "GET",
		headers: {
			"Content-Type" : "application/json"
		},
		dataType: "json",
		success: onSuccess
	}).fail(onFail);
}

function sendAlarm(user, alarmSOS, onSuccess, onFail){
	$.ajax({
		url: HOST + "/user/" + user.id + "/health/alarm",
		method: "POST",
		data: alarmSOS,
		headers: {
			"Content-Type" : "application/json"
		},
		success: onSuccess
	}).fail(onFail);
}

function sendHeartStat(user, heartStat, onSuccess, onFail){
	$.ajax({
		url: HOST + "/user/" + user.id + "/health/stat",
		method: "POST",
		data: heartStat,
		headers: {
			"Content-Type" : "application/json"
		},
		success: onSuccess
	}).fail(onFail);
}