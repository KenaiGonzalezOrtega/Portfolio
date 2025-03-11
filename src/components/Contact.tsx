import type { TFunction } from "i18next";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

export default function Contact({ t }: { t: TFunction }) {
  return (
    <section id="contact" className="py-16 bg-gray-50 w-full px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-primary">{t('contact.title')}</h2>
      </div>
      <div className="flex flex-col items-center gap-6">
        <a
          href="mailto:gonzalezortegakenai@gmail.com"
          className="text-lg font-semibold text-highlight"
        >
          {t("contact.email")}
        </a>
        <div className="flex gap-4">


          <a
            href="https://www.linkedin.com/in/kenai-jesus-gonzalez-ortega-66270728a/"
            className="text-highlight"
          >
            <div className="w-[50px] h-[50px]">
              <LinkedinIcon />
            </div>
            LinkedIn
          </a>
          <a
            href="https://github.com/KenaiGonzalezOrtega"
            className="text-highlight"
          >
            <div className="w-[50px] h-[50px]">
              <GitHubIcon />
            </div>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
