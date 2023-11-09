import { skillHeader, skills } from "../Content/skills";
import type { SKILL, SkillContent } from "../Types/types-interfaces";

function updateLanguage() {
  const language = document.documentElement.lang;

  const skillsTitle = document.getElementById("skills-header")!;
  const skillsTitles = document.querySelectorAll(".skill-infomation__title");
  const skillsDescriptions = document.querySelectorAll(".skill-infomation__description");

  skillsTitle.textContent = skillHeader[language as keyof SkillContent];

  for (let i = 0; i < skillsTitles.length; i++) {
    const skillsTitleValues = skills[i].title[language as keyof SkillContent];
    skillsTitles[i].textContent = skillsTitleValues;
  }

  for (let i = 0; i < skillsDescriptions.length; i++) {
    const skillsDescriptionValues = skills[i].description[language as keyof SkillContent];
    skillsDescriptions[i].textContent = skillsDescriptionValues;
  }
}

document.addEventListener("langChanged", updateLanguage);