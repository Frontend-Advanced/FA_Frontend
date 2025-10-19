import TopicsCard from "../common/TopicsCard"
import { Boxes, Video, Code, BookMinus } from "lucide-react"

const CardContainer = () => {
  const topicsData = [
    {
      title: "Design Patterns Explained",
      description: "In this course, we’ll explain every single design pattern in frontend development.",
      duration: "12min",
      imageUrl: "01-Topic-Design-Patterns.png",
      stats: [
        { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 5 },
        { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 7 },
        { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
        { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 5 },
      ],
    },
    {
      title: "JavaScript ES6 Deep Dive",
      description: "Master modern JavaScript features and boost your coding productivity.",
      duration: "18min",
      imageUrl: "01-Topic-Design-Patterns.png",
      stats: [
        { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 3 },
        { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 8 },
        { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 6 },
        { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 4 },
      ],
    },
    {
      title: "React Hooks Simplified",
      description: "Understand useState, useEffect, and custom hooks with real-world examples.",
      duration: "15min",
      imageUrl: "01-Topic-Design-Patterns.png",
      stats: [
        { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 4 },
        { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 5 },
        { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 7 },
        { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 3 },
      ],
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center gap-4 ">
        {topicsData.map((topic, index) => (
        <TopicsCard
          key={index}
          title={topic.title}
          description={topic.description}
          duration={topic.duration}
          imageUrl={topic.imageUrl}
          stats={topic.stats}
        />
      ))}

    </section>
  )
}

export default CardContainer
