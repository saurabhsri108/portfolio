import projects from "../../data/projects.js";

const projectContainer = document.querySelector(
  "#projects .container .content"
);

clearProjects();
populateProjects(projectContainer);

function clearProjects() {
  projectContainer.innerHTML = "";
}

function populateProjects(container) {
  for (const project of projects) {
    const section = document.createElement("section");
    section.classList.add("card", "card-purple");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML = project.title;

    const actions = document.createElement("div");
    actions.classList.add("actions");
    actions.append(project.iframe);

    const tags = document.createElement("div");
    tags.classList.add("tags");
    let spans = [];
    project.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.innerHTML = tag;
      spans.push(span);
    });
    tags.append(...spans);

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerHTML = project.description;

    const btnActions = document.createElement("div");
    btnActions.classList.add("btn-actions");

    const liveLink = document.createElement("a");
    liveLink.classList.add("btn");
    liveLink.setAttribute("href", project.live_link);
    liveLink.setAttribute("target", "_blank");
    liveLink.innerHTML = "Live Demo";

    const githubLink = document.createElement("a");
    githubLink.classList.add("btn");
    githubLink.setAttribute("href", project.github_link);
    githubLink.setAttribute("target", "_blank");
    githubLink.innerHTML = "GitHub Repo";

    btnActions.append(liveLink, githubLink);
    section.append(title, actions, tags, description, btnActions);
    container.append(section);
  }
}
