const jokeEl = document.getElementById("joke");

const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", () => generateJoke());

generateJoke();

// USING ASYNC/AWAIT

async function generateJoke() {
  const config = {
    headers: {
      Accept: "Application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeEl.textContent = data.joke;
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "Application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config).then((response) =>
//     response.json().then((data) => (jokeEl.textContent = data.joke))
//   );
// }
