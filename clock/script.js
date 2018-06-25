const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

let sCounter = 0;
let mCounter = 0;
let hCounter = 0;

function setDate() {
  const now = new Date();

  //   SECONDS
  const seconds = now.getSeconds();
  const digiSec = seconds;
  document.querySelector(".second").innerHTML = digiSec;
  const secondsDegrees = ((seconds + sCounter) / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  //   MINUTES
  const minutes = now.getMinutes();
  const digiMin = minutes;
  document.querySelector(".minute").innerHTML = digiMin;
  const minutesDegrees = ((minutes + mCounter) / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //   HOURS
  const hours = now.getHours();
  const digiHr = hours;
  document.querySelector(".hour").innerHTML = digiHr;
  const hoursDegrees = ((hours + hCounter) / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds == 59) sCounter = sCounter + 60;
  if (minutes == 59 && seconds == 59) mCounter = mCounter + 60;
  if (hours == 11 && minutes == 59 && seconds == 59) hCounter = hCounter + 12;
}

setInterval(setDate, 1000);
