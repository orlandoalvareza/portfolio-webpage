import { contact } from "../Content/contact";
import type { CONTACT } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (contact as CONTACT)[language as keyof CONTACT];

  document.getElementById("contact-title")!.textContent = content.title;
  document.getElementById("contact-text")!.textContent = content.text;
  document.getElementById("contact-link")!.textContent = content.link;
}

document.addEventListener("langChanged", updateLanguage);