import { projectHeader, projects, projectsLink } from "../Content/projects";
import type { ProjectDescription, PROJECT_LINK } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;

  const projectTitle = document.getElementById("project-header")!;
  const descriptions = document.querySelectorAll(".project-description");
  const projectLink = document.getElementById("project-link")!;

  projectTitle.textContent = projectHeader[language as keyof ProjectDescription];
  
  for (let i = 0; i < descriptions.length; i++) {
    const projectDescription = projects[i].description[language as keyof ProjectDescription];
    descriptions[i].textContent = projectDescription;
  }

  projectLink.textContent = projectsLink[language as keyof PROJECT_LINK];
}

document.addEventListener("langChanged", updateLanguage);