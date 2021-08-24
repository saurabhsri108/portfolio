import projects from '../../data/projects';
import {linkGenerator} from './helpers';

const projectContainer: HTMLDivElement | null = document.querySelector(
    '#projects .container .content',
);

clearProjects();
if (projectContainer) populateProjects(projectContainer);

/**
 * It clears the project container element
 */
function clearProjects() {
  if (projectContainer) projectContainer.innerHTML = '';
}

/**
 * It populates the project container elements with dynamic projects data
 * @param {HTMLDivElement} container
 */
function populateProjects(container: HTMLDivElement) {
  for (const project of projects) {
    const section: HTMLElement = document.createElement('section');
    section.classList.add('card', 'card-purple');

    const title: HTMLHeadingElement = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = project.title;

    const actions: HTMLDivElement = document.createElement('div');
    actions.classList.add('actions');
    actions.append(project.thumbnail);

    const tags: HTMLDivElement = document.createElement('div');
    tags.classList.add('tags');
    const spans: Array<HTMLSpanElement> = [];
    project.tags.forEach((tag) => {
      const span: HTMLSpanElement = document.createElement('span');
      span.innerHTML = tag;
      spans.push(span);
    });
    tags.append(...spans);

    const description: HTMLParagraphElement = document.createElement('p');
    description.classList.add('description');
    description.innerHTML = project.description;

    const btnActions: HTMLDivElement = document.createElement('div');
    btnActions.classList.add('btn-actions');

    const liveLink: HTMLAnchorElement = linkGenerator(project.liveLink,
        'Live Demo');

    const githubLink: HTMLAnchorElement = linkGenerator(project.githubLink,
        'GitHub Repo');

    btnActions.append(liveLink, githubLink);
    section.append(title, actions, tags, description, btnActions);
    container.append(section);
  }
}
