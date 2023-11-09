type AboutContent = {
  spanElement: string;
  h1Element: string;
  h3Element: string;
  aElement: string;
  pElement: string[]
}
export interface ABOUT {
  en: AboutContent;
  es: AboutContent;
}

type ContactContent = {
  title: string;
  text: string;
  link: string;
}

export interface CONTACT {
  en: ContactContent;
  es: ContactContent;
}

type HeaderContent = {
  language: string
  homeLink: string;
  aboutLink: string
}

export interface HEADER {
  en: HeaderContent;
  es: HeaderContent;
}

type HeroContent = {
  h1Element: string;
  h3Element: string;
  aElement: string;
}

export interface HERO {
  en: HeroContent;
  es: HeroContent;
}

export interface LanguageContent {
  en: string;
  es: string;
}

export interface PROJECT {
  image: string;
  title: string;
  description: LanguageContent;
  skills: string[],
  githubLink: string,
  netlifyLink: string
}

export interface SKILL {
  icon: string;
  title: LanguageContent;
  description: LanguageContent;
}