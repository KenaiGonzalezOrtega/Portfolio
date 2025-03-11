import type { TFunction } from "i18next";
import type Proyect from "../interfaces/Proyect";
import generateId from "../services/generateID";
import { Link } from "wouter";

export default function ProyectCard({ t, proyect }: { t: TFunction, proyect: Proyect }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-2/3 grid grid-rows-[min-content_1fr_min-content_min-content] gap-4">
      <h3 className="text-2xl font-semibold text-primary">{proyect.name}</h3>
      <p className="mt-4 text-lg text-gray-700">
        {t(`proyects.${proyect.name}.short`)}
      </p>
      <div className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-secondary-text">{t('proyects.technologies')}</h4>
        <div className="grid grid-cols-5 gap-5">

          {proyect.icons.map(item => {
            return (
              <div className="w-6 h-6" key={generateId()}>
                {item}
              </div>
            )
          })}
        </div>
      </div>

      <footer>
        <Link href={`/proyect/${proyect.id}`} className="inline-block mt-4 text-lg font-semibold text-primary">
          {t('proyects.more')}
        </Link>



      </footer>

    </div>
  )
}