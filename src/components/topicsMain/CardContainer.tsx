"use client";
import { useState, useMemo } from "react";
import TopicsCard from "../common/TopicsCard";
import { TOPICS_DATA } from "../../constants/topicsData";

interface CardContainerProps {
  searchQuery: string;
  filterOption: string;
  sortOption: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  searchQuery,
  filterOption,
  sortOption,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Filter + Sort + Search logic
  const filteredTopics = useMemo(() => {
    let topics = [...TOPICS_DATA];

    // Search filter
    if (searchQuery.trim()) {
      topics = topics.filter(
        (topic) =>
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter option
    if (filterOption === "Newest") {
      topics.reverse(); // assuming later items are newer
    } else if (filterOption === "Popular") {
      topics.sort((a, b) => b.stats[1].value - a.stats[1].value); // sort by video count
    }

    // Sort option
    if (sortOption === "A–Z") {
      topics.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "Z–A") {
      topics.sort((a, b) => b.title.localeCompare(a.title));
    }

    return topics;
  }, [searchQuery, filterOption, sortOption]);

  const totalPages = Math.ceil(filteredTopics.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = filteredTopics.slice(startIndex, endIndex);

  return (
    <section className="flex flex-col items-center gap-6">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {currentCards.length > 0 ? (
          currentCards.map((topic, index) => (
            <TopicsCard key={index} {...topic} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-10 font-medium">
            No topics found for “{searchQuery}”
          </p>
        )}
      </div>

      {filteredTopics.length > cardsPerPage && (
        <div className="flex justify-center items-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#D9D9D9] text-black cursor-pointer transition-all duration-300 font-bold 
                ${
                  currentPage === page
                    ? "scale-135 shadow-md"
                    : " opacity-50 hover:scale-100"
                }`}
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
