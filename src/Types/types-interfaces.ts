interface AboutContent {
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

export interface PROJECT {
  image: string;
  title: string;
  description: string;
  skills: string[],
  githubLink: string,
  netlifyLink: string
}

export interface SKILL {
  icon: string;
  title: string;
  description: string;
}