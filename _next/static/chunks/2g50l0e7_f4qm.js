(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,22016,(e,a,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var t={default:function(){return v},useLinkStatus:function(){return y}};for(var r in t)Object.defineProperty(o,r,{enumerable:!0,get:t[r]});let n=e.r(90809),i=e.r(18050),s=n._(e.r(71645)),c=e.r(95057),l=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550),h=e.r(88540),m=e.r(91949),g=e.r(73668),f=e.r(9396);function v(a){var o;let t,r,n,[v,y]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:S,as:x,children:C,prefetch:E=null,passHref:T,replace:A,shallow:P,scroll:_,onClick:R,onMouseEnter:j,onTouchStart:k,legacyBehavior:N=!1,onNavigate:I,transitionTypes:L,ref:D,unstable_dynamicOnHover:O,...B}=a;t=C,N&&("string"==typeof t||"number"==typeof t)&&(t=(0,i.jsx)("a",{children:t}));let U=s.default.useContext(l.AppRouterContext),F=!1!==E,M=!1===E?"none":!0===E?"full":"auto",W="none"!==M?"auto"===M?f.FetchStrategy.PPR:f.FetchStrategy.Full:f.FetchStrategy.PPR,H="string"==typeof(o=x||S)?o:(0,c.formatUrl)(o);if(N){if(t?.$$typeof===Symbol.for("react.lazy"))throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");r=s.default.Children.only(t)}let z=N?r&&"object"==typeof r&&r.ref:D,q,G=s.default.useCallback(e=>(null!==U&&(w.current=(0,m.mountLinkInstance)(e,H,U,W,F,y,q)),()=>{w.current&&((0,m.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,H,U,W,y,q]),$={ref:(0,u.useMergedRef)(G,z),onClick(a){N||"function"!=typeof R||R(a),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(a),!U||a.defaultPrevented||function(a,o,t,r,n,i,s,c="none"){if("u">typeof window){let l,{nodeName:u}=a.currentTarget;if("A"===u.toUpperCase()&&((l=a.currentTarget.getAttribute("target"))&&"_self"!==l||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.nativeEvent&&2===a.nativeEvent.which)||a.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(o)){r&&(a.preventDefault(),location.replace(o));return}if(a.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{navigate:d}=e.r(32916);d(o,r?"replace":"push",!1===n?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,t.current,s,c)}}(a,H,w,A,_,I,L,M)},onMouseEnter(e){N||"function"!=typeof j||j(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),U&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),U&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,d.isAbsoluteUrl)(H)?$.href=H:N&&!T&&("a"!==r.type||"href"in r.props)||($.href=(0,p.addBasePath)(H)),n=N?s.default.cloneElement(r,$):(0,i.jsx)("a",{...B,...$,children:t}),(0,i.jsx)(b.Provider,{value:v,children:n})}let b=(0,s.createContext)(m.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(b);("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),a.exports=o.default)},18581,(e,a,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"useMergedRef",{enumerable:!0,get:function(){return r}});let t=e.r(71645);function r(e,a){let o=(0,t.useRef)(null),r=(0,t.useRef)(null);return(0,t.useCallback)(t=>{if(null===t){let e=o.current;e&&(o.current=null,e());let a=r.current;a&&(r.current=null,a())}else e&&(o.current=n(e,t)),a&&(r.current=n(a,t))},[e,a])}function n(e,a){if("function"!=typeof e)return e.current=a,()=>{e.current=null};{let o=e(a);return"function"==typeof o?o:()=>e(null)}}("function"==typeof o.default||"object"==typeof o.default&&null!==o.default)&&void 0===o.default.__esModule&&(Object.defineProperty(o.default,"__esModule",{value:!0}),Object.assign(o.default,o),a.exports=o.default)},95057,(e,a,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var t={formatUrl:function(){return s},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var r in t)Object.defineProperty(o,r,{enumerable:!0,get:t[r]});let n=e.r(90809)._(e.r(98183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:a,hostname:o}=e,t=e.protocol||"",r=e.pathname||"",s=e.hash||"",c=e.query||"",l=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?l=a+e.host:o&&(l=a+(~o.indexOf(":")?`[${o}]`:o),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(n.urlQueryToSearchParams(c)));let u=e.search||c&&`?${c}`||"";return t&&!t.endsWith(":")&&(t+=":"),e.slashes||(!t||i.test(t))&&!1!==l?(l="//"+(l||""),r&&"/"!==r[0]&&(r="/"+r)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),r=r.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${t}${l}${r}${u}${s}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return s(e)}},73668,(e,a,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"isLocalURL",{enumerable:!0,get:function(){return n}});let t=e.r(18967),r=e.r(52817);function n(e){if(!(0,t.isAbsoluteUrl)(e))return!0;try{let a=(0,t.getLocationOrigin)(),o=new URL(e,a);return o.origin===a&&(0,r.hasBasePath)(o.pathname)}catch(e){return!1}}},18967,(e,a,o)=>{e.i(47167),Object.defineProperty(o,"__esModule",{value:!0});var t={DecodeError:function(){return v},MiddlewareNotFoundError:function(){return S},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return g},ST:function(){return f},WEB_VITALS:function(){return n},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return p},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return h},stringifyError:function(){return x}};for(var r in t)Object.defineProperty(o,r,{enumerable:!0,get:t[r]});let n=["CLS","FCP","INP","LCP","TTFB"];function i(e){let a,o=!1;return(...t)=>(o||(o=!0,a=e(...t)),a)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>{let a=e.charCodeAt(0);return!!(a>=65&&a<=90||a>=97&&a<=122)&&s.test(e)};function l(){let{protocol:e,hostname:a,port:o}=window.location;return`${e}//${a}${o?":"+o:""}`}function u(){let{href:e}=window.location,a=l();return e.substring(a.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function h(e){let a=e.split("?");return a[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(a[1]?`?${a.slice(1).join("?")}`:"")}async function m(e,a){let o=a.res||a.ctx&&a.ctx.res;if(!e.getInitialProps)return a.ctx&&a.Component?{pageProps:await m(a.Component,a.ctx)}:{};let t=await e.getInitialProps(a);if(o&&p(o))return t;if(!t)throw Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${t}" instead.`);return t}let g="u">typeof performance,f=g&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class v extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,a){super(),this.message=`Failed to load static file for page: ${e} ${a}`}}class S extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},12786,e=>{let a=e=>e.toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,""),o=[{title:"Radio App",slug:a("Radio App"),image:"radioev.jpg",category:"OPEN_SOURCE",source:"https://github.com/enchufevirtual/radio-client",type:"FULLSTACK",demo:"",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["React","Node.js","Socket.io","Sass","Web Audio API"],description_card:"Radio App es un proyecto open source diseñado para escuchar música y conectar usuarios en vivo.",description_en:"Radio Enchufe Virtual is an open-source project for listening to music and connecting with listeners in real time.",description_detail_en:`### Radio Enchufe Virtual

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

The application is split into a [client](https://github.com/enchufevirtual/radio-client) and a [REST API](https://github.com/enchufevirtual/radio-api).`,description_es:`### Radio App

![Captura de Radio App](/assets/radioev.jpg)

**Radio Enchufe Virtual** re\xfane una emisora en l\xednea y su comunidad en un mismo lugar. Quienes la visitan pueden escuchar la transmisi\xf3n, conversar en tiempo real y participar en las funciones sociales de la radio.

### Qu\xe9 puedes hacer

- **Escuchar en vivo** y consultar el estado de la transmisi\xf3n.
- **Conversar** con otras personas mediante el chat en tiempo real.
- **Crear una cuenta** y administrar un perfil personal.
- **Conectar con la comunidad** a trav\xe9s de interacciones sociales.

### Ejemplo de uso

Una persona abre la emisora, deja la transmisi\xf3n sonando y conversa con otros oyentes sin salir del sitio.

### Tecnolog\xedas

- **Cliente**: React y TypeScript.
- **API**: Node.js, Express, TypeScript y MariaDB.
- **Tiempo real**: Socket.io.

El proyecto est\xe1 dividido en un [cliente](https://github.com/enchufevirtual/radio-client) y una [API REST](https://github.com/enchufevirtual/radio-api).`},{title:"Audio Seven",slug:a("Audio Seven"),image:"audioseven.jpg",category:"PERSONAL",source:"https://github.com/soychendo/audioseven",type:"FRONTEND",demo:"https://soychendo.com/audioseven/",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["HTML","CSS","JavaScript"],description_card:"Reproductor de audio sencillo y elegante creado con HTML, CSS y JavaScript.",description_en:"A lightweight browser-based music player for listening to a personal audio collection.",description_detail_en:`### Audio Seven

**Audio Seven** is a lightweight web player for listening to a personal music collection. It uses local audio files and a JavaScript playlist, without requiring a database.

### How to use it

1. Add audio files to \`assets/audio\`.
2. List each file in \`db/json.js\`, using the same filename in its \`track\` field.
3. Open the player and choose a track from the playlist.

### Technology

Built with HTML, CSS, and JavaScript. It can be served locally with a development server or hosted as a static site.`,description_es:`### Audio Seven

**Audio Seven** es un reproductor web ligero para escuchar una colecci\xf3n personal de m\xfasica. Usa archivos de audio locales y una lista de reproducci\xf3n en JavaScript, sin necesitar una base de datos.

### C\xf3mo usarlo

1. Agrega los archivos de audio en \`assets/audio\`.
2. Incluye cada archivo en \`db/json.js\`, usando el mismo nombre en el campo \`track\`.
3. Abre el reproductor y selecciona una canci\xf3n de la lista.

### Tecnolog\xedas

Est\xe1 construido con HTML, CSS y JavaScript. Puedes ejecutarlo con un servidor local de desarrollo o publicarlo como un sitio est\xe1tico.`},{title:"Chendo Calc",slug:a("Chendo Calc"),image:"chendocalc.jpg",category:"PERSONAL",source:"https://github.com/soychendo/chendocalc",type:"FRONTEND",demo:"https://soychendo.com/chendocalc/",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["HTML","CSS","JavaScript"],description_card:"Calculadora científica moderna construida con HTML, CSS y JavaScript.",description_en:"A browser-based scientific calculator for common arithmetic and math functions.",description_detail_en:`### Chendo Calc

**Chendo Calc** is a browser-based scientific calculator for everyday arithmetic and common math functions.

### What you can do

- Build and evaluate expressions with addition, subtraction, multiplication, and division.
- Apply functions such as square root, logarithms, sine, cosine, and tangent.
- Use the dedicated controls to clear the display or delete the last character.

### Example

Enter an expression such as \`8 * (3 + 2)\` and press the equals button to calculate its result.

### Technology

Built with HTML, CSS, and JavaScript; calculations run directly in the browser.`,description_es:`### Chendo Calc

**Chendo Calc** es una calculadora cient\xedfica que funciona en el navegador y permite resolver operaciones cotidianas y aplicar funciones matem\xe1ticas comunes.

### Qu\xe9 puedes hacer

- Escribir y resolver expresiones con suma, resta, multiplicaci\xf3n y divisi\xf3n.
- Aplicar funciones como ra\xedz cuadrada, logaritmos, seno, coseno y tangente.
- Limpiar la pantalla o borrar el \xfaltimo car\xe1cter con sus controles.

### Ejemplo

Escribe una operaci\xf3n como \`8 * (3 + 2)\` y presiona el bot\xf3n de igual para obtener el resultado.

### Tecnolog\xedas

Est\xe1 construida con HTML, CSS y JavaScript; los c\xe1lculos se realizan directamente en el navegador.`},{title:"Windows",slug:a("Windows"),image:"windows.jpg",category:"OPEN_SOURCE",source:"https://github.com/soychendo/oschen",type:"FRONTEND",demo:"https://soychendo.com/oschen",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["React","PHP"],description_card:"Réplica de la interfaz de Windows 10 creada con React y diseño web moderno.",description_en:"An interactive browser recreation of the Windows desktop experience.",description_detail_en:`### Windows

**Windows** recreates the look and feel of a desktop operating system inside the browser. It is an interactive web project built with React.

### What you can explore

- Open and navigate the Start menu.
- Browse folders in the file explorer.
- Use the built-in calculator.
- Move and resize application windows.

### Example

Open the Start menu, launch the calculator, and move its window around the desktop, all within the browser.

### Technology

The web version uses React, with a separate PHP edition also available.`,description_es:`### Windows

**Windows** recrea la experiencia de un escritorio dentro del navegador mediante una interfaz web interactiva.

### Qu\xe9 puedes explorar

- Abrir y recorrer el men\xfa Inicio.
- Navegar carpetas desde el explorador de archivos.
- Usar la calculadora integrada.
- Mover y redimensionar ventanas de aplicaciones.

### Ejemplo

Abre el men\xfa Inicio, ejecuta la calculadora y mueve su ventana por el escritorio, todo desde el navegador.

### Tecnolog\xedas

La versi\xf3n web est\xe1 construida con React; tambi\xe9n existe una versi\xf3n independiente en PHP.`},{title:"Ace Search",slug:a("Ace Search"),image:"buscador.jpg",category:"PERSONAL",source:"https://github.com/soychendo/asi",type:"FRONTEND",demo:"https://asi-one.vercel.app/",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["HTML","CSS","JavaScript","Pixabay API"],description_card:"Buscador de imágenes web con integración de la API de Pixabay.",description_en:"A web image search tool powered by the Pixabay API.",description_detail_en:`### Ace Search

**Ace Search** is a simple image-search site powered by the Pixabay API. It turns a search term into a browsable gallery of results.

### What you can do

- Search the image collection with a keyword.
- Browse results in pages of 24 images.
- Check each image's likes and view count.
- Open the full-size image from a result.

### Example

Search for \`architecture\`, browse the matching thumbnails, and open an image to see its full version.

### Technology

Built with HTML, CSS, and JavaScript, using the Pixabay API for image search.`,description_es:`### Ace Search

**Ace Search** es un buscador web de im\xe1genes conectado a la API de Pixabay. Convierte una palabra de b\xfasqueda en una galer\xeda de resultados para explorar.

### Qu\xe9 puedes hacer

- Buscar im\xe1genes usando palabras clave.
- Recorrer los resultados en p\xe1ginas de 24 im\xe1genes.
- Consultar los “me gusta” y las visualizaciones de cada resultado.
- Abrir la imagen en su tama\xf1o completo.

### Ejemplo

Busca \`arquitectura\`, explora las miniaturas y abre una imagen para ver su versi\xf3n completa.

### Tecnolog\xedas

Est\xe1 construido con HTML, CSS y JavaScript, y usa la API de Pixabay para las b\xfasquedas.`},{title:"dotenv.core",slug:a("dotenv.core"),image:"dotenv.core.jpg",category:"OPEN_SOURCE",source:"https://github.com/DevD4v3/dotenv.core",type:"LIBRARY",demo:"",author:"DevD4v3",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/DevD4v3"}],technologies:[".NET Core","C#"],description_card:"Biblioteca .NET Core para cargar y parsear archivos .env en aplicaciones.",description_en:"A .NET library for loading environment variables from .env files.",description_detail_en:`### dotenv.core

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

Built as a C# class library for .NET Standard.`,description_es:`### dotenv.core

**dotenv.core** es una biblioteca para .NET que carga valores de archivos \`.env\` en el entorno de una aplicaci\xf3n, manteniendo la configuraci\xf3n separada del c\xf3digo fuente.

### Qu\xe9 permite hacer

- Cargar uno o varios archivos de entorno.
- Elegir archivos seg\xfan el entorno, como desarrollo o producci\xf3n.
- Leer valores por clave y convertir tipos comunes.
- Resolver valores interpolados y declarar claves obligatorias.

### Ejemplo

\`\`\`csharp
using DotEnv.Core;

new EnvLoader().Load();
var puerto = new EnvReader().GetIntValue("DB_PORT");
\`\`\`

Por ejemplo, el proyecto puede guardar \`DB_PORT=5432\` en su archivo local \`.env\` y leerlo como entero al iniciar.

### Tecnolog\xeda

Es una biblioteca de clases en C# para .NET Standard.`},{title:"seztion-parser.net",slug:a("seztion-parser.net"),image:"seztion-parser.jpg",category:"OPEN_SOURCE",source:"https://github.com/DevD4v3/seztion-parser",type:"LIBRARY",demo:"",author:"DevD4v3",authorUrl:"https://devd4v3.github.io",authorSocials:[{label:"GitHub",url:"https://github.com/DevD4v3"}],technologies:[".NET Core","C#"],description_card:"Biblioteca .NET para leer secciones de archivos con extensión flexible.",description_en:"A lightweight .NET library for reading section-based configuration files.",description_detail_en:`### seztion-parser

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

Built with C# for .NET.`,description_es:`### seztion-parser

**Seztion Parser** es una biblioteca ligera de .NET para leer archivos de texto organizados por secciones, como los archivos de configuraci\xf3n INI. Acepta distintas extensiones y permite acceder directamente a los datos de cada secci\xf3n.

### Qu\xe9 permite hacer

- Cargar un archivo y obtener una secci\xf3n por su nombre.
- Recorrer todos los valores de una secci\xf3n.
- Leer valores tipados, como un entero, desde una secci\xf3n.
- Usar archivos con extensiones distintas de \`.ini\`.

### Ejemplo

\`\`\`csharp
using SeztionParser;

ISectionsData secciones = SectionsFile.Load("map.ini");
int horaDelMundo = secciones.GetFirstLineInt("WorldTime");
\`\`\`

En un mapa de juego, por ejemplo, el archivo puede guardar los puntos de aparici\xf3n en \`[AlphaTeamLocations]\` y una opci\xf3n como \`[WorldTime]\` en secciones separadas.

### Tecnolog\xeda

Desarrollada en C# para .NET.`},{title:"Capture The Flag SA-MP",slug:a("Capture The Flag SA-MP"),image:"CTF.jpg",category:"OPEN_SOURCE",source:"https://github.com/DevD4v3/Capture-The-Flag",type:"BACKEND",demo:"",author:"DevD4v3",authorUrl:"https://devd4v3.github.io",authorSocials:[{label:"GitHub",url:"https://github.com/DevD4v3"}],technologies:[".NET","C#","SampSharp"],description_card:"Modo Capture the Flag para open.mp desarrollado en C# y SampSharp.",description_en:"A team-based Capture the Flag game mode for open.mp, built with C# and SampSharp.",description_detail_en:`### Capture the Flag

**Capture the Flag** is a team-based game mode for open.mp, the multiplayer mod for GTA San Andreas, built with C# and SampSharp. Two teams compete to steal the opponent's flag and return it to their own base.

### How a match works

- Capture the enemy flag while your own flag is at its base.
- Work together to defend your flag and recover it when it is dropped.
- Play a timed match; the team with the most captures wins.
- Enable the optional GunGame mode alongside the flag objective.

### Example

Coordinate an attack: one teammate steals the opposing flag while the rest defend your base; score by bringing it home while your own flag is safe.

### Technology

Built with C#, .NET, and SampSharp for open.mp.`,description_es:`### Capture the Flag

**Capture the Flag** es un modo de juego por equipos para open.mp, el mod multijugador de GTA San Andreas, desarrollado en C# con SampSharp. Dos equipos compiten por robar la bandera rival y llevarla de regreso a su propia base.

### C\xf3mo se juega

- Captura la bandera enemiga cuando la tuya est\xe9 en su base.
- Coord\xednate con tu equipo para defender la bandera y recuperarla si cae.
- Juega una partida con l\xedmite de tiempo; gana el equipo con m\xe1s capturas.
- Activa el modo GunGame opcional sin abandonar el objetivo de las banderas.

### Ejemplo

Coordina un ataque: mientras un jugador roba la bandera rival, el resto protege la base. Para anotar, hay que volver con la bandera mientras la propia est\xe1 a salvo.

### Tecnolog\xedas

Desarrollado con C#, .NET y SampSharp para open.mp.`},{title:"DentallApp BackEnd",slug:a("DentallApp BackEnd"),image:"dentall-app-backend.jpg",category:"OPEN_SOURCE",source:"https://github.com/DentallApp/back-end",type:"BACKEND",demo:"",author:"DevD4v3",authorUrl:"https://devd4v3.github.io",authorSocials:[{label:"GitHub",url:"https://github.com/DevD4v3"}],technologies:[".NET","C#","ASP.NET Core","Bot Framework"],description_card:"Servicio backend dental para gestionar citas y enviar recordatorios automáticos.",description_en:"A modular dental-office backend for chatbot-based appointments and patient reminders.",description_detail_en:`### DentallApp Backend

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

> This repository is published as a learning project; its README notes that it is not ready for production.`,description_es:`### Backend de DentallApp

**DentallApp** es el backend de un asistente para consultorios dentales que combina la gesti\xf3n de citas con un chatbot. Su arquitectura basada en plugins permite integrar funciones como mensajer\xeda y recordatorios de forma modular.

### Qu\xe9 permite hacer

- Ayudar a los pacientes a agendar citas desde un chatbot.
- Enviar recordatorios de citas mediante un servicio en segundo plano.
- Avisar a los pacientes sobre cancelaciones mediante una integraci\xf3n opcional con WhatsApp.
- Agregar o quitar integraciones como plugins.

### Ejemplo

Un paciente solicita una cita al chatbot; el servicio registra la reserva y puede enviarle un recordatorio antes de la consulta.

### Tecnolog\xedas

Desarrollado en C# y ASP.NET Core, con Microsoft Bot Framework y una arquitectura modular de plugins.

> Este repositorio se publica como proyecto de aprendizaje; su README indica que a\xfan no est\xe1 preparado para producci\xf3n.`},{title:"Im Studio Profesional",slug:a("Im Studio Pro"),image:"imstudio.jpg",category:"CLIENTS",source:"",type:"FULLSTACK",demo:"https://imstudio.studio/",author:"Soy Chendo",authorUrl:"https://www.soychendo.com",authorSocials:[{label:"GitHub",url:"https://github.com/soychendo"},{label:"Facebook",url:"https://www.facebook.com/soychendo"},{label:"Instagram",url:"https://www.instagram.com/soychendoo"}],technologies:["WordPress","WooCommerce","PHP","MySQL","Responsive Design"],description_card:"Plataforma para reservar un estudio audiovisual y explorar una tienda de utilería y vestuario.",description_en:"A website for an audiovisual studio, with online bookings and a store for production props and wardrobe.",description_detail_en:`### Im Studio Professional

**Im Studio Professional** is a website for an audiovisual production studio. It brings studio reservations and an online catalog of production props and wardrobe together in one place.

### What visitors can do

- Explore the studio and reserve a space for video, podcast, or livestream production.
- Browse props and wardrobe available for productions.
- Review products and continue through the online store.

### Example

A creator can reserve the studio for a video shoot, then browse the catalog to find props or wardrobe for the production.

### Technology

The site presents an online booking and shopping experience with responsive design, built with WordPress and WooCommerce.`,description_es:`
      ### Im Studio Professional

      **Im Studio** es el sitio de un estudio de producci\xf3n audiovisual. Re\xfane las reservas del estudio y un cat\xe1logo en l\xednea de utiler\xeda y vestuario para producciones.

      ### Qu\xe9 puedes hacer

      - Explorar el estudio y reservar un espacio para grabar videos, podcasts o transmisiones en vivo.
      - Revisar la utiler\xeda y el vestuario disponibles para producciones.
      - Consultar productos y continuar el proceso desde la tienda en l\xednea.

      ### Ejemplo

      Una persona creadora puede reservar el estudio para grabar un video y luego buscar en el cat\xe1logo la utiler\xeda o el vestuario que necesita.

      ### Tecnolog\xedas

      Sitio responsivo con experiencia de reservas y compras en l\xednea, desarrollado con WordPress y WooCommerce.`}];e.s(["f",0,o])}])})();