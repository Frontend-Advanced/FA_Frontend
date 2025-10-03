import Section from "@/components/common/Section";
import { SECTION_CONTENT } from "@/constants";

const MainContainer = () => {
  // Destructure the SECTION_CONTENT array for easier access
  const [section1, section2, section3] = SECTION_CONTENT;

  return (
    <>
      <div className="lg:py-1 ">
        
        {/* First Section */}
        <Section 
          item={section1} // first object passed as prop
          className="rounded-2xl "
        />
        
        {/* Second Section*/}
        <Section 
          item={section2} // second object passed as prop
          className="md:flex-row-reverse"
        />
        
        {/* Third Section*/}
        <Section 
          item={section3} // third object passed as prop
          className="md:w-[430px]"
        />
      </div>
    </>
  );
};

export default MainContainer;