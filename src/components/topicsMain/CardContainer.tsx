"use client";
import { useState } from "react";
import TopicsCard from "../common/TopicsCard"
import { TOPICS_DATA } from "../../constants/topicsData";

const CardContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // number of cards shown per page

  // Pagination logic
  const totalPages = Math.ceil(TOPICS_DATA.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = TOPICS_DATA.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col items-center gap-6">
      {/* Cards Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {currentCards.map((topic, index) => (
          <TopicsCard
            key={index}
            title={topic.title}
            description={topic.description}
            duration={topic.duration}
            imageUrl={topic.imageUrl}
            stats={topic.stats}
          />
        ))}
      </div>

        {/* Pagination Circles */}
      <div className="flex justify-center items-center mt-6 ">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#D9D9D9] text-black font-semibold 
              transition-all duration-300 ease-in-out transform cursor-pointer
              ${
                currentPage === page
                  ? "scale-145 bg-[#D9D9D9] shadow-md"
                  : " opacity-80 hover:bg-[#a4a3a3]"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

    </section>
  )
}

export default CardContainer
