var caption;
var text;

function check () {
	text = document.getElementById ("textbox").innerHTML;
	caption = document.getElementById("caption").checked;
  document.getElementById("start").disabled = true;
  checkDates();
  checkPeople();
}
function checkDates () {
	var output = document.getElementById("date-results");
  output.style.display = "block";
  writeSectionTitle (output, "Dates");
  
  // 1.
  writeP (output, "1) Never start a paragraph with a numerical date");
  pass("I don't know what this means, so I guess you pass.", output);
 	
  // 2.
  writeP (output, "2) Never use \"on\" in front of dates.");
  var regex2 = /on (January|February|March|April|May|June|July|August|September|October|November|December)/gim;
  
  findViolations (regex2, output, text);
  
  // 3.
  writeP (output, "3) Use a specific date, avoid generalizations like \"last week\", \"this month\", etc.");
  var regex3 = /(a few weeks ago|several weeks ago|this month|last month|a few months ago|several months ago|a while ago|some time ago|a short while back|some time back|not that long ago)/gim;
  
  findViolations (regex3, output, text);
  
  // 4. I'm not really too sure about this one either
  writeP (output, "4) Do not use the current school year");
  
  var regex4 = /(2016|twenty sixteen|two thousand sixteen|two thousand and sixteen|2016-2017|2017|twenty seventeen|two thousand seventeen|two thousand and seventeen)/gim;
  
  findViolations (regex4, output, text);
 
}

function checkPeople () {
	var output = document.getElementById("people-results");
  output.style.display = "block";
  writeSectionTitle (output, "People");
  
  // 1.
  writeP (output, "1) Use students' full names, no nick names.");
  pass ("I'm still working on this one", output);
  
  // 2.
}

function writeSectionTitle (output, title) {
	output.innerHTML += "<p class = 'sectiontitle'>" + title + "</p>"
}

function findViolations (regex, output, inputText) {
	result = [];
  indices = [];
  while ((result = regex.exec(inputText))) {
  	indices.push(result.index);
  }
  
  if (indices.length != 0) {
  	fail (("Found " + indices.length + " violation(s)"), regex, output);
  }
  else {
  	pass("No violations found!", output);
  }
}


function writeP (output, string) {
	output.innerHTML += "<p class = 'pitalics'>" + string + "</p>";
}

function pass (note, output) {
	output.innerHTML += "<p><span class = 'passed'> Pass. </span>" + note + "</p>";
}

function fail (note, regex, output) {
	output.innerHTML += "<p class = 'failed'> Failed </p>";
  writeP (output, note);
  
  var textDiv = document.createElement("DIV");
  var textInsideDiv = document.createTextNode (text);
  console.log (text);
  textDiv.appendChild (textInsideDiv);
  textDiv.style.border = "3px solid #cfcfcf";
  textDiv.style.padding = "8px";
  
  output.appendChild (textDiv);
  
  var mark = new Mark (textDiv);
  mark.markRegExp (regex)
}
