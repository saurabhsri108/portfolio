export const $ = (el) => document.querySelector(el);
export const $$ = (el) => document.querySelectorAll(el);
export const print = console.log;

export const fadeIn = (el, delay) => {
  setTimeout(() => {
    el.style.opacity = 1;
  }, delay);
};

// function $(selector) {
//   const _self = {
//     element:
//       document.querySelectorAll(selector).length === 1
//         ? document.querySelectorAll(selector)[0]
//         : document.querySelectorAll(selector),
//     fadeIn: (delay) => {
//       setTimeout(() => {
//         console.log(_self.element);
//         _self.element.style.opacity = 1;
//       }, delay);
//     },
//   };

//   console.log(_self.element);

//   return _self;
// }

// export default $;
