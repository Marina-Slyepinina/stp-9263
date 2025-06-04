const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtns = document.querySelectorAll('[data-action="close"]');
const burgerMenuEl = document.querySelector('#burger-menu');
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

openBtnEl.addEventListener("click", () => {
  burgerMenuEl.dataset.visible = "open";
  openBtnEl.classList.add("hidden");
});

closeBtns.forEach(btn =>
  btn.addEventListener("click", () => {
    burgerMenuEl.dataset.visible = "close";
    openBtnEl.classList.remove("hidden");
  })
);

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    burgerMenuEl.dataset.visible = "close";
    openBtnEl.classList.remove("hidden");
  });
});