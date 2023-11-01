import type { PROJECT } from "../Types/types-interfaces";

const projects: PROJECT[] = [
  {
    image: '/touchbase.jpg',
    title: 'TouchBase',
    description: 'Touchbase is a comprehensive contact management application that empowers you to efficiently organize, categorize, and access your contacts. With a user-friendly interface and detailed contact profiles, Touchbase simplifies the process of managing your network, whether for professional networking or personal connections.',  
    skills: ['React', 'JavaScript', 'Firebase'],
    githubLink: 'https://github.com/orlandoalvareza/react-contacts-app',
    netlifyLink: 'https://touchbase-app.netlify.app/',
  },
  {
    image: '/calendar.jpg',
    title: 'Calendar',
    description: "A calendar app is a powerful tool that helps you organize your time, events, and appointments efficiently. Whether you're coordinating your work schedule, planning personal events, or staying on top of important dates, a calendar app provides a convenient and effective way to manage your time and stay organized",  
    skills: ['React', 'JavaScript'],
    githubLink: 'https://github.com/orlandoalvareza/react-calendar-app', 
    netlifyLink: 'https://reactjs-app-calendar.netlify.app/',
  },
  {
    image: '/randomqm.jpg',
    title: 'Random Quote Machine',
    description: "A random quote machine app provides you with a diverse collection of quotes from various sources. With a simple click, you can access a new, thought-provoking quote to uplift your spirits or offer fresh perspectives on life. It's a quick and easy way to inject inspiration into your daily routine, making it perfect for a dose of motivation or a moment of reflection.",
    skills: ['React', 'JavaScript'],
    githubLink: 'https://github.com/orlandoalvareza/random-quotes-machine', 
    netlifyLink: 'https://randomqm.netlify.app/',
  }
]

export default projects;