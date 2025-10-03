import { SectionItem } from '@/constants/index'; 

interface SectionProps {
  item: SectionItem; 
  className?: string; 
}

const Section: React.FC<SectionProps> = ({ item, className }) => {

  const defaultClasses = 'md:w-full flex flex-col flex-col-reverse md:flex-row  ';

  const combinedClasses = `${defaultClasses} ${className || ''}`.trim();

  return (
    <section className={combinedClasses}>
        {/* Left part */}
      <div className="md:w-1/2 md:m-auto my-8 md:my-0 flex flex-col md:justify-center ">
            <h1 className="lg:ml-20 md:ml-10 mt-8 md:mt-0 text-4xl text-left text-black font-bold md:w-[320px]">
                {item.h1Content}
            </h1>
            <p className="lg:ml-20 md:ml-10 mt-4 md:mt-4 lg:pr-28 md:pr-8 text-2xl lg:text-3xl text-left text-[#999999]">
                {item.pContent}
            </p>
        </div>

        {/* Right part */}
      <div className="md:w-1/2 w-full h-full flex justify-center items-center">
        <img 
          src={item.src} 
          alt={item.alt} 
          className="md:rounded-2xl md:h-[400px] lg:h-[480px] w-full object-cover" 
        />
      </div>
    </section>
  );
};

export default Section;