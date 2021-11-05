import {generateThumbnail} from '../assets/ts/helpers';

interface IProjects {
  id: number;
  title: string;
  thumbnail: HTMLImageElement;
  tags: string[];
  description: string;
  liveLink: string;
  githubLink: string;
}

const projects: IProjects[] = [
  {
    id: 1,
    title: 'Portfolio Project',
    thumbnail: generateThumbnail(
        '',
        'Portfolio Project',
    ),
    tags: ['Webpack', 'APIs', 'TypeScript'],
    description:
      'This project showcases my skill of working with basics to' + ' extreme',
    liveLink: 'https://vasudeveloper.com',
    githubLink: 'https://github.com/vasudeveloper001/portfolio',
  },
  {
    id: 2,
    title: 'YT Erasure',
    thumbnail: generateThumbnail(
        '',
        'YT Erasure',
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
    thumbnail: generateThumbnail(
        '',
        'StoreJS Ecommerce',
    ),
    tags: ['MERN', 'Payments', 'Redux'],
    description:
      'This project showcases my ability to build a Fullstack MERN ' +
      'Application',
    liveLink: 'https://store-js.vercel.app',
    githubLink: 'https://github.com/vasudeveloper001/store-ibc',
  },
  // {
  //   id: 4,
  //   title: 'IBShortener',
  //   thumbnail: generateThumbnail(
  //       '',
  //       'IBShortener',
  //   ),
  //   tags: ['Next.ts', 'Supabase', 'Chakra UI'],
  //   description:
  //     'This project showcases my skill to pick up new technologies quickly' +
  //     'and apply them to create application',
  //   liveLink: 'https://ibshort.xyz',
  //   githubLink: 'https://github.com/vasudeveloper001/ibshorter',
  // },
  // {
  //   id: 5,
  //   title: 'IBChat',
  //   thumbnail: generateThumbnail(
  //       '',
  //       'IBChat',
  //   ),
  //   tags: ['MERN', 'Socket.io'],
  //   description:
  //     'This project showcases my ability to work with socket.io to build ' +
  //     'real time chat applications',
  //   liveLink: 'https://ibchat.xyz',
  //   githubLink: 'https://github.com/vasudeveloper001/ibshorter',
  // },
];

export default projects;
