"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"

const FilterSortBar = () => {
    const [openMenu, setOpenMenu] = useState<"filter" | "sort" | null>(null);

    const toggleMenu = (menu: "filter" | "sort") => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
        <div className="w-[52%] md:w-[30%] flex items-end  gap-1 text-sm md:gap-2.5 justify-end sm:flex-row flex-col">
            {/* Filter Button */}
            <div className="relative">
                <button onClick={() => toggleMenu("filter")}
                     className="flex gap-1 items-center bg-black text-white rounded-full p-1.5 md:text-base md:px-3 transition hover:opacity-90 cursor-pointer hover:font-bold">
                    <ChevronDown size={20} strokeWidth={3.5} 
                    className={`transition-transform duration-300 ${
                    openMenu === "filter" ? "rotate-180" : ""
                }`}
                />
                    <span className=" text-sm">Filter</span>
                </button>

            {/* Filter Dropdown */}
                {openMenu === "filter" && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md p-2 z-10 animate-fadeIn">
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">Newest</p>
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">Oldest</p>
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">Popular</p>
                  </div>
                )}
      </div>
        {/* Sort Button */}
       <div className="relative">
                <button onClick={() => toggleMenu("sort")}
                     className="flex gap-1 items-center bg-black text-white rounded-full p-1.5 md:text-base md:px-3 transition hover:opacity-90 cursor-pointer hover:font-bold">
                    <ChevronDown size={18} strokeWidth={3.5} 
                    className={`transition-transform duration-300 ${
                      openMenu === "sort" ? "rotate-180" : ""
                    }`}
                    />
                    <span className=" text-sm">Sort</span>
                </button>
            {/* Sort Dropdown */}
                {openMenu === "sort" && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-md p-2 z-10 animate-fadeIn">
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">A–Z</p>
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">Z–A</p>
                    <p className="text-sm text-gray-600 hover:text-black cursor-pointer">By Date</p>
                  </div>
                )}
      </div>

            
        </div>
  )
}

export default FilterSortBar