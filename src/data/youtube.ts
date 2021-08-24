import {generateThumbnail} from '../assets/ts/helpers';

interface ITutorials {
  title: string,
  thumbnail: HTMLImageElement,
  link: string
}

const tutorials: ITutorials[] = [
  {
    title: 'freeCodeCamp - Build a Technical Documentation Page - Live ' +
        'Stream - Part 1',
    thumbnail: generateThumbnail('https://www.youtube.com/embed/7uNWT9rzm-o',
        'freeCodeCamp - Build a Technical Documentation Page - Live ' +
        'Stream - Part 1',
    ),
    link: 'https://www.youtube.com/embed/7uNWT9rzm-o',
  },
  {
    title: 'neogCamp Projects - Building them one by one',
    thumbnail: generateThumbnail(
        'https://www.youtube.com/embed/4Dy-kmnpjeg',
        'neogCamp Projects - Building them one by one',
    ),
    link: 'https://www.youtube.com/embed/4Dy-kmnpjeg',
  },
  {
    title: 'freeCodeCamp Survey Form Clone | Responsive HTML & CSS3 Tutorial ' +
        '| Flexbox',
    thumbnail: generateThumbnail(
        'https://www.youtube.com/embed/p4LypMpJQzs',
        'freeCodeCamp Survey Form Clone | Responsive HTML & CSS3 Tutorial' +
        ' | Flexbox'),
    link: 'https://www.youtube.com/embed/p4LypMpJQzs',
  },
];

export default tutorials;
