import type { PROJECT, ProjectDescription } from "../Types/types-interfaces";

export const projectHeader: ProjectDescription = {
  en: 'Projects',
  es: 'Proyectos'
}

export const projects: PROJECT[] = [
  {
    image: '/touchbase.jpg',
    title: 'TouchBase',
    description: {
      en: 'Touchbase is a comprehensive contact management application that empowers you to efficiently organize, categorize, and access your contacts. With a user-friendly interface and detailed contact profiles, Touchbase simplifies the process of managing your network, whether for professional networking or personal connections.',
      es: 'Touchbase es una aplicación integral de administración de contactos que le permite organizar, categorizar y acceder a sus contactos de manera eficiente. Con una interfaz fácil de usar y perfiles de contacto detallados, Touchbase simplifica el proceso de administración de su red, ya sea para redes profesionales o conexiones personales.',
    },  
    skills: ['React', 'JavaScript', 'Firebase'],
    githubLink: 'https://github.com/orlandoalvareza/react-contacts-app',
    netlifyLink: 'https://touchbase-app.netlify.app/',
  },
  {
    image: '/calendar.jpg',
    title: 'Calendar',
    description: {
      en: "A calendar app is a powerful tool that helps you organize your time, events, and appointments efficiently. Whether you're coordinating your work schedule, planning personal events, or staying on top of important dates, a calendar app provides a convenient and effective way to manage your time and stay organized",
      es: 'Un calendario es una herramienta poderosa que te ayuda a organizar tu tiempo, eventos y citas de manera eficiente. Ya sea que esté coordinando su horario de trabajo, planificando eventos personales o manteniéndose al tanto de fechas importantes, una aplicación de calendario proporciona una manera conveniente y efectiva de administrar su tiempo y mantenerse organizado.'
    },  
    skills: ['React', 'JavaScript'],
    githubLink: 'https://github.com/orlandoalvareza/react-calendar-app', 
    netlifyLink: 'https://reactjs-app-calendar.netlify.app/',
  },
  {
    image: '/randomqm.jpg',
    title: 'Random Quote Machine',
    description: {
      en: "A random quote machine app provides you with a diverse collection of quotes from various sources. With a simple click, you can access a new, thought-provoking quote to uplift your spirits or offer fresh perspectives on life. It's a quick and easy way to inject inspiration into your daily routine, making it perfect for a dose of motivation or a moment of reflection.",
      es: 'Una aplicación de citas aleatorias le proporciona una colección diversa de citas de diversas fuentes. Con un simple click, puede acceder a una cita nueva que le hará reflexionar para levantarle el ánimo u ofrecerle nuevas perspectivas de la vida. Es una forma rápida y sencilla de inyectar inspiración en tu rutina diaria, haciéndola perfecta para una dosis de motivación o un momento de reflexión.'
    },
    skills: ['React', 'JavaScript'],
    githubLink: 'https://github.com/orlandoalvareza/random-quotes-machine', 
    netlifyLink: 'https://randomqm.netlify.app/',
  }
]

export const projectsLink: ProjectDescription = {
  en: 'View full projects archive in GitHub',
  es: 'Ver archivo completo de proyectos en GitHub'
}