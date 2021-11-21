const nav = document.querySelector(".primary-navigation"),
  menuBtn = document.querySelector(".mobile-nav-toggle");

menuBtn.addEventListener("click", openMenu);

function openMenu() {
  const NavVisible = nav.getAttribute("data-visibility");

  if (NavVisible === "false") {
    nav.setAttribute("data-visibility", true);
    menuBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visibility", false);
    menuBtn.setAttribute("aria-expanded", false);
  }
}
