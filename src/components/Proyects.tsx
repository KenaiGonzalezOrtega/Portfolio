import type { TFunction } from "i18next";
import proyects from "../data/proyects"
import Carousel from "./Carousel";
import ProyectCard from "./ProyectCard";

export default function Proyects({ t }: { t: TFunction }) {
  let visibleItems: number;
  const width = window.innerWidth
  if (width >= 1024) {
    visibleItems = 3
  } else if (width >= 768) {
    visibleItems = 2
  } else {
    visibleItems = 1
  }
  //const visibleItems = window.innerWidth >= 1024 ? 3 : 2
  return (
    <section id="projects" className="py-16 w-full bg-white px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">{t('proyects.title')}</h2>
      </div>
      <Carousel visibleItems={visibleItems} totalItems={proyects.length}>
        {proyects.map(proyect => <ProyectCard t={t} proyect={proyect} key={proyect.id} />)}
      </Carousel>
    </section>
  )
}