"use client";

import SearchBar from "@/components/common/SearchBar";
import FilterSortBar from "../common/FilterSortBar";

const TopicsNav = () => {
  return (
    <nav className="flex justify-between items-center my-[8px] py-[8px] w-full border border-green-600">
      {/* left Navigation Part */}
      <SearchBar />
      {/* right Navigation Part*/}
      <FilterSortBar/>
    </nav>
  );
};

export default TopicsNav;
