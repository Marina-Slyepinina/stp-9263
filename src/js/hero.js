document.addEventListener("DOMContentLoaded", () => {
  const policy = document.getElementById("cookie-policy");
  const acceptBtn = document.querySelector(".accept-btn");
  const declineBtn = document.querySelector(".decline-btn");

  if (localStorage.getItem("cookiesAccepted") === null) {
    policy.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  }

  const handleChoice = (accepted) => {
    localStorage.setItem("cookiesAccepted", accepted ? "true" : "false");
    policy.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  };

  acceptBtn.addEventListener("click", () => handleChoice(true));
  declineBtn.addEventListener("click", () => handleChoice(false));
});
