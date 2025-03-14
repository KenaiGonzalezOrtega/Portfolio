import type { TFunction } from "i18next";
import softSkills from '../data/softSkills'


export default function SoftSkillsSection({ t }: { t: TFunction }) {

  return (
    <section id="skills" className="flex flex-col items-center w-full py-16 bg-background-secondary dark:bg-dark-background-secondary text-text-secondary dark:text-dark-text-secondary ">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-title-secondary dark:text-dark-title-secondary">
          {t("softSkills.title")}
        </h2>
      </div>
      <ul className="w-full lg:w-1/2 grid grid-cols-2 gap-10">
        {softSkills.map(item => {

          return (
            <li
              key={item.id}
              className="flex flex-col items-center justify-around w-full"
            >
              <div
                key={item.id}
                className="grid grid-rows-[.8fr_0.2fr] justify-items-center gap-5 w-full"
              >
                <div className="w-[100px] h-[100px]">
                  {item.icon}
                </div>

                <p className="text-lg text-primary-text text-center w-full">{t(`softSkills.texts.${item.text}`)}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  );
}
