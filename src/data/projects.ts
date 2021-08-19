/**
 * It generates iframes on the go
 * @param {string} title
 * @param {string} src
 * @return {HTMLIFrameElement} iframe
 */
const iframeGenerator = (title: string, src: string) => {
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

interface IProjects {
  id: number,
  title: string,
  iframe: HTMLIFrameElement,
  tags: string[],
  description: string,
  liveLink: string,
  githubLink: string
}

const projects: IProjects[] = [
  {
    id: 1,
    title: 'Portfolio Project',
    iframe: iframeGenerator(
        'Dummy Placeholder',
        'https://www.youtube.com/embed/2jObnoSjn38',
    ),
    tags: ['Webpack', 'APIs', 'TypeScript'],
    description: 'This project showcases my skill of working with basics to' +
        ' extreme',
    liveLink: 'https://vasudeveloper.com',
    githubLink: 'https://github.com/vasudeveloper001/neogcamp-portfolio',
  },
  {
    id: 2,
    title: 'YT Erasure',
    iframe: iframeGenerator(
        'Dummy Placeholder',
        'https://www.youtube.com/embed/2jObnoSjn38',
    ),
    tags: ['Chrome Extension', 'JavaScript'],
    description: 'This project showcases my ability to build extensions',
    liveLink:
        'https://chrome.google.com/webstore/detail/yt-erasure/jabdodobogpeidplcbdcmndaijnnedmp',
    githubLink:
        'https://github.com/vasudeveloper001/yt-erasure-chrome-extension',
  },
  {
    id: 3,
    title: 'StoreJS Ecommerce',
    iframe: iframeGenerator(
        'Dummy Placeholder',
        'https://www.youtube.com/embed/2jObnoSjn38',
    ),
    tags: ['MERN', 'Payments', 'Redux'],
    description:
        'This project showcases my ability to build a Fullstack MERN ' +
        'Application',
    liveLink: 'https://store-js.vercel.app',
    githubLink: 'https://github.com/vasudeveloper001/store-ibc',
  },
  {
    id: 4,
    title: 'IBShortener',
    iframe: iframeGenerator(
        'Dummy Placeholder',
        'https://www.youtube.com/embed/2jObnoSjn38',
    ),
    tags: ['Next.ts', 'Supabase', 'Chakra UI'],
    description:
        'This project showcases my skill to pick up new technologies quickly ' +
        'and apply them to create application',
    liveLink: 'https://ibshort.xyz',
    githubLink: 'https://github.com/vasudeveloper001/ibshorter',
  },
  {
    id: 5,
    title: 'IBChat',
    iframe: iframeGenerator(
        'Dummy Placeholder',
        'https://www.youtube.com/embed/2jObnoSjn38',
    ),
    tags: ['MERN', 'Socket.io'],
    description:
        'This project showcases my ability to work with socket.io to build ' +
        'real time chat applications',
    liveLink: 'https://ibchat.xyz',
    githubLink: '',
  },
];

export default projects;
