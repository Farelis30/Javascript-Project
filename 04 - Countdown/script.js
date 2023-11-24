let futureDate = new Date("January 1, 2024 00:00:00 GMT+00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let time = setInterval(() => {
  let now = new Date().getTime();

  var distance = futureDate - now;

  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}, 1000);
