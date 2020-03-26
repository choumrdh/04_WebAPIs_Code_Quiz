var userScore = JSON.parse(localStorage.getItem("score"));
var userIntital = JSON.parse(localStorage.getItem("intial"));

var userList = document.querySelector("#userList")
var user= document.createElement("li");
user.innerHTML = userIntital + " " + userScore + "/9";
userList.appendChild(user)


var clearbutton =  document.querySelector("#clearbutton");
clearbutton.addEventListener("click", function clear(){;
    clearbutton = window.localStorage.clear()
})
