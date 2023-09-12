const btn = document.querySelector(".toggle");
const html = document.documentElement;

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

// console.log(html);

const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

const weeks = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

btn.addEventListener("click", (e) => {
  console.log(e);
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    btn.innerText = "Light Mode";
  } else btn.innerText = "Dark Mode";
});

function setTime() {
  const time = new Date();
  // console.log(time);
  const today = time.getDate();
  // console.log(today);
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  // console.log(hoursForClock);
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  // console.log(month, day, hours, minute, seconds, hoursForClock);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerText = `${hoursForClock}:${
    minute < 10 ? `0${minute}` : minute
  } ${amPm}`;
  dateEl.innerHTML = `${weeks[day]}, ${months[month]} <span class="circle">${today}</span>`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setTime();

setInterval(setTime, 1000);
