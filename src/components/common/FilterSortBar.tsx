const FilterSortBar = () => {
  return (
        <div className="border h-full w-[45%] md:w-[30%] flex items-center gap-1 md:gap-2.5 justify-end sm:flex-row flex-col">
            <button className="border border-amber-300 w-full text-sm md:w-[25%] bg-black text-white rounded-full p-1 md:text-base md:px-3 md:py-1.5 transition hover:opacity-90 cursor-pointer">filter</button>
            <button className="border border-amber-300 w-full text-sm md:w-[25%] bg-black text-white rounded-full p-1 md:text-base md:px-3 md:py-1.5 transition hover:opacity-90 cursor-pointer">sort</button>
        </div>
  )
}

export default FilterSortBar