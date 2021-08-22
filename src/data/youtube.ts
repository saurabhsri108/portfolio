import {iframeGenerator} from '../assets/ts/helpers';

interface ITutorials {
  title: string,
  iframe: HTMLIFrameElement,
  link: string
}

const tutorials: ITutorials[] = [
  {
    title: 'freeCodeCamp - Build a Technical Documentation Page - Live ' +
        'Stream - Part 1',
    iframe: iframeGenerator(
        'freeCodeCamp - Build a Technical Documentation Page - Live ' +
        'Stream - Part 1',
        'https://www.youtube.com/embed/7uNWT9rzm-o',
    ),
    link: 'https://www.youtube.com/embed/7uNWT9rzm-o',
  },
  {
    title: 'neogCamp Projects - Building them one by one',
    iframe: iframeGenerator(
        'neogCamp Projects - Building them one by one',
        'https://www.youtube.com/embed/4Dy-kmnpjeg',
    ),
    link: 'https://www.youtube.com/embed/4Dy-kmnpjeg',
  },
  {
    title: 'freeCodeCamp Survey Form Clone | Responsive HTML & CSS3 Tutorial ' +
        '| Flexbox',
    iframe: iframeGenerator(
        'freeCodeCamp Survey Form Clone | Responsive HTML & CSS3 Tutorial' +
        ' | Flexbox',
        'https://www.youtube.com/embed/p4LypMpJQzs',
    ),
    link: 'https://www.youtube.com/embed/p4LypMpJQzs',
  },
];

export default tutorials;
