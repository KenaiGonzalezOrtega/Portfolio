import { useState } from "react"
import LeftArrowIcon from "../icons/LeftArrowIcon"
import RightArrowIcon from "../icons/RightArrowIcon"

export default function Carousel({ visibleItems, totalItems, children }: { visibleItems: number, totalItems: number, children: React.ReactNode }) {

  const containerWidth = Math.ceil(totalItems / visibleItems) * 100
  const totalPages = Math.ceil(totalItems / visibleItems)
  const pageWidth = containerWidth / totalPages
  const [page, setPage] = useState(0)
  const handleClick = (num: number) => {
    setPage(prev => prev + num)
  }

  return (
    <div className="relative w-full overflow-hidden text-black">
      <button disabled={(page <= 0)} type="button" className="cursor-pointer absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200 z-10 disabled:opacity-40 hover:disabled:bg-white disabled:cursor-auto" onClick={handleClick.bind(null, -1)}>
        <LeftArrowIcon />
      </button>
      <div className={"grid grid-cols-1 transition-transform duration-500 justify-items-center "}
        style={{
          width: `${containerWidth}%`,
          transform: `translateX(-${(pageWidth * page) / totalPages}%)`,
          gridTemplateColumns: `repeat(${visibleItems * totalPages}, minmax(0, 1fr))`
        }}
      >
        {children}
      </div>
      <button disabled={(page >= totalPages - 1)} type="button" className="cursor-pointer absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow hover:bg-gray-200 z-10 disabled:opacity-40 hover:disabled:bg-white disabled:cursor-auto" onClick={handleClick.bind(null, 1)}>
        <RightArrowIcon />
      </button>
    </div>
  )
}