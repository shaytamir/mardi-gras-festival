// import "./sponsers/sponsersMain.js";

console.log("Home");

const oneSecInterval = setInterval(function () {
  daysCountDown();
}, 1000);

/* date countDown func */
function daysCountDown() {
  document.getElementById("days_countDown").style.display = "block";
  var countDownDate = new Date("Feb 16, 2021 08:00:00").getTime();
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var daysCount = document.getElementById("days_countDown");

// Get the offset position of the navbar
var sticky = daysCount.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    daysCount.classList.add("sticky");
  } else {
    daysCount.classList.remove("sticky");
  }
}
