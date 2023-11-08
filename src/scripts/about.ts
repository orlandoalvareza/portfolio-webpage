import { about } from "../Content/about";

function updateLanguage() {
  const h1El = document.querySelector("h1")!;
  const h3El = document.querySelector("h3")!;

  if (document.documentElement.lang === "en") {
    h1El.textContent = about.english.h1Element;
    h3El.textContent = about.english.h3Element;
  } else {
    h1El.textContent = about.spanish.h1Element;
    h3El.textContent = about.spanish.h3Element;
  }
}

document.addEventListener("langChanged", updateLanguage);