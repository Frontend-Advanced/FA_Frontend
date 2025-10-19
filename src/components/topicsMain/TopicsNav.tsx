"use client";

import SearchBar from "@/components/common/SearchBar";
import FilterSortBar from "../common/FilterSortBar";

interface TopicsNavProps {
  onSearch: (query: string) => void;
}

const TopicsNav: React.FC<TopicsNavProps> = ({ onSearch }) => {
  return (
    <nav className="flex justify-between items-center my-[8px] py-[8px] w-full">
      <SearchBar onSearch={onSearch} />
      <FilterSortBar />
    </nav>
  );
};

export default TopicsNav;
