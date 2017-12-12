var add = function() {
	var body = {};
	
	
	body.num1 = $("#firstnumber").val();
	body.num2 = $("#secondnumber").val();
	body.op = "+";
	$.ajax({
		url: "/add",
		method: "POST",
		dataType: "json",
		data: body
	}).then(handleSuccess);
}



var subtract = function() {
	var body = {};
	body.num1 = $("#firstnumber").val();
	body.num2 = $("#secondnumber").val();
	
	body.op = "-";
	$.ajax({
		url: "/subtract",
		method: "POST",
		dataType: "json",
		data: body
	}).then(handleSuccess);


}

var multiply = function () {
	var body = {};
	body.num1 = $("#firstnumber").val();
	body.num2 = $("#secondnumber").val();
	body.op = "*";
	$.ajax({
		url: "/multiply",
		method: "POST",
		dataType: "json",
		data: body
	}).then(handleSuccess);
}

var divide = function () {
	var body = {};
	body.num1 = $("#firstnumber").val();
	body.num2 = $("#secondnumber").val();
	body.op = "/";
	if(body.num2==0){
		alert("Denominator can not be 0")
	}
	$.ajax({
		url: "/divide",
		method: "POST",
		dataType: "json",
		data: body
	}).then(handleSuccess);
}

function handleSuccess(res, response, body) {
	// console.log(body);
	$("#result").val(res.result);
}