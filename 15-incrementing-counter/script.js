const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    // console.log(target);
    const num = +counter.innerText;
    // console.log(num);

    const increment = target / 200;
    // console.log(increment);

    if (num < target) {
      counter.innerText = `${Math.ceil(num + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});
