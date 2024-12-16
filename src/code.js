const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});

menuClose.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});
