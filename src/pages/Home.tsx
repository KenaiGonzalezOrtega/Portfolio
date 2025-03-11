import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Presentation from "../components/Presentation";
import Proyects from "../components/Proyects";
import SkillsSection from "../components/SkillsSection";
import SoftSkillsSection from "../components/SoftSkillsSection";
import { TFunction } from "i18next";


export default function Home({ t }: { t: TFunction }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">


      <Presentation t={t} />

      <AboutMe t={t} />

      <SkillsSection t={t} />

      <SoftSkillsSection t={t} />

      <Proyects t={t} />

      <Contact t={t} />

      <Footer />

    </div>
  );
};
