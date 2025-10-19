"use client";
import { useState } from "react";
import TopicsNav from "@/components/topicsMain/TopicsNav";
import CardContainer from "@/components/topicsMain/CardContainer";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-6xl h-full flex-1 items-center">
        <TopicsNav onSearch={setSearchQuery} />
        {/* Card Container */}
        <div className="w-full my-3 py-2 md:my-6 md:py-4">
          <CardContainer searchQuery={searchQuery} />
        </div>
      </div>
    </section>
  );
};

export default Page;