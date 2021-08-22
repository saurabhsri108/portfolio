/**
 * It creates fade in effects for elements
 * @param {HTMLElement} el
 * @param {number} delay
 */
export const fadeIn = (el: HTMLElement, delay: number) => {
  setTimeout(() => {
    el.style.opacity = '1';
  }, delay);
};

/**
 * It generates iframes on the go
 * @param {string} title
 * @param {string} src
 * @return {HTMLIFrameElement} iframe
 */
export const iframeGenerator = (title: string, src: string) => {
  const iframe: HTMLIFrameElement = document.createElement('iframe');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('src', src);
  iframe.setAttribute('title', title);
  // iframe.setAttribute('frameborder', '0');
  iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; ' +
      'clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  );
  iframe.setAttribute('allowfullscreen', 'true');
  return iframe;
};

/**
 * It generates anchor link in the form of clickable button
 * @param {string} link
 * @param {string} text
 * @param {string[]} classList
 * @return {HTMLAnchorElement} generatedLink
 */
export const linkGenerator = (
    link: string, text: string,
    classList: string[] = []): HTMLAnchorElement => {
  const generatedLink: HTMLAnchorElement = document.createElement('a');
  generatedLink.classList.add('btn', ...classList);
  generatedLink.setAttribute('href', link);
  generatedLink.setAttribute('target', '_blank');
  generatedLink.setAttribute('rel', 'noreferrer');
  generatedLink.innerHTML = text;
  return generatedLink;
};
