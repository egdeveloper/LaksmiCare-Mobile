var user;
const HOST = "http://146.185.143.85:8080/user-service";


function authUser(login, password){
	/*$.ajax({
		url: HOST + "/user?login=" + login + "&password=" + password,
		method: "GET",
		headers: {
			"Content-Type" : "application/json"
		},
		dataType: "json",
		success: function(data){
			console.log(data);
			alert("AUTH OK!");
		}
	}).fail(function(){
		console.log("Auth failed!");
	});*/
	console.log(login);
	$.ajax({
	    url: HOST + "/user?login=" + login + "&password=" + password,
	    type: "GET",
	    headers: {
	    	"Content-Type" : "application/json"
	    },
	    error: function () {},
	    dataType: 'json',
	    success : function (response) {
	        alert(response.login);
	    }
	});
}
    
function getConfident(){
	$.ajax({
		url: HOST + "/user/" + user.id,
		method: "GET"
	}).done(function(data){
		return data;
	}).fail(function(){
		
	});
}

function sendAlarm(alarmSOS){
	$.ajax({
		url: HOST + "/user/" + user.id + "/health/alarm",
		data: alarmSOS,
		method: "POST"
	}).done(function(data){
		console.log(data);
	}).fail(function(){
		
	});
}

function sendHeartStat(){
	$.ajax({
		url: HOST + "/user/" + user.id + "/health/stat",
		data: alarmSOS,
		method: "POST"
	}).done(function(data){
		console.log(data);
	}).fail(function(){
		
	});
}

function onAuthSuccess(){
	
}

function onAuthFail(){
	
}