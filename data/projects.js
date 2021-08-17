const iframeGenerator = (title, src) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "100%");
  iframe.setAttribute("src", src);
  iframe.setAttribute("title", title);
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", true);
  return iframe;
};

const projects = [
  {
    id: 1,
    title: "Portfolio Project",
    iframe: iframeGenerator(
      "Dummy Placeholder",
      "https://www.youtube.com/embed/2jObnoSjn38"
    ),
    tags: ["HTML", "CSS", "JavaScript"],
    description: "This project showcases my skill in everything vanilla",
    live_link: "https://vasudeveloper.com",
    github_link: "https://github.com/vasudeveloper001/neogcamp-portfolio",
  },
  {
    id: 2,
    title: "YT Erasure",
    iframe: iframeGenerator(
      "Dummy Placeholder",
      "https://www.youtube.com/embed/2jObnoSjn38"
    ),
    tags: ["Chrome Extension", "JavaScript"],
    description: "This project showcases my ability to build extensions",
    live_link:
      "https://chrome.google.com/webstore/detail/yt-erasure/jabdodobogpeidplcbdcmndaijnnedmp",
    github_link:
      "https://github.com/vasudeveloper001/yt-erasure-chrome-extension",
  },
  {
    id: 3,
    title: "StoreJS Ecommerce",
    iframe: iframeGenerator(
      "Dummy Placeholder",
      "https://www.youtube.com/embed/2jObnoSjn38"
    ),
    tags: ["MERN", "Payments", "Redux"],
    description:
      "This project showcases my ability to build a Fullstack MERN Application",
    live_link: "https://store-js.vercel.app",
    github_link: "https://github.com/vasudeveloper001/store-ibc",
  },
  {
    id: 4,
    title: "IBShortener",
    iframe: iframeGenerator(
      "Dummy Placeholder",
      "https://www.youtube.com/embed/2jObnoSjn38"
    ),
    tags: ["Next.js", "Supabase", "Chakra UI"],
    description:
      "This project showcases my skill to pick up new technologies quickly and apply them to create application",
    live_link: "https://ibshort.xyz",
    github_link: "https://github.com/vasudeveloper001/ibshorter",
  },
  {
    id: 5,
    title: "IBChat",
    iframe: iframeGenerator(
      "Dummy Placeholder",
      "https://www.youtube.com/embed/2jObnoSjn38"
    ),
    tags: ["MERN", "Socket.io"],
    description:
      "This project showcases my ability to work with socket.io to build real time chat applications",
    live_link: "https://ibchat.xyz",
    github_link: "",
  },
];

export default projects;
