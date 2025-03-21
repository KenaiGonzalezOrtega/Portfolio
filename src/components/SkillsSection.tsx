import type { TFunction } from "i18next";
import skills from '../data/skills'
import Carousel from "./Carousel";

export default function SkillsSection({ t }: { t: TFunction }) {

  const visibleItems = window.innerWidth >= 1024 ? 3 : 2

  return (
    <section id="skills" className="py-16 w-full bg-background-primary dark:bg-dark-background-primary text-text-primary dark:text-dark-text-primary">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-title-primary dark:text-dark-title-primary">
          {t("skills.title")}
        </h2>
      </div>
      <Carousel visibleItems={visibleItems} totalItems={skills.length}>
        {skills.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-around w-full text-text-primary dark:text-dark-text-primary"
            >
              <div className="w-24">
                {item.icon}
              </div>

              <p className="text-lg ">{item.text}</p>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
