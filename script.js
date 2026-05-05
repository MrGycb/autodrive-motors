const menuButton = document.querySelector(".menu-toggle");
const navPanel = document.querySelector("[data-nav-panel]");
const navLinks = navPanel?.querySelectorAll("a") ?? [];
const form = document.querySelector(".lead-form");
const formNote = document.querySelector("[data-form-note]");

function setMenuState(isOpen) {
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  navPanel?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 980) {
    setMenuState(false);
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (formNote) {
    formNote.textContent = "Заявка отправлена. Консультант свяжется с вами в ближайшее время.";
    formNote.classList.add("is-success");
  }

  form.reset();
});
