import { hero } from "../Content/hero";
import type { HERO } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (hero as HERO)[language as keyof HERO];

  document.querySelector("h1")!.textContent = content.h1Element;
  document.querySelector("h3")!.textContent = content.h3Element;
  document.getElementById("hero-link")!.textContent = content.aElement;
}

document.addEventListener("langChanged", updateLanguage);