import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            presentation: "Hi, I'm",
            description: {
              part1: "Computer Engineer passionate about technology and innovation.",
              part2: "I am constantly looking for new challenges to create innovative solutions."
            }
          },

          about: {
            title: "About me",
            description: "I'm a full-stack developer with a focus on creating solutions that solve real problems. My passion for technology leads me to constantly explore new tools and methodologies. I seek to contribute to innovative projects and continue learning along the way."
          },
          skills: {
            title: "My skills"
          },
          softSkills: {
            title: "Soft skills",
            texts: {
              "Team work": "Team work",
              "Adaptable": "Adaptability",
              "Problem solving": "Problem solving",
              "Attention to detail": "Attention to detail",
              "Open Mindedness": "Open Mindedness",
              "Continuous Learning": "Continuous Learning"
            }
          },
          contact: {
            title: "Contact",
            email: "Send email"
          },
          projects: {
            title: "My projects",
            technologies: "Technologies",
            more: "See more",
            "SimpLink": {
              short: "SimpLink is a web application for creating and managing short URLs. It offers a fast, secure, and efficient solution for sharing links.",
              description: "SimpLink is a web application thet lets you create and manage short URLs efficiently, offering a simple solution to the problem of long and difficult-to-share URLs. The tool helps users generate shorter links, enhancing the user experience when sharing content on digital platforms, through messages or on social networks",
              technologies: "The project backend is developed in <span class='font-bold italic'>Node.js with Express</span>, also utilizing a <span class='font-bold italic'>Hexagonal Architecture</span>, which facilitates the separation of responsibilities and scalability, making the backend well-organized and easily adaptable to future expansions. <br />Regarding the frontend, it is developed in <span class='font-bold italic'>React</span>, providing a smooth, reactive, and dynamic interface, that enhances the user experience. Additionally, <span class='font-bold italic'>TypeScript</span> is used in the frontend for better type control and to prevent such errors.",

            }
          },
          backToHome: "Back to main page"

        }
      },

      es: {
        translation: {
          header: {
            presentation: "Hola, soy",
            description: {
              part1: "Ingeniero Informático apasionado por la tecnología y la innovación.",
              part2: "Estoy en constante búsqueda de nuevos desafíos para crear soluciones innovadoras."
            }

          },
          about: {
            title: "Sobre mí",
            description: "Soy un desarrollador full-stack con un enfoque en la creación de soluciones que resuelvan problemas reales. Mi pasión por la tecnología me lleva a explorar constantemente nuevas herramientas y metodologías. Busco contribuir a proyectos innovadores y seguir aprendiendo a lo largo del camino."
          },
          skills: {
            title: "Mis habilidades"
          },
          softSkills: {
            title: "Habilidades Personales",
            texts: {
              "Team work": "Trabajo en equipo",
              "Adaptable": "Adaptabilidad",
              "Problem solving": "Resolución de problemas",
              "Attention to detail": "Atención al detalle",
              "Open Mindedness": "Mentalidad abierta",
              "Continuous Learning": "Aprendizaje continuo"
            }
          },
          contact: {
            title: "Contacto",
            email: "Enviar un email "
          },
          projects: {
            title: "Mis proyectos",
            technologies: "Tecnologías",
            more: "Ver más",
            "SimpLink": {
              short: "SimpLink es una aplicación web para crear y gestionar URL cortas. Ofrece una solución rápida, segura y eficiente para compartir enlaces.",
              description: "SimpLink es una aplicación web que permite crear y gestionar URLs cortas de forma eficiente, ofreciendo una solución sencilla a la problematica de las URLs largas y complicadas de compartir. La herramienta ayuda a los usuarios a generar enlaces mas cortos, mejorando así la experiencia al compartir contenido en plataformas digitales, mensajes o redes sociales.",
              technologies: "El backend del proyecto está desarrollado en <span class='font-bold italic'>Node.js con Express</span>, utilizando además una <span class='font-bold italic'>Arquitectura Hexagonal</span>, la cual facilita la separación de responsabilidades y la escalabilidad, lo que hace que el backend esté bien organizado y que se pueda adaptar fácilmente a futuras expansiones. <br /> Respecto al frontend, está desarrollado en <span class='font-bold italic'>React</span>, lo que proporciona una interfaz fluida, reactiva y dinámica, lo que mejora la experiencia de usuario.Además, en el frontend se utiliza <span class='font-bold italic'>TypeScript</span> para un mejor control del tipado y evitar errores de este tipo."
            }
          },
          backToHome: "Volver a la página principal"


        }

      }
    }
  });

export default i18n;
