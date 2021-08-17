import blogs from "../../data/blogs.js";
const blogsContainer = document.querySelector("#blogs .container .content");

clearBlogs();
populateBlogs(blogsContainer);

function clearBlogs() {
  blogsContainer.innerHTML = "";
}

// title, slug [for link], dateAdded, coverImage, brief [description]

function populateBlogs(container) {
  for (const blog of blogs) {
    const section = document.createElement("section");
    section.classList.add("card", "card-white");

    const image = document.createElement("img");
    image.setAttribute("loading", "lazy");
    image.setAttribute("src", blog.coverImage);
    image.setAttribute("alt", blog.title);

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerHTML = blog.title;

    const info = document.createElement("p");
    info.classList.add("info");
    const dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    dateSpan.innerHTML = getPubDate(new Date(blog.dateAdded));
    const minuteSpan = document.createElement("span");
    minuteSpan.classList.add("minutes");
    const clockImage = document.createElement("img");
    clockImage.setAttribute("loading", "lazy");
    clockImage.setAttribute("src", "./assets/images/clock.svg");
    clockImage.setAttribute("alt", "clock timer");
    minuteSpan.append(clockImage);
    minuteSpan.append(` 3 min read`);
    info.append(dateSpan, minuteSpan);

    const description = document.createElement("p");
    description.classList.add("description", "truncate");
    description.innerHTML = blog.brief;

    const btnActions = document.createElement("div");
    btnActions.classList.add("btn-actions");
    const blogLink = document.createElement("a");
    blogLink.classList.add("btn", "blog-link");
    blogLink.setAttribute("href", `https://ibcoder.hashnode.dev/${blog.slug}`);
    blogLink.setAttribute("target", "_blank");
    blogLink.innerHTML = "Read More";
    btnActions.append(blogLink);

    section.append(image, title, info, description, btnActions);
    container.append(section);
  }
}

function getPubDate(date) {
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}
1;
function getMonthName(monthNumber) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[monthNumber];
}
