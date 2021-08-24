import blogs from '../../data/blogs';
import clocksvg from '../images/clock.svg';
import {linkGenerator} from './helpers';

const blogsContainer: HTMLDivElement | null = document.querySelector(
    '#blogs .container .content');

clearBlogs();
if (blogsContainer) populateBlogs(blogsContainer);

/**
 * It clears out the div container containing blogs
 */
function clearBlogs() {
  if (blogsContainer) blogsContainer.innerHTML = '';
}

/**
 * It generates blogs dynamically from imported blogs
 * @param{HTMLDivElement} container
 */
function populateBlogs(container: HTMLDivElement) {
  for (const blog of blogs) {
    const section: HTMLElement = document.createElement('section');
    section.classList.add('card', 'card-white');

    const image: HTMLImageElement = document.createElement('img');
    image.setAttribute('loading', 'lazy');
    image.setAttribute('src', blog.coverImage);
    image.setAttribute('alt', blog.title);
    image.setAttribute('width', '360');
    image.setAttribute('height', '180');

    const title: HTMLHeadingElement = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = blog.title;

    const info: HTMLParagraphElement = document.createElement('p');
    info.classList.add('info');

    const dateSpan: HTMLSpanElement = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.innerHTML = getPubDate(new Date(blog.dateAdded));

    const minuteSpan: HTMLSpanElement = document.createElement('span');
    minuteSpan.classList.add('minutes');
    const clockImage: HTMLImageElement = document.createElement('img');
    clockImage.setAttribute('loading', 'lazy');
    clockImage.setAttribute('src', clocksvg);
    clockImage.setAttribute('alt', 'clock timer');
    minuteSpan.append(clockImage);
    minuteSpan.append(` 3 min read`);
    info.append(dateSpan, minuteSpan);

    const description: HTMLParagraphElement = document.createElement('p');
    description.classList.add('description', 'truncate');
    description.innerHTML = blog.brief;

    const btnActions: HTMLDivElement = document.createElement('div');
    btnActions.classList.add('btn-actions');
    const blogLink: HTMLAnchorElement = linkGenerator(
        `https://ibcoder.hashnode.dev/${blog.slug}`, 'Read Full Blog',
        ['blog-link']);

    btnActions.append(blogLink);

    section.append(image, title, info, description, btnActions);
    container.append(section);
  }
}

/**
 * It generates the date output in "Aug 1, 2021" format
 * @param {Date} date
 * @return {string} dateString
 */
function getPubDate(date: Date) {
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

/**
 * It returns the month name from array
 * @param{number} monthNumber
 * @return {string} monthName
 */
function getMonthName(monthNumber: number) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return months[monthNumber];
}
