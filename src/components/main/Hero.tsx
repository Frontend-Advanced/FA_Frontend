import H1 from "../common/H1";
// import HeroSectionImage from "../../assets/Hero-section-image.png";


const Hero = () => {
  return (
    <>
        <section className="w-full sm:py-20 py-10">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <H1 className="md:text-4xl">Level up frontend.</H1>
                        <H1 className="text-[#004715] md:text-4xl">Master advanced web development topics.</H1>
                    </div>

                    <div className="md:mt-16 mt-8">
                        <img src="Hero-section-image.png" alt="This img tag contain the image for Hero Section" className="w-full object-cover md:rounded-3xl rounded-xl"/>  
                    </div>
                </div>
            </section>
    </>
  )
};
export default Hero;
