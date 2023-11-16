const primaryNav = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const buttonClose = document.getElementById("button-close");
const buttonOpen = document.getElementById("button-open");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    buttonClose.setAttribute("data-close", false);
    buttonOpen.setAttribute("data-open", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    buttonClose.setAttribute("data-close", true);
    buttonOpen.setAttribute("data-open", false);
  }
});