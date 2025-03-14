import { useTranslation } from "react-i18next";
import BackToMainPageButton from "./components/BackToMainPageButton";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Routes from "./routes";

export default function App() {
  const { t } = useTranslation();
  return (
    <div id="app" className="scheme-light-dark">
      <LanguageSwitcher />
      <BackToMainPageButton t={t} />
      <Routes t={t} />
    </div>

  )
}

