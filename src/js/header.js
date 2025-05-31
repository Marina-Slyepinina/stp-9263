const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('#burger-menu');
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

openBtnEl.addEventListener("click", () => {
  burgerMenuEl.dataset.visible = "open";
});

closeBtnEl.addEventListener("click", () => {
  burgerMenuEl.dataset.visible = "close";
});

// Активна лінка під час прокрутки
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
