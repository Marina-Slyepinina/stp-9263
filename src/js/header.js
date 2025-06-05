const openBtnEl = document.querySelector('[data-action="open"]'); 
const closeBtns = document.querySelectorAll('[data-action="close"]');
const burgerMenuEl = document.querySelector('#burger-menu');
const burgerItems = document.querySelectorAll(".burger-item"); // зміна тут

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

// Клік по всьому burger-item
burgerItems.forEach(item => {
  item.addEventListener("click", () => {
    const link = item.querySelector(".nav-link");
    if (link) {
      const allLinks = document.querySelectorAll(".nav-link");
      allLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      burgerMenuEl.dataset.visible = "close";
      openBtnEl.classList.remove("hidden");

      // Переходимо по якорю
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  });
});
