
import type { DataBase } from "@/database/database.model";

const buildSlug = (value: string): string => value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const database: DataBase[] = [
  {
    title: "Radio App",
    slug: buildSlug("Radio App"),
    image: "radioev.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/orgs/enchufevirtual/repositories",
    type: 'FULLSTACK',
    demo: "",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["React", "Node.js", "Socket.io", "Sass", "Web Audio API"],
    description_card: "Radio App es un proyecto open source diseñado para escuchar música y conectar usuarios en vivo.",
    description_en: "",
    description_es: `### Radio App

![Captura de Radio App](/assets/radioev.jpg)

**Radio App** es un proyecto open source diseñado para escuchar música y conectar usuarios en vivo.

### Qué podías hacer

- **Radio en vivo**: escuchar música streaming directamente desde la web.
- **Chat con el DJ**: pedir canciones, mandar saludos y conversar en tiempo real.
- **Perfiles personalizados**: registrarte, subir foto, redes y descripción.
- **Publicaciones sociales**: crear posts de texto y audio para la comunidad.

### Stack técnico

- **Frontend**: ReactJS, Sass
- **Backend**: Node.js, Socket.io
- **Audio**: Web Audio API

### Ejemplo de código

\`\`\`
  function secreto() {
    const mensaje = "La vida es un bug, 
    ¡disfruta el debug! 🐞";
    return mensaje;
  }
  console.log(secreto());
\`\`\`

Clona el repositorio y sigue el [README](https://github.com/orgs/enchufevirtual/repositories) para levantarlo en local.
`
  },
  {
    title: "Audio Seven",
    slug: buildSlug("Audio Seven"),
    image: "audioseven.jpg",
    category: 'PERSONAL',
    source: "https://github.com/soychendo/audioseven",
    type: 'FRONTEND',
    demo: "https://audioseven.vercel.app/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_card: "Reproductor de audio sencillo y elegante creado con HTML, CSS y JavaScript.",
    description_en: "Audio player created in Html, Css and JavaScript, simple and elegant.",
    description_es: "Reproductor de Audio creado en Html, Css y JavaScript, sencillo y elegante."
  },
  {
    title: "Chendo Calc",
    slug: buildSlug("Chendo Calc"),
    image: "chendocalc.jpg",
    category: 'PERSONAL',
    source: "https://github.com/soychendo/chendocalc",
    type: 'FRONTEND',
    demo: "https://soychendo.com/chendocalc/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_card: "Calculadora científica moderna construida con HTML, CSS y JavaScript.",
    description_en: "Scientific calculator, built with Html, Css and JavaScript, intermediate use.",
    description_es: "Calculadora científica, construida con Html, Css y JavaScript, uso intermedio."
  },
  {
    title: "Windows",
    slug: buildSlug("Windows"),
    image: "windows.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/soychendo/oschen",
    type: 'FRONTEND',
    demo: "https://soychendo.com/oschen",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["React", "PHP"],
    description_card: "Réplica de la interfaz de Windows 10 creada con React y diseño web moderno.",
    description_en: "This version of windows is created in React, but also has a PHP version.",
    description_es: `Réplica de la interfaz de Windows 10 desarrollada desde cero en el navegador. 
     \nEl proyecto nacio con la idea de recrear la experiencia del sistema operativo usando solo tecnologias web.
    \n\nFeatures principales:\n- Menu Inicio: Navegable, con apps y buscador\n- Explorador de carpetas: Crear, abrir y organizar directorios\n- Calculadora: Funcional completa\n- Sistema de ventanas: Arrastrables y redimensionables\nStack tecnico:\nHTML5, CSS3, React, React Router DOM, Context API + Global Provider\nFue creado como proyecto de practica para mejorar mis habilidades en componentes, routing y estado global. Codigo abierto para la comunidad dev`
  },
  {
    title: "Ace Search",
    slug: buildSlug("Ace Search"),
    image: "buscador.jpg",
    category: 'PERSONAL',
    source: "https://github.com/soychendo/asi",
    type: 'FRONTEND',
    demo: "https://asi-one.vercel.app/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Pexels API"],
    description_card: "Buscador de imágenes web con integración de la API de Pexels.",
    description_en: "Image search engine that uses the Pexels API, created in Html, Css and JavaScript.",
    description_es: "Buscador de imágenes que usa la API de Pexels, creado en Html, Css y JavaScript."
  },
  {
    title: "dotenv.core",
    slug: buildSlug("dotenv.core"),
    image: "dotenv.core.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/DevD4v3/dotenv.core",
    type: 'LIBRARY',
    demo: "",
    author: "DevD4v3",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
    technologies: [".NET Core", "C#"],
    description_card: "Biblioteca .NET Core para cargar y parsear archivos .env en aplicaciones.",
    description_en: "dotenv.core is a class library for read and parsing .env files in .NET Core",
    description_es: "dotenv.core es una biblioteca de clases para leer y analizar archivos .env en .NET Core"
  },
  {
    title: "seztion-parser.net",
    slug: buildSlug("seztion-parser.net"),
    image: "seztion-parser.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/DevD4v3/seztion-parser",
    type: 'LIBRARY',
    demo: "",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
    technologies: [".NET Core", "C#"],
    description_card: "Biblioteca .NET para leer secciones de archivos con extensión flexible.",
    description_en: "seztion-parser is a class library used to read data from each section of a file (the file extension can be any, e.g. .INI).",
    description_es: "seztion-parser es una biblioteca de clases que se utiliza para leer datos de cada sección de un archivo (la extensión del archivo puede ser cualquiera, por ejemplo, .INI)."
  },
  {
    title: "Capture The Flag SA-MP",
    slug: buildSlug("Capture The Flag SA-MP"),
    image: "CTF.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/DevD4v3/Capture-The-Flag",
    type: 'BACKEND',
    demo: "",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
    technologies: [".NET", "C#", "SampSharp"],
    description_card: "Modo Capture The Flag para SA-MP desarrollado en .NET/C# y SampSharp.",
    description_en: "Capture The Flag is a gamemode for SA-MP created with .NET/C# and SampSharp.net",
    description_es: "Capture The Flag es un modo de juego para SA-MP creado con .NET/C# y SampSharp.net"
  },
  {
    title: "DentallApp BackEnd",
    slug: buildSlug("DentallApp BackEnd"),
    image: "dentall-app-backend.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/DentallApp/back-end",
    type: 'BACKEND',
    demo: "",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
    technologies: ["Node.js", "Express", "REST API"],
    description_card: "Servicio backend dental para gestionar citas y enviar recordatorios automáticos.",
    description_en: "A web service for dental software that allows to schedule appointments and send automatic appointment reminders to patients.",
    description_es: "Un servicio web para el software dental que permite programar citas y enviar recordatorios automáticos de citas a los pacientes."
  },
  {
    title: "Im Studio Profesional",
    slug: buildSlug("Im Studio Pro"),
    image: "imstudio.jpg",
    category: 'CLIENTS',
    source: "",
    type: 'FULLSTACK',
    demo: "https://imstudio.studio/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["JavaScript", "Responsive Design", "Ecommerce"],
    description_card: "Desarrollo y estructuración integral de la plataforma web para Im Studio, un estudio especializado en producción audiovisual y eventos. ",
    description_en: "A web service for dental software that allows to schedule appointments and send automatic appointment reminders to patients.",
    description_es: `
      ### Im Studio Professional

      **Im Studio** es una plataforma web profesional diseñada para la cotización de servicios audiovisuales y la gestión de utilería en línea.

      ### Qué podías hacer

      - **Reserva por Hora**: Reservar espacio del estudio con fecha y hora, agendamiento en tiempo real.
      - **Explorar utilería**: revisar el catálogo digital de productos disponibles para producciones y eventos.
      - **Conocer al equipo**: visualizar los perfiles profesionales del staff técnico, realizadores y fotógrafos.
      - **Conectar redes**: acceder directamente a las comunidades oficiales de Instagram, LinkedIn y Facebook.

      ### Stack técnico

      - **CMS & Tienda**: WordPress, WooCommerce
      - **Desarrollo**: PHP, Código Puro (HTML5 / CSS3)
      - **Base de Datos**: MySQL
      - **Diseño**: Responsive Design, UX/UI`
  }
]
