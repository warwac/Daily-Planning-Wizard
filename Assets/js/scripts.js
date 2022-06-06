//var today = ("#currentday");

//setInterval(function () {
 //   today.text(moment().format("MMMM Do YYYY - hh:mm:ss"));
//}, 1000)

//var CurrentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

//let current_time = moment().format("MMMM Do YYYY, h:mm:ss a")
//"moment().format('MMMM Do YYYY, h:mm:ss a');"
//<span class="lead"> </span>

//$(document).ready (function() {
//    console.log)("ready!")
//};

//$("#date").text("Today is " + (moment().format('MMMM Do YYYY - hh:mm:ss a')));

const input = document.querySelector('input');
const log = document.getElementById('selectable');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
