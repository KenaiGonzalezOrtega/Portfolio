import type { TFunction } from "i18next";

export default function AboutMe({ t }: { t: TFunction }) {
  return (
    <section id="about" className="py-16 bg-background-alternative dark:bg-dark-background-alternative  w-full max-w-7xl text-text-alternative dark:text-dark-text-alternative px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-title-alternative dark:text-dark-title-alternative">{t('about.title')}</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img
          src="https://vleztvuwggqccychzzli.supabase.co/storage/v1/object/public/portfolio//img_profile.jpg"
          alt="Kenai"
          className="rounded-full aspect-square w-60 h-auto mb-6 md:mb-0"
        />
        <p className="text-lg text-center max-w-3/4">
          {t('about.description')}
        </p>
      </div>
    </section>
  )
}