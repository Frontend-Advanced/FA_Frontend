import { ChevronDown } from "lucide-react"

const FilterSortBar = () => {
  return (
        <div className="w-[52%] md:w-[30%] flex items-end  gap-1 text-sm md:gap-2.5 justify-end sm:flex-row flex-col">
            <button className="flex gap-0.5 items-center w-[74px] bg-black text-white rounded-full p-1.5 md:text-base md:px-3 transition hover:opacity-90 cursor-pointer hover:font-bold">
                <ChevronDown size={20} strokeWidth={3.5} />
                <span className=" text-sm">Filter</span>
            </button>
            <button className="flex gap-0.5 items-center w-[74px] bg-black text-white rounded-full p-1.5 md:text-base md:px-3 transition hover:opacity-90 cursor-pointer hover:font-bold">
                <ChevronDown size={18} strokeWidth={3.5} />
                <span className=" text-sm">Sort</span>
            </button>
        </div>
  )
}

export default FilterSortBar