import { $, $$, fadeIn } from "./helpers.js";

/** Fade In effects */
const logo = $(".logo-link");
const hamburgerSpans = $$(".show-hamburger span");
const screens = $("nav.screens");
fadeIn(logo, 400);
fadeIn(screens, 400);
hamburgerSpans.forEach((span) => fadeIn(span, 400));

/** Mobile Hamburger Menus */
const hamburger = $(".show-hamburger");
const mobilesMenu = $(".mobiles");

hamburger.addEventListener("click", () => {
  // const ctaPicture = $(".cta-picture");
  // console.log(ctaPicture.style.zIndex);
  mobilesMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
  // if (ctaPicture.style.zIndex === -1) {
  //   ctaPicture.style.zIndex = "auto";
  // } else {
  //   ctaPicture.style.zIndex = -1;
  // }
});

/** Menu Links */
let [activeLinkMobile, activeLinkScreen] = $$(".menu-link.active");
const allMenuLinks = $$(".menu-link");

allMenuLinks.forEach((currentLink) => {
  currentLink.addEventListener("click", changeActiveLink);
});

function changeActiveLink(e) {
  activeLinkMobile.classList.remove("active");
  activeLinkScreen.classList.remove("active");
  activeLinkMobile = this;
  activeLinkScreen = this;
  activeLinkMobile.classList.add("active");
  activeLinkScreen.classList.add("active");
  mobilesMenu.classList.toggle("open");
  hamburger.classList.toggle("open");
}
