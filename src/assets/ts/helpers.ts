export const fadeIn = (el: HTMLElement, delay: number) => {
  setTimeout(() => {
    el.style.opacity = '1';
  }, delay);
};
