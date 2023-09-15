const colorEl = document.getElementById("color");
const increase = document.getElementById("increase");
const sizeEl = document.getElementById("size");
const decrease = document.getElementById("decrease");
const clear = document.getElementById("clear");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x, y;
let isPressed = false;
let size = 20;
let color;

increase.addEventListener("click", () => {
  if (sizeEl.innerText < 20) {
    // console.log();
    size = sizeEl.innerText++;
  }
});

decrease.addEventListener("click", () => {
  if (sizeEl.innerText > 1) {
    size = sizeEl.innerText--;
  }
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

console.log(size);

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
  console.log(isPressed, x, y);
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
  console.log(isPressed, x, y);
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    console.log(x2, y2);

    drawCircle(x2, y2);

    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

// colorEl.addEventListener("input", () => {
//   console.log(colorEl.value);
//   drawCircle(100, 100);
//   drawLine(300, 300, 200, 500);
// });

// function draw() {
//   if (canvas.getContext) {

//     ctx.fillStyle = "rgb(200, 0, 0)";
//     ctx.fillRect(120, 120, 100, 100);
//   }
// }
// draw();

function drawCircle(x, y) {
  color = colorEl.value;

  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  color = colorEl.value;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// drawCircle(100, 100);

// drawLine(300, 300, 200, 500);
