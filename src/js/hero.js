// document.addEventListener("DOMContentLoaded", () => {
//     const policy = document.getElementById("cookie-policy");
//     const acceptBtn = document.querySelector(".accept-btn");
//     const declineBtn = document.querySelector(".decline-btn");
  
//     // Показати вікно лише якщо ще не обрано
//     if (localStorage.getItem("cookiesAccepted") === null) {
//       policy.classList.remove("hidden");
//     }
  
//     acceptBtn.addEventListener("click", () => {
//       localStorage.setItem("cookiesAccepted", "true");
//       policy.classList.add("hidden");
//     });
  
//     declineBtn.addEventListener("click", () => {
//       localStorage.setItem("cookiesAccepted", "false");
//       policy.classList.add("hidden");
//     });
//   });