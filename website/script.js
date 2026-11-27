const registerButton = document.querySelector("#registerBtn");
const message = document.querySelector("#message");

registerButton.addEventListener("click", () => {
  message.textContent =
    "Thanks for your interest! Registration will open soon.";
});