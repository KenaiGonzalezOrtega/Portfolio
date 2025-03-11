import { Link, useLocation } from "wouter";
import GoBackIcon from "../icons/GoBackIcon";
import type { TFunction } from "i18next";

export default function BackToMainPageButton({ t }: { t: TFunction }) {
  const [location] = useLocation()
  if (location === "/") {
    return null
  }
  return (
    <div className="absolute flex items-center justify-center gap-4 top-4 left-4">
      <Link className="flex flex-col gap-4 md:flex-row " href="/">
        <GoBackIcon />
        <span className="hidden font-semibold md:block text-secondary-text">
          {t('backToHome')}
        </span>

      </Link>
    </div>
  )
}