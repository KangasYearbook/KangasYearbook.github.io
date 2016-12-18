var caption;
function check () {
	caption = document.getElementById("caption").checked;
  document.getElementById("start").disabled = true;
  checkDates();
}
function checkDates () {
	var output = document.getElementById("date results");
  output.innerHTML += "<p>1. Never start a paragraph with a numerical date.</p>"
  
  
}