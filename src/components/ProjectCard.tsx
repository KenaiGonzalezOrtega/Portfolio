import type { TFunction } from "i18next";
import { Link } from "wouter";
import type Project from "../interfaces/Project";
import generateId from "../services/generateID";

export default function ProjectCard({ t, project }: { t: TFunction; project: Project }) {
  return (
    <div className="bg-background-secondary dark:bg-dark-background-secondary p-6 rounded-lg shadow-md w-2/3 grid grid-rows-[min-content_1fr_min-content_min-content] gap-4 text-text-secondary dark:text-dark-text-secondary">
      <h3 className="text-2xl font-semibold text-title-secondary dark:text-dark-title-secondary">{project.name}</h3>
      <p className="mt-4 text-lg">
        {t(`projects.${project.name}.short`)}
      </p>
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-title-secondary dark:text-dark-title-secondary">
          {t("projects.technologies")}
        </h4>
        <div className="grid grid-cols-5 gap-5">
          {project.icons.map((item) => {
            return (
              <div className="w-6 h-6" key={generateId()}>
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <footer>
        <Link
          href={`/project/${project.id}`}
          className="inline-block mt-4 text-lg font-semibold  text-highlight dark:text-dark-highlight"
        >
          {t("projects.more")}
        </Link>
      </footer>
    </div>
  );
}
