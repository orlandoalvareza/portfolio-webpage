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

export interface LanguageContent {
  en: string;
  es: string;
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