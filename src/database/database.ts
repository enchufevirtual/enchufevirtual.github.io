
import type { DataBase } from "@/database/database.model";

const buildSlug = (value: string): string => value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export const database: DataBase[] = [
  {
    title: "Radio App",
    slug: buildSlug("Radio App"),
    image: "radioev.jpg",
    category: 'OPEN_SOURCE',
    source: "https://github.com/enchufevirtual/radio-client",
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
    description_en: "Radio Enchufe Virtual is an open-source project for listening to music and connecting with listeners in real time.",
    description_detail_en: `### Radio Enchufe Virtual

**Radio Enchufe Virtual** brings an online radio station and its community together in one place. Listeners can enjoy the stream, interact in real time, and take part in the station's social features.

### What you can do

- **Listen live** and check the station's streaming status.
- **Join the conversation** through real-time chat.
- **Create an account** and manage a personal profile.
- **Connect with the community** through social interactions.

### Example

A listener can open the station, keep the live stream playing, and chat with other listeners without leaving the site.

### Technology

- **Client**: React and TypeScript.
- **API**: Node.js, Express, TypeScript, and MariaDB.
- **Real time**: Socket.io.

The application is split into a [client](https://github.com/enchufevirtual/radio-client) and a [REST API](https://github.com/enchufevirtual/radio-api).`,
    description_es: `### Radio App

![Captura de Radio App](/assets/radioev.jpg)

**Radio Enchufe Virtual** reúne una emisora en línea y su comunidad en un mismo lugar. Quienes la visitan pueden escuchar la transmisión, conversar en tiempo real y participar en las funciones sociales de la radio.

### Qué puedes hacer

- **Escuchar en vivo** y consultar el estado de la transmisión.
- **Conversar** con otras personas mediante el chat en tiempo real.
- **Crear una cuenta** y administrar un perfil personal.
- **Conectar con la comunidad** a través de interacciones sociales.

### Ejemplo de uso

Una persona abre la emisora, deja la transmisión sonando y conversa con otros oyentes sin salir del sitio.

### Tecnologías

- **Cliente**: React y TypeScript.
- **API**: Node.js, Express, TypeScript y MariaDB.
- **Tiempo real**: Socket.io.

El proyecto está dividido en un [cliente](https://github.com/enchufevirtual/radio-client) y una [API REST](https://github.com/enchufevirtual/radio-api).`,
  },
  {
    title: "Audio Seven",
    slug: buildSlug("Audio Seven"),
    image: "audioseven.jpg",
    category: 'PERSONAL',
    source: "https://github.com/soychendo/audioseven",
    type: 'FRONTEND',
    demo: "https://soychendo.com/audioseven/",
    author: "Soy Chendo",
    authorUrl: "https://www.soychendo.com",
    authorSocials: [
      { label: "GitHub", url: "https://github.com/soychendo" },
      { label: "Facebook", url: "https://www.facebook.com/soychendo" },
      { label: "Instagram", url: "https://www.instagram.com/soychendoo" }
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_card: "Reproductor de audio sencillo y elegante creado con HTML, CSS y JavaScript.",
    description_en: "A lightweight browser-based music player for listening to a personal audio collection.",
    description_detail_en: `### Audio Seven

**Audio Seven** is a lightweight web player for listening to a personal music collection. It uses local audio files and a JavaScript playlist, without requiring a database.

### How to use it

1. Add audio files to \`assets/audio\`.
2. List each file in \`db/json.js\`, using the same filename in its \`track\` field.
3. Open the player and choose a track from the playlist.

### Technology

Built with HTML, CSS, and JavaScript. It can be served locally with a development server or hosted as a static site.`,
    description_es: `### Audio Seven

**Audio Seven** es un reproductor web ligero para escuchar una colección personal de música. Usa archivos de audio locales y una lista de reproducción en JavaScript, sin necesitar una base de datos.

### Cómo usarlo

1. Agrega los archivos de audio en \`assets/audio\`.
2. Incluye cada archivo en \`db/json.js\`, usando el mismo nombre en el campo \`track\`.
3. Abre el reproductor y selecciona una canción de la lista.

### Tecnologías

Está construido con HTML, CSS y JavaScript. Puedes ejecutarlo con un servidor local de desarrollo o publicarlo como un sitio estático.`
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
    description_en: "A browser-based scientific calculator for common arithmetic and math functions.",
    description_detail_en: `### Chendo Calc

**Chendo Calc** is a browser-based scientific calculator for everyday arithmetic and common math functions.

### What you can do

- Build and evaluate expressions with addition, subtraction, multiplication, and division.
- Apply functions such as square root, logarithms, sine, cosine, and tangent.
- Use the dedicated controls to clear the display or delete the last character.

### Example

Enter an expression such as \`8 * (3 + 2)\` and press the equals button to calculate its result.

### Technology

Built with HTML, CSS, and JavaScript; calculations run directly in the browser.`,
    description_es: `### Chendo Calc

**Chendo Calc** es una calculadora científica que funciona en el navegador y permite resolver operaciones cotidianas y aplicar funciones matemáticas comunes.

### Qué puedes hacer

- Escribir y resolver expresiones con suma, resta, multiplicación y división.
- Aplicar funciones como raíz cuadrada, logaritmos, seno, coseno y tangente.
- Limpiar la pantalla o borrar el último carácter con sus controles.

### Ejemplo

Escribe una operación como \`8 * (3 + 2)\` y presiona el botón de igual para obtener el resultado.

### Tecnologías

Está construida con HTML, CSS y JavaScript; los cálculos se realizan directamente en el navegador.`
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
    description_en: "An interactive browser recreation of the Windows desktop experience.",
    description_detail_en: `### Windows

**Windows** recreates the look and feel of a desktop operating system inside the browser. It is an interactive web project built with React.

### What you can explore

- Open and navigate the Start menu.
- Browse folders in the file explorer.
- Use the built-in calculator.
- Move and resize application windows.

### Example

Open the Start menu, launch the calculator, and move its window around the desktop, all within the browser.

### Technology

The web version uses React, with a separate PHP edition also available.`,
    description_es: `### Windows

**Windows** recrea la experiencia de un escritorio dentro del navegador mediante una interfaz web interactiva.

### Qué puedes explorar

- Abrir y recorrer el menú Inicio.
- Navegar carpetas desde el explorador de archivos.
- Usar la calculadora integrada.
- Mover y redimensionar ventanas de aplicaciones.

### Ejemplo

Abre el menú Inicio, ejecuta la calculadora y mueve su ventana por el escritorio, todo desde el navegador.

### Tecnologías

La versión web está construida con React; también existe una versión independiente en PHP.`
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
    technologies: ["HTML", "CSS", "JavaScript", "Pixabay API"],
    description_card: "Buscador de imágenes web con integración de la API de Pixabay.",
    description_en: "A web image search tool powered by the Pixabay API.",
    description_detail_en: `### Ace Search

**Ace Search** is a simple image-search site powered by the Pixabay API. It turns a search term into a browsable gallery of results.

### What you can do

- Search the image collection with a keyword.
- Browse results in pages of 24 images.
- Check each image's likes and view count.
- Open the full-size image from a result.

### Example

Search for \`architecture\`, browse the matching thumbnails, and open an image to see its full version.

### Technology

Built with HTML, CSS, and JavaScript, using the Pixabay API for image search.`,
    description_es: `### Ace Search

**Ace Search** es un buscador web de imágenes conectado a la API de Pixabay. Convierte una palabra de búsqueda en una galería de resultados para explorar.

### Qué puedes hacer

- Buscar imágenes usando palabras clave.
- Recorrer los resultados en páginas de 24 imágenes.
- Consultar los “me gusta” y las visualizaciones de cada resultado.
- Abrir la imagen en su tamaño completo.

### Ejemplo

Busca \`arquitectura\`, explora las miniaturas y abre una imagen para ver su versión completa.

### Tecnologías

Está construido con HTML, CSS y JavaScript, y usa la API de Pixabay para las búsquedas.`
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
    description_en: "A .NET library for loading environment variables from .env files.",
    description_detail_en: `### dotenv.core

**dotenv.core** is a .NET library that loads values from \`.env\` files into an application's environment, so configuration can live outside the source code.

### What it supports

- Load one or multiple environment files.
- Select files for environments such as development or production.
- Read values by key and convert common types.
- Resolve interpolated values and specify required keys.

### Example

\`\`\`csharp
using DotEnv.Core;

new EnvLoader().Load();
var port = new EnvReader().GetIntValue("DB_PORT");
\`\`\`

For example, a project can keep \`DB_PORT=5432\` in its local \`.env\` file and read it as an integer at startup.

### Technology

Built as a C# class library for .NET Standard.`,
    description_es: `### dotenv.core

**dotenv.core** es una biblioteca para .NET que carga valores de archivos \`.env\` en el entorno de una aplicación, manteniendo la configuración separada del código fuente.

### Qué permite hacer

- Cargar uno o varios archivos de entorno.
- Elegir archivos según el entorno, como desarrollo o producción.
- Leer valores por clave y convertir tipos comunes.
- Resolver valores interpolados y declarar claves obligatorias.

### Ejemplo

\`\`\`csharp
using DotEnv.Core;

new EnvLoader().Load();
var puerto = new EnvReader().GetIntValue("DB_PORT");
\`\`\`

Por ejemplo, el proyecto puede guardar \`DB_PORT=5432\` en su archivo local \`.env\` y leerlo como entero al iniciar.

### Tecnología

Es una biblioteca de clases en C# para .NET Standard.`
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
    description_en: "A lightweight .NET library for reading section-based configuration files.",
    description_detail_en: `### seztion-parser

**Seztion Parser** is a lightweight .NET library for reading section-based text files such as INI configuration files. It works with different file extensions and provides direct access to each section's data.

### What it supports

- Load a file and retrieve a section by name.
- Iterate over all values in a section.
- Read typed values, such as an integer, from a section.
- Use it with extensions beyond \`.ini\`.

### Example

\`\`\`csharp
using SeztionParser;

ISectionsData sections = SectionsFile.Load("map.ini");
int worldTime = sections.GetFirstLineInt("WorldTime");
\`\`\`

For a game map, a file can keep spawn points in \`[AlphaTeamLocations]\` and a setting such as \`[WorldTime]\` in separate sections.

### Technology

Built with C# for .NET.`,
    description_es: `### seztion-parser

**Seztion Parser** es una biblioteca ligera de .NET para leer archivos de texto organizados por secciones, como los archivos de configuración INI. Acepta distintas extensiones y permite acceder directamente a los datos de cada sección.

### Qué permite hacer

- Cargar un archivo y obtener una sección por su nombre.
- Recorrer todos los valores de una sección.
- Leer valores tipados, como un entero, desde una sección.
- Usar archivos con extensiones distintas de \`.ini\`.

### Ejemplo

\`\`\`csharp
using SeztionParser;

ISectionsData secciones = SectionsFile.Load("map.ini");
int horaDelMundo = secciones.GetFirstLineInt("WorldTime");
\`\`\`

En un mapa de juego, por ejemplo, el archivo puede guardar los puntos de aparición en \`[AlphaTeamLocations]\` y una opción como \`[WorldTime]\` en secciones separadas.

### Tecnología

Desarrollada en C# para .NET.`
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
    description_card: "Modo Capture the Flag para open.mp desarrollado en C# y SampSharp.",
    description_en: "A team-based Capture the Flag game mode for open.mp, built with C# and SampSharp.",
    description_detail_en: `### Capture the Flag

**Capture the Flag** is a team-based game mode for open.mp, the multiplayer mod for GTA San Andreas, built with C# and SampSharp. Two teams compete to steal the opponent's flag and return it to their own base.

### How a match works

- Capture the enemy flag while your own flag is at its base.
- Work together to defend your flag and recover it when it is dropped.
- Play a timed match; the team with the most captures wins.
- Enable the optional GunGame mode alongside the flag objective.

### Example

Coordinate an attack: one teammate steals the opposing flag while the rest defend your base; score by bringing it home while your own flag is safe.

### Technology

Built with C#, .NET, and SampSharp for open.mp.`,
    description_es: `### Capture the Flag

**Capture the Flag** es un modo de juego por equipos para open.mp, el mod multijugador de GTA San Andreas, desarrollado en C# con SampSharp. Dos equipos compiten por robar la bandera rival y llevarla de regreso a su propia base.

### Cómo se juega

- Captura la bandera enemiga cuando la tuya esté en su base.
- Coordínate con tu equipo para defender la bandera y recuperarla si cae.
- Juega una partida con límite de tiempo; gana el equipo con más capturas.
- Activa el modo GunGame opcional sin abandonar el objetivo de las banderas.

### Ejemplo

Coordina un ataque: mientras un jugador roba la bandera rival, el resto protege la base. Para anotar, hay que volver con la bandera mientras la propia está a salvo.

### Tecnologías

Desarrollado con C#, .NET y SampSharp para open.mp.`
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
    technologies: [".NET", "C#", "ASP.NET Core", "Bot Framework"],
    description_card: "Servicio backend dental para gestionar citas y enviar recordatorios automáticos.",
    description_en: "A modular dental-office backend for chatbot-based appointments and patient reminders.",
    description_detail_en: `### DentallApp Backend

**DentallApp** is the backend for a dental-office assistant that combines appointment management with a chatbot. Its plugin-based architecture keeps features such as messaging and reminders modular.

### What it supports

- Let patients schedule appointments through a chatbot.
- Send appointment reminders through a background service.
- Notify patients about cancellations through an optional WhatsApp integration.
- Add or remove integrations as plugins.

### Example

A patient asks the chatbot for an appointment; the service records the booking and can send a reminder before the visit.

### Technology

Built with C# and ASP.NET Core, using Microsoft Bot Framework and a modular plugin architecture.

> This repository is published as a learning project; its README notes that it is not ready for production.`,
    description_es: `### Backend de DentallApp

**DentallApp** es el backend de un asistente para consultorios dentales que combina la gestión de citas con un chatbot. Su arquitectura basada en plugins permite integrar funciones como mensajería y recordatorios de forma modular.

### Qué permite hacer

- Ayudar a los pacientes a agendar citas desde un chatbot.
- Enviar recordatorios de citas mediante un servicio en segundo plano.
- Avisar a los pacientes sobre cancelaciones mediante una integración opcional con WhatsApp.
- Agregar o quitar integraciones como plugins.

### Ejemplo

Un paciente solicita una cita al chatbot; el servicio registra la reserva y puede enviarle un recordatorio antes de la consulta.

### Tecnologías

Desarrollado en C# y ASP.NET Core, con Microsoft Bot Framework y una arquitectura modular de plugins.

> Este repositorio se publica como proyecto de aprendizaje; su README indica que aún no está preparado para producción.`
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
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Responsive Design"],
    description_card: "Plataforma para reservar un estudio audiovisual y explorar una tienda de utilería y vestuario.",
    description_en: "A website for an audiovisual studio, with online bookings and a store for production props and wardrobe.",
    description_detail_en: `### Im Studio Professional

**Im Studio Professional** is a website for an audiovisual production studio. It brings studio reservations and an online catalog of production props and wardrobe together in one place.

### What visitors can do

- Explore the studio and reserve a space for video, podcast, or livestream production.
- Browse props and wardrobe available for productions.
- Review products and continue through the online store.

### Example

A creator can reserve the studio for a video shoot, then browse the catalog to find props or wardrobe for the production.

### Technology

The site presents an online booking and shopping experience with responsive design, built with WordPress and WooCommerce.`,
    description_es: `
      ### Im Studio Professional

      **Im Studio** es el sitio de un estudio de producción audiovisual. Reúne las reservas del estudio y un catálogo en línea de utilería y vestuario para producciones.

      ### Qué puedes hacer

      - Explorar el estudio y reservar un espacio para grabar videos, podcasts o transmisiones en vivo.
      - Revisar la utilería y el vestuario disponibles para producciones.
      - Consultar productos y continuar el proceso desde la tienda en línea.

      ### Ejemplo

      Una persona creadora puede reservar el estudio para grabar un video y luego buscar en el catálogo la utilería o el vestuario que necesita.

      ### Tecnologías

      Sitio responsivo con experiencia de reservas y compras en línea, desarrollado con WordPress y WooCommerce.`
  }
]
