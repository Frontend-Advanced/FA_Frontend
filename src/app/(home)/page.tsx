import Hero from "@/components/main/Hero";
import MainContainer from "@/components/main/MainContainer";
import Explore from "@/components/main/Explore";

const HomePage = () => {
  return (
    <main className="flex justify-center items-center ">
      <div className="max-w-6xl">
      <Hero/>
      <div className="md:py-8 py-4">
        <MainContainer/>
      </div>
      <div>
        <Explore />
      </div>
      </div>
    </main>
  );
};
export default HomePage;
