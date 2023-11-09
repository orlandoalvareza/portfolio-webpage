import { footer } from "../Content/footer";
import type { FOOTER } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;
  const content = (footer as FOOTER)[language as keyof FOOTER];

  document.getElementById("footer-span")!.textContent = content;
}

document.addEventListener("langChanged", updateLanguage);