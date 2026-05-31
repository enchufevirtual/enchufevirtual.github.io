
import type { DataBase } from "@/database/database.model";

const buildSlug = (value: string): string => value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const database: DataBase[] = [
  {
    title: "Radio App",
    slug: buildSlug("Radio App"),
    image: "radioev.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/orgs/enchufevirtual/repositories",
    type: 'FULLSTACK' as DataBase['type'],
    demo: "https://www.enchufevirtual.com/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    description_en: "This Open Source project is an application to enjoy the best music of the moment and connect with people from different parts of the world through an integrated chat.",
    description_es: "Este proyecto Open Source es una aplicación para disfrutar de la mejor música del momento y conectar con personas de diferentes partes del mundo a través de un chat integrado."
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
    description_en: "This version of windows is created in React, but also has a PHP version.",
    description_es: "Esta vesión de windows está creada en React, pero también tiene una versión en PHP."
  },
  {
    title: "Devaechba",
    slug: buildSlug("Devaechba"),
    image: "devaechba.jpg",
    category: 'PERSONAL',
    source: "https://github.com/soychendo",
    type: 'FRONTEND',
    demo: "https://github.com/soychendo",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    description_en: "This project was created with Html, Css and JavaScript, site under construction.",
    description_es: "Este proyecto fué creado con Html, Css y JavaScript, sitio en construcción."
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
    demo: "https://github.com/DevD4v3/dotenv.core",
    author: "DevD4v3",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
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
    demo: "https://github.com/DevD4v3/seztion-parser",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
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
    demo: "https://github.com/DevD4v3/Capture-The-Flag",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
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
    demo: "https://github.com/DentallApp/back-end",
    author: "DevD4v3",
    authorUrl: "https://devd4v3.github.io",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/DevD4v3" },
    ],
    description_en: "A web service for dental software that allows to schedule appointments and send automatic appointment reminders to patients.",
    description_es: "Un servicio web para el software dental que permite programar citas y enviar recordatorios automáticos de citas a los pacientes."
  }
]
