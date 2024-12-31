function filterProjects(category) {
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}
