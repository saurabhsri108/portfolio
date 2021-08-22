import tutorials from '../../data/youtube';
import {linkGenerator} from './helpers';

const tutorialContainer: HTMLDivElement | null = document.querySelector(
    '#learntocode .container .content');

clearTutorials();
if (tutorialContainer) populateTutorials(tutorialContainer);

/**
 * It clears the innerHTML of tutorial container
 */
function clearTutorials() {
  if (tutorialContainer) tutorialContainer.innerHTML = '';
}

/**
 * It generates youtube tutorials dynamically from imported tutorials
 * @param{HTMLDivElement} container
 */
function populateTutorials(container: HTMLDivElement) {
  for (const tutorial of tutorials) {
    const section: HTMLElement = document.createElement('section');
    section.classList.add('card', 'card-purple');

    const title: HTMLHeadingElement = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = tutorial.title;

    const btnActions: HTMLDivElement = document.createElement('div');
    btnActions.classList.add('btn-actions');
    const liveLink: HTMLAnchorElement = linkGenerator(tutorial.link,
        'Watch on YouTube');

    btnActions.append(liveLink);
    section.append(title, tutorial.iframe, btnActions);
    container.append(section);
  }
}
