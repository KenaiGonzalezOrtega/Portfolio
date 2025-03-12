import type { TFunction } from "i18next";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Projects from "../components/Projects";
import SkillsSection from "../components/SkillsSection";
import SoftSkillsSection from "../components/SoftSkillsSection";


export default function Home({ t }: { t: TFunction }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">


      <Presentation t={t} />

      <AboutMe t={t} />

      <SkillsSection t={t} />

      <SoftSkillsSection t={t} />

      <Projects t={t} />

      <Contact t={t} />

      <Footer />

    </div>
  );
};
