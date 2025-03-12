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
              short: "SimpLink is a web application for creating and managing short URLs. It offers a fast, secure, and efficient solution for sharing links."
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
              short: "SimpLink es una aplicación web para crear y gestionar URL cortas. Ofrece una solución rápida, segura y eficiente para compartir enlaces."
            }
          },
          backToHome: "Volver a la página principal"


        }

      }
    }
  });

export default i18n;
