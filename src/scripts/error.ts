import { error } from "../Content/error";
import type { BASIC_CONTENT as ERROR } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (error as ERROR)[language as keyof ERROR];

  document.querySelector(".error-title")!.textContent = content.title;
  document.querySelector(".error-description")!.textContent = content.text;
  document.querySelector(".error-link")!.textContent = content.link;
}

document.addEventListener("langChanged", updateLanguage);