import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SpainFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="100%" height="100%">
    <title>Español</title>
    <rect width="3" height="2" fill="#aa151b" />
    <rect y="0.5" width="3" height="1" fill="#f1bf00" />
  </svg>
);

export const EnglandFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 426" width="100%" height="100%">
    <title>English</title>
    <rect width="640" height="426" fill="#fff" />
    <path fill="#cf142b" d="M0 189h640v48H0zM296 0h48v426h-48z" />
  </svg>
);


const lngs: { [key: string]: { nativeName: string, flag: React.ComponentType } } = {
  en: { nativeName: "En", flag: EnglandFlag },
  es: { nativeName: "Es", flag: SpainFlag }
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(i18n.language)



  const handleClick = (lng: string) => {
    i18n.changeLanguage(lng)
    setSelected(lng)
  }

  return (
    <div className="absolute top-4 right-4 flex justify-center gap-4">
      {Object.keys(lngs).map((lng) => {
        const FlagComponent = lngs[lng].flag;
        return (
          <button
            className={`border-2 rounded-2xl cursor-pointer grid grid-cols-[.3fr_.7fr] justify-center items-center p-2 ${selected === lng ? "border-gray-400" : "border-transparent"}`}
            key={lng}
            type="button"
            onClick={handleClick.bind(null, lng)}
          >

            <FlagComponent />
            {lngs[lng].nativeName}
          </button>
        );
      })}
    </div>
  );
}
