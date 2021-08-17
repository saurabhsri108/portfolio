import { $, $$, print, fadeIn } from "./helpers.js";

const heroSections = $$(".hero-sections");
heroSections.forEach((heroSection) => fadeIn(heroSection, 400));
