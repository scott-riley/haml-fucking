var month_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();
document.getElementById("date").innerHTML = (day + " " + month_names[month] + " " + year);