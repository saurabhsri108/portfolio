import {fadeIn} from './helpers';

const heroSections: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.hero-sections');
heroSections.forEach((heroSection) => fadeIn(heroSection, 400));
