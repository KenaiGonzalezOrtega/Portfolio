import type { TFunction } from "i18next";

export default function Presentation({ t }: { t: TFunction }) {
  return (
    <header className="text-center py-20">
      <h1 className="text-4xl font-bold text-primary mb-4">
        {t("header.presentation",)} <span className="text-secondary">Kenai</span>
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        {t("header.description.part1")}
      </p>
      <p className="text-lg text-gray-600">
        {t("header.description.part2")}
      </p>
    </header>

  )
}