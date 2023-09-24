const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

// const fixNav = () => {
//   console.log(window.scrollY);
// };

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else nav.classList.remove("active");
  // console.log(window.scrollY, nav.offsetHeight);
}
