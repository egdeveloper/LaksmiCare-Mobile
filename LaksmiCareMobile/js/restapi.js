var user;
const HOST = "http://146.185.143.85:8080/user-service";
//const HOST = "http://localhost:8080";

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
	    success : onSuccess
	}).fail(onFail);
}

function createUserAccount(user, onSuccess, onFail){
	console.log("=> createUserAccount() started");
	console.log("| User = " + user);
	$.ajax({
		url: HOST + "/user",
		type: "POST",
		headers: {
			"Content-Type" : "application/json"
		},
		dataType: "json",
		data: user,
		success: onSuccess
	}).fail(onFail);
}

function getConfident(user, onSuccess, onFail){
	$.ajax({
		url: HOST + "/user/" + user.id + "/confident-list",
		method: "GET",
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