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
  iframe.setAttribute('height', '150px');
  iframe.setAttribute('src', src);
  iframe.setAttribute('title', title);
  iframe.setAttribute('loading', 'lazy');
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

/**
 * It returns the generated thumbnail for the youtube url
 * @param {string} link
 * @param {string} title
 * @return {HTMLImageElement} thumbnail
 */
export const generateThumbnail = (
    link: string, title: string): HTMLImageElement => {
  const videoId: string = link.split('embed/')[1];
  const thumbnailUrl: string = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  const thumbnailImage = document.createElement('img');
  thumbnailImage.classList.add('thumbnail-image');
  thumbnailImage.loading = 'lazy';
  thumbnailImage.src = thumbnailUrl;
  thumbnailImage.alt = title;
  thumbnailImage.setAttribute('width', '100%');
  thumbnailImage.setAttribute('height', '150px');
  thumbnailImage.dataset.link = link;

  return thumbnailImage;
};
