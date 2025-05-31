// const openBtnEl = document.querySelector('[data-action="open"]');
// const closeBtnEl = document.querySelector('[data-action="close"]');
// const burgerMenuEl = document.querySelector('[data-visible]');

// openBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'open';
// });

// closeBtnEl.addEventListener('click', e => {
//   burgerMenuEl.dataset.visible = 'close';
// });




document.addEventListener("DOMContentLoaded", () => {
  const openBtnEl = document.querySelector('[data-action="open"]');
  const closeBtnEl = document.querySelector('[data-action="close"]');
  const burgerMenuEl = document.querySelector('[data-visible]');

  openBtnEl.addEventListener("click", () => {
    burgerMenuEl.dataset.visible = "open";
  });

  closeBtnEl.addEventListener("click", () => {
    burgerMenuEl.dataset.visible = "close";
  });
});
