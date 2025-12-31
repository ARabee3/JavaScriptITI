//Q1

function buttonClicked(e) {
  alert(e.button);
}

function keyPressed(e) {
  alert(e.key);
}

//Q2
//a
var button = document.getElementById("startClock");
var clock = document.getElementById("clock");
var interval;
function showDate() {
  var date = new Date();
  clock.textContent = date.toLocaleTimeString();
}
function handleClick() {
  alert("Clock Started");
  interval = window.setInterval(showDate, 1000);
}

function handleStop(event) {
  if (event.code == "KeyW" && event.altKey) {
    stopClock();
  }
}
function stopClock() {
  alert("Clock Stopped");
  window.clearInterval(interval);
}

button.addEventListener("click", handleClick);
window.addEventListener("keydown", handleStop);
var adWindow;

// Q5
function handleAdClick(event) {
  event.preventDefault();
  setTimeout(function () {
    adWindow = window.open("ad.html", "_blank", "popup=true");
  }, 3000);
}

function closeAd() {
  if (adWindow) {
    adWindow.close();
  } else {
    alert("The ad window hasn't been opened yet!");
  }
}
