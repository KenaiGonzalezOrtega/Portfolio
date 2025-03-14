import type { TFunction } from "i18next";

export default function Presentation({ t }: { t: TFunction }) {
  return (
    <header className="text-center py-20 text-text-primary dark:text-dark-text-primary dark:bg-dark-background-primary">
      <h1 className="text-4xl font-bold text-title-primary dark:text-dark-title-primary mb-4">
        {t("header.presentation",)} <span className="text-title-alternative dark:text-dark-title-alternative">Kenai</span>
      </h1>
      <p className="text-xl mb-6">
        {t("header.description.part1")}
      </p>
      <p className="text-lg">
        {t("header.description.part2")}
      </p>
    </header>

  )
}