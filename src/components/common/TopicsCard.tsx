import { Clock, Boxes, Video, Code, BookMinus } from "lucide-react";
import StatItem from "./StatItems";

const TopicsCard = () => {

  const stats = [
    { icon: <Boxes size={15} className="text-[#02542D]" />, label: "Diagrams", value: 5 },
    { icon: <Video size={15} className="text-[#02542D]" />, label: "Videos", value: 7 },
    { icon: <Code size={15} className="text-[#02542D]" />, label: "Practices", value: 5 },
    { icon: <BookMinus size={15} className="text-[#02542D]" />, label: "Examples", value: 5 },
  ];

  return (
    <div className=" hover:scale-[1.02] duration-300 ">
      {/* Image Section */}
      
        <img
          src="01-Topic-Design-Patterns.png"
          alt="Design Patterns"
          className="object-cover w-full h-2/3 border border-[#D9D9D9] rounded-xl "
        />

      {/* Content Section */}
      <div className="p-2.5 bg-[#D9D9D9] rounded-xl -mt-6 sm:-mt-14 md:-mt-6 lg:-mt-8 z-5 md:z-10 relative ">
        <div className="flex justify-between items-center ">
             {/* Title */}
          <a href="#" className="text-sm lg:text-lg font-bold hover:underline">
            Design Patterns Explained
          </a>
          {/* Duration */}
          <div className="flex items-center text-sm">
            <Clock size={16} className="mr-1 text-[#02542D]" />
            <span className="font-bold">12min</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-extrabold tracking-normal text-sm md:text-wrap text-[#999999]">
          In this course we’ll explain every single design patterns in frontend development
        </p>

        {/* Stats Row */}
        <div className="flex items-center my-4 flex-wrap justify-between space-x-0.5">
          {stats.map((item, index) => (
            <StatItem key={index} icon={item.icon} label={item.label} value={item.value} />
          ))}
        </div>

        {/* Button */}
        <button className="w-full bg-black text-white  py-2 rounded-full font-medium hover:opacity-80 cursor-pointer transition">
          View
        </button>
      </div>
    </div>
  );
};

export default TopicsCard;
