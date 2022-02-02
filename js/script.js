const menu = document.querySelector(".header__menu");
const menuButton = document.querySelector(".header__m-menu");
const page = document.querySelector("html");
const theme = document.querySelectorAll(".theme-btn");
const checkLightTheme = document.getElementById("themeChoice1");
const checkDarkTheme = document.getElementById("themeChoice2");
const checkContrastTheme = document.getElementById("themeChoice3");

page.classList.remove("light-theme" || "dark-theme" || "contrast-theme");

if (checkLightTheme.checked) {
  page.classList.add("light-theme");
} else if (checkDarkTheme.checked) {
  page.classList.add("dark-theme");
} else if (checkContrastTheme.checked) {
  page.classList.add("contrast-theme");
}

theme.forEach((btn) => {
  btn.addEventListener("click", () => {
    location.reload();
  });
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});
