"use client";
import { useState, useMemo } from "react";
import TopicsCard from "../common/TopicsCard";
import { TOPICS_DATA } from "../../constants/topicsData";

interface CardContainerProps {
  searchQuery: string;
}

const CardContainer: React.FC<CardContainerProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Filter topics by search query
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return TOPICS_DATA;
    return TOPICS_DATA.filter(
      (topic) =>
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredTopics.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredTopics.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col items-center gap-6">
      {/* Cards Row */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {currentCards.length > 0 ? (
          currentCards.map((topic, index) => (
            <TopicsCard
              key={index}
              title={topic.title}
              description={topic.description}
              duration={topic.duration}
              imageUrl={topic.imageUrl}
              stats={topic.stats}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10 font-medium">
            No topics found for “{searchQuery}”
          </p>
        )}
      </div>

      {/* Pagination Circles */}
      {filteredTopics.length > cardsPerPage && (
        <div className="flex justify-center items-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#D9D9D9] text-black cursor-pointer transition-all duration-300 font-bold 
                ${currentPage === page ? "scale-135 shadow-md" : " opacity-50 hover:scale-100"}
              `}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default CardContainer;
