import { header } from "../Content/header";
import type { HEADER } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (header as HEADER)[language as keyof HEADER];
  
  const langSelected = document.getElementById("language-span")!;
  const homeLink = document.getElementById("navigation__home-link")!;
  const aboutLink = document.getElementById("navigation__about-link")!;

  langSelected.textContent = content.language;
  homeLink.textContent = content.homeLink;
  aboutLink.textContent = content.aboutLink;
}

document.addEventListener("langChanged", updateLanguage);