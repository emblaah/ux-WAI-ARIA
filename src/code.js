// 3.
const menuOpen = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const menuContent = document.getElementById("menuContent");

menuOpen.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});

menuClose.addEventListener("click", () => {
  menuContent.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});

// 1.

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("accessibleModal");
let lastFocusedElement;

function openModal() {
  lastFocusedElement = document.activeElement;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn.focus();
  document.addEventListener("keydown", handleModalKeyDown);
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  lastFocusedElement.focus();
  document.removeEventListener("keydown", handleModalKeyDown);
}

function handleModalKeyDown(event) {
  if (event.key === "Escape") closeModal();
}

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

const dialog = document.getElementById("accessibleDialog");
const openDialog = document.getElementById("openDialogBtn");
const closeDialog = document.getElementById("closeDialogBtn");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});
