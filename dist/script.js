const hamburgers = document.querySelectorAll(".hamburger");
const navMobile = document.querySelector(".mobile-nav");
hamburgers.forEach((hamburger) =>
  hamburger.addEventListener("click", hamFunction)
);

function hamFunction(e) {
  e.preventDefault();

  navMobile.classList.toggle("active");
}
