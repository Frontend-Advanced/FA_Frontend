import { Clock, BookOpen, Video, ClipboardCheck, FileText } from "lucide-react";

const TopicsCard = () => {
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
        <div className=" flex items-center my-4 flex-wrap justify-between space-x-0.5 font-bold ">
          <div className="flex items-center gap-1 ">
            <BookOpen size={15} className="text-[#02542D]"/>
            {/* Daigrams */}
            <span className="text-[10px]">5 Diagrams</span>
          </div>
          <div className="flex items-center gap-1">
            <Video size={15} className="text-[#02542D]"/>
            {/* Videos */}
            <span className="text-[10px]">7 Videos</span>
          </div>
          <div className="flex items-center gap-1">
            <ClipboardCheck size={15} className="text-[#02542D]"/>
            {/* Practices */}
            <span className="text-[10px]">5 Practices</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText size={15} className="text-[#02542D]"/>
            {/* Examples */}
            <span className="text-[10px]">5 Examples</span>
          </div>
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
