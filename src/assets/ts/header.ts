import {fadeIn} from './helpers';

headerFadeIns();
mobileMenusShowToggleAnimate();
menuLinksActiveStateToggle();

/**
 * It create fadeIn effects for header elements
 */
function headerFadeIns() {
  const logo: HTMLAnchorElement | null = document.querySelector('.logo-link');
  const hamburgerSpans: NodeListOf<HTMLSpanElement> | null =
      document.querySelectorAll(
          '.show-hamburger span');
  const screens: HTMLElement | null = document.querySelector('nav.screens');

  if (logo && hamburgerSpans && screens) {
    fadeIn(logo, 400);
    fadeIn(screens, 400);
    hamburgerSpans.forEach((span: HTMLSpanElement) => fadeIn(span, 400));
  }
}

/**
 * It creates animated show and hide feature for the mobile navigation
 */
function mobileMenusShowToggleAnimate() {
  const hamburger: HTMLButtonElement | null = document.querySelector(
      '.show-hamburger');
  const mobilesMenu: HTMLElement | null = document.querySelector('.mobiles');

  if (hamburger && mobilesMenu) {
    hamburger.addEventListener('click', () => {
      mobilesMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
}

/**
 * It creates hover animate effect for menus as well as
 * active state persistence effect
 */
function menuLinksActiveStateToggle() {
  const allMenuLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
      '.menu-link');

  allMenuLinks.forEach((currentLink) => {
    currentLink.addEventListener('click', changeActiveLink);
  });
}

/**
 * It changes the active link state
 * @param {any} this
 * @param {Event} e
 */
function changeActiveLink(this: any, e: Event) {
  let [activeLinkMobile, activeLinkScreen]: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(
          '.menu-link.active');
  activeLinkMobile.classList.remove('active');
  activeLinkScreen.classList.remove('active');
  // eslint-disable-next-line no-invalid-this
  activeLinkMobile = this;
  // eslint-disable-next-line no-invalid-this
  activeLinkScreen = this;
  activeLinkMobile.classList.add('active');
  activeLinkScreen.classList.add('active');

  mobileMenusShowToggleAnimate();
}
