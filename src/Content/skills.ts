import type { SKILL, SkillContent } from "../Types/types-interfaces";

export const skillHeader: SkillContent = {
  en: 'Skills',
  es: 'Habilidades'
}

export const skills: SKILL[] = [
  {
    icon: "fa-solid fa-code",
    title: {
      en: 'Technology',
      es: 'Tecnología'
    },
    description: {
      en: 'Constantly adapting to the ever-evolving tech landscape, I stay up-to-date with the latest tools and frameworks, ensuring your projects are powered by cutting-edge technology.',
      es: 'Adaptándome constantemente al panorama tecnológico en constante evolución, me mantengo actualizado con las últimas herramientas y marcos, asegurando que sus proyectos estén impulsados por tecnología de vanguardia.'
    }
  },
  {
    icon: 'fa-solid fa-font-awesome',
    title: {
      en: 'Problem Solving',
      es: 'Resolución de problemas'
    },
    description: {
      en: 'I tackle challenges creatively and find practical solutions, ensuring your projects run smoothly and efficiently.',
      es: 'Afronto los desafíos de manera creativa y encuentro soluciones prácticas, asegurando que sus proyectos se ejecuten sin problemas y de manera eficiente.'
    }
  },
  {
    icon: 'fa-solid fa-paintbrush',
    title: {
      en: 'Design & Development',
      es: 'Diseño y Desarrollo'
    },
    description: {
      en: 'Bridging the creative and technical realms, I excel in both design and development. From pixel-perfect interfaces to functional code, I bring your vision to life.',
      es: 'Al unir los ámbitos creativo y técnico, me destaco tanto en diseño como en desarrollo. Desde interfaces con píxeles perfectos hasta código funcional, hago realidad tu visión.'
    } 
  },
  {
    icon: 'fa-solid fa-tablet',
    title: {
      en: 'Always Responsive',
      es: 'Siempre Adaptativo'
    },
    description: {
      en: 'Every design I create and code I write is crafted to be responsive. Your web content will look and function flawlessly on all devices, large or small.',
      es: 'Cada diseño que creo y código que escribo está diseñado para ser adaptatable. Su contenido web se verá y funcionará perfectamente en todos los dispositivos, grandes o pequeños.'
    } 
  }
]