"use client";

import { useState, useRef } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleExpand = () => {
    setExpanded(true);
    setTimeout(() => {
      inputRef.current?.focus(); // auto-focus input after expand animation
    }, 250);
  };

  const handleBlur = () => {
    // collapse only if input is empty
    if (inputRef.current && inputRef.current.value.trim() === "") {
      setExpanded(false);
    }
  };

  return (
    <div className=" w-full sm:w-[60%] md:w-[40%] lg:w-[30%] flex items-center gap-3">
      {/* Search input with icon */}
      <div
        className={`flex md:items-center transition-all duration-500 ease-in-out ${
          expanded
            ? "w-[60%] border border-gray-200 rounded-full md:px-3 py-1 bg-white text-gray-700"
            : "p-[4px] md:p-1 justify-center bg-black text-white rounded-full cursor-pointer"
        }`}
        onClick={!expanded ? handleExpand : undefined}
      >
        {/* Search Icon */}
        <Search className="cursor-pointer w-[20px] h-[20px] md:w-[24px] md:h-[24px]" />

        {/* Input field (hidden when collapsed) */}
        {expanded && (
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent outline-none text-sm w-full text-gray-700"
            onBlur={handleBlur}
          />
        )}
      </div>

      {/* Search button */}
      <button className="bg-black text-white rounded-full p-1 text-sm md:text-base md:px-3 md:py-1.5 transition hover:opacity-90 cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
