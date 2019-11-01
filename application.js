function storeLogin(){
	var emailDOM = document.getElementById('user-email-id');
	var passwordDOM = document.getElementById('user-password');
 	
 	document.getElementById('login-result').innerHTML = emailDOM.value +' - '+ passwordDOM.value;

 	var parsedResult = JSON.stringify({ email: emailDOM.value, password: passwordDOM.value})

 	localStorage.setItem('login-information', parsedResult); 
}

function printLogin() {
 	var loginInfo = localStorage.getItem('login-information');
  var parsedValue = JSON.parse(loginInfo);

 	document.getElementById('login-result').innerHTML = parsedValue.email +' - '+  parsedValue.password;

}

printLogin(); 


function onLogin(){	
	var result = {
		userName: '',
		password: '',
		education: '',
		hobbies: '',
		gender: ''
	}

	var resultCollection = [];

	var inputBox = document.getElementsByClassName("login-btn");
 	
 	for (var eachInput of inputBox) {
		resultCollection.push(eachInput.value);
	}

	var genders = document.getElementsByName("gender-option");

	for (var radioBtn of genders) {
	  if(radioBtn.checked){
	  	resultCollection.push(radioBtn.value)
	  }
	}

	var checkboxes = document.getElementsByName("checkbox-option");

	for (var checkboxBtn of checkboxes) {
	  if(checkboxBtn.checked){
	  	resultCollection.push(checkboxBtn.value)
	  }
	}

	var resultArray = Object.keys(result);
	//resultCollection - ['asdf', 'sf', 'hsc', 'male', 'cricket']
	//resultArray - ['userName', 'password', 'education', 'hobbies', 'gender']
	
	//-----OBJECT-------
	// objName = {
	// 	name : ''
	// };
	// objName.name = "MR.A" (or) objName[name] = "Mr.A"
	// objName = {
	// 	name : "MR.A"
	// };

	//-----ARRAY-----
	// arr = ['car', 'bus', 'cycle'];
	// arr[0]
	// "car"

	resultCollection.forEach(function(value, index){
		var eachKey = resultArray[index];
		result[eachKey] = value;
		//result[resultArray[index]] = value;
	});

	console.info(result);
}

function displayMessage(){
	var input1 = prompt("Enter Value One");
	var input2 = prompt("Enter Value One");
	var addition  = parseInt(input1) + parseInt(input2)
	document.getElementById('result').innerHTML = addition;
}

