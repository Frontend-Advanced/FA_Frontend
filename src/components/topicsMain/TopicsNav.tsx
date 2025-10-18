"use client";

import SearchBar from "@/components/common/SearchBar";

const TopicsNav = () => {
  return (
    <nav className="flex justify-between h-[56px] my-[8px] py-[8px] w-full border border-green-600">
      {/* left Navigation Part */}
      <SearchBar />
      {/* right Navigation Part*/}
      <div className="border h-full w-[30%] flex items-center gap-2.5 justify-end">
        <div className="border border-amber-300 rounded-full flex items-center">filter</div>
        <div className="border border-amber-300 rounded-full flex items-center">sort</div>
      </div>
    </nav>
  );
};

export default TopicsNav;
