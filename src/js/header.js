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
    burgerMenuEl.dataset.visible = "close";
    openBtnEl.classList.remove("hidden");
  });
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