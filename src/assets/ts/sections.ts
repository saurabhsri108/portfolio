import {fadeIn, iframeGenerator} from './helpers';

const ctaProfilePic: HTMLImageElement | null = document.querySelector(
    '#cta-profile-pic');
if (ctaProfilePic) {
  if (window.innerWidth < 768) {
    ctaProfilePic.src = `https://ik.imagekit.io/saudev001/permanent-saves/profile-pic.jpg?tr=w-256,h-256`;
  } else {
    ctaProfilePic.src = `https://ik.imagekit.io/saudev001/permanent-saves/profile-pic.jpg?tr=w-560,h-560`;
  }
}

const heroSections: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.hero-sections');
heroSections.forEach((heroSection) => fadeIn(heroSection, 400));

setTimeout(() => {
  const thumbnails: NodeListOf<HTMLElement> = document.querySelectorAll(
      '.thumbnail-image');

  // console.log(thumbnails);

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseover',
        function(e: any) {
          const iframeYouTube: HTMLIFrameElement =
              iframeGenerator(e.target.alt, e.target.dataset.link);
          e.target.parentNode.appendChild(iframeYouTube);
          e.target.parentNode.removeChild(e.target.parentNode.firstChild);
        });
  });
}, 0);

const scrollBtn: HTMLButtonElement | null = document.querySelector(
    '.btn.back-to-top');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}
