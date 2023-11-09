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

type HeroContent = {
  h1Element: string;
  h3Element: string;
  aElement: string;
}

export interface HERO {
  en: HeroContent;
  es: HeroContent;
}

export type ProjectDescription = {
  en: string;
  es: string;
}

export interface PROJECT {
  image: string;
  title: string;
  description: ProjectDescription;
  skills: string[],
  githubLink: string,
  netlifyLink: string
}

export interface PROJECT_LINK {
  en: string,
  es: string
}

export interface SKILL {
  icon: string;
  title: string;
  description: string;
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

export interface FOOTER {
  en: string;
  es: string;
}