const menu = document.querySelector(".header__menu");
const menuButton = document.querySelector(".header__m-menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
