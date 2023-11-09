import { about } from "../Content/about";
import type { ABOUT } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (about as ABOUT)[language as keyof ABOUT];

  document.getElementById("about-span")!.textContent = content.spanElement;
  document.querySelector("h1")!.textContent = content.h1Element;
  document.querySelector("h3")!.textContent = content.h3Element;
  document.getElementById("projects-link")!.textContent = content.aElement;

  const paragraphs = document.querySelectorAll(".about-paragraph");

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = content.pElement[i];
  }
}

document.addEventListener("langChanged", updateLanguage);