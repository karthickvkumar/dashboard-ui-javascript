var globalName = "MR.Global"
var studentList = [];
var automaticGlobal;

function displayList() {
	var studentName = prompt("Enter Student Name");
	var studentCourse = prompt("Enter Student Course");

	var studentInfo = {
		name: studentName,
		course: studentCourse
	};

	//var studentList = [];
	studentList.push(studentInfo);

	console.log(studentList)
}

function onLogin() {
	/*var nameOnLogin = "Mr.A";
	 automaticGlobal = "Mr.A <- onLogin()"
	console.log(nameOnLogin, globalName)*/
	var score = prompt("Enter score");
	var parseScore = parseInt(score);
	console.log(parseScore, typeof parseScore)
}

function onSignin() {
	var nameOnSignin = "Mr.B"
	console.log(nameOnSignin, globalName)
	console.log(automaticGlobal);
}