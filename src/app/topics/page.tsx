"use client";
import { useState } from "react";
import TopicsNav from "@/components/topicsMain/TopicsNav";
import CardContainer from "@/components/topicsMain/CardContainer";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("");

  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-6xl h-full flex-1 items-center">
        <TopicsNav
          onSearch={setSearchQuery}
          onFilterChange={setFilterOption}
          onSortChange={setSortOption}
        />
        <div className="w-full my-3 py-2 md:my-6 md:py-4">
          <CardContainer
            searchQuery={searchQuery}
            filterOption={filterOption}
            sortOption={sortOption}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
