var objPeople = [
	{
		username: "sam",
		password: "codify",
	},
	{
		username: "matt",
		password: "academy",
	},
	{
		username: "chris",
		password: "forever",
	}
]

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	for(i=0; i <objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password) {
		console.log(username + " is logged in!!!")	
			return
		}
	}
		console.log("incorrect username and password")
}
function registerNewUser() {
	var newUserName = document.getElementById("newUserName").value
	var newPassword = document.getElementById("newPassword").value
	var newUser = {
		username: newUserName,
		password: newPassword
	}
//loop through the array
for(i = 0; i < objPeople.length; i++) {
	if(newUserName == objPeople[i].username) {
		alert("that username is already in use, please choose another")
		return
	}	else if (newPassword.length < 8) {
		alert("that password is too short, include 8 or more characters")
		return
	}
}
//check if a user name already exists
//else if check if the length of the password is 8 or more characters
//push newUser object to objPeople object
	objPeople.push(newUser)
	console.log(objPeople)
}




