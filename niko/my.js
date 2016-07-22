var hiddenDiv= document.getElementById("showAnswer");
hiddenDiv.style.display = "none";
var answer = document.getElementById("answer");

var showAnswer=function() {
	//var password = document.getElementById("password").value;
	var text = document.getElementById("password").value;
	answer.innerHTML = text;
	document.getElementById("login").style.display = "none";
	document.getElementById("questionDiv").style.display = "none";
    hiddenDiv.style.display="block";
};