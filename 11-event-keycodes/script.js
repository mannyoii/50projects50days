const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  // console.log(e);
  // console.log(e.key, e.keyCode, e.code);
  insert.innerHTML = `
<div class="key">
${e.key === " " ? (e.key = "Space") : e.key}
<small>event.key</small></div>
<div class="key">${e.keyCode}<small>event.keyCode</small></div>
<div class="key">${e.code}<small>event.code</small></div>
`;
});
