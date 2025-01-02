const projects = [
  {
    day: 1,
    title: "Simple counter App",
    description:
      "A simple counter app built with React, demonstrating my first use of the useState() hook for managing state in a functional component. It allows users to increment or decrement the count.",
    projectLink: "https://s4dzs3.csb.app/",
    codeLink:
      "https://codesandbox.io/p/sandbox/counter-app-s4dzs3?file=%2Fsrc%2Findex.js&workspaceId=ws_v5yDKkVuiyaKEjHf863pL",
  },
  {
    day: 2,
    title: "LiveClock",
    description:
      "Real-time clock that updates every second to show the current time. No need to refresh, just click to get the latest time instantly.",
    projectLink: "https://ls9pzg.csb.app/",
    codeLink:
      "https://codesandbox.io/p/sandbox/liveclock-ls9pzg?file=%2Fsrc%2Fcomponents%2FApp.jsx%3A5%2C25",
  },
  {
    day: 3,
    title: "TechTrends 2025",
    description:
      "A React app that showcases the latest technology trends to watch in 2024, with an interactive list where users can click on each trend to view detailed information. This project uses React, the useState hook, JSX for rendering components, and CSS for styling.",
    projectLink: "https://8tdvwl.csb.app/",
    codeLink:
      "https://codesandbox.io/p/sandbox/techtrends-2025-8tdvwl?file=%2Fpublic%2Fstyles.css%3A9%2C15",
  },
  {
    day: 4,
    title: "To-do List App",
    description:
      "A simple React app that allows users to add, view, and delete tasks from their to-do list. The app includes the ability to mark tasks with a checkbox and shows the date when each task was added. This project is built using React, useState hook, and CSS for styling.",
    projectLink: "https://z5lf4f.csb.app/",
    codeLink: "https://codesandbox.io/p/sandbox/confident-hugle-z5lf4f",
  },
  {
    day: 5,
    title: "MovieLand",
    description:
      "A static React app that allows users to search movies with there name, and show the lists of  movies related to the search. This project is built using React, OMDB API, useState and useEffect hook, and CSS for styling.",
    projectLink: "https://c3snnt.csb.app/",
    codeLink: "https://codesandbox.io/p/sandbox/c3snnt",
  },
];

const projectsContainer = document.getElementById("projects");

// Render Projects Dynamically
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
      <h1>Day ${project.day} task</h1>
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="links">
          <a href="${project.projectLink}" target="_blank" class="btn">View Project</a>
          <a href="${project.codeLink}" target="_blank" class="btn secondary">View Code</a>
        </div>
      `;

  projectsContainer.appendChild(projectCard);
});
