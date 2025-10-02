import Hero from "@/components/main/Hero";

const HomePage = () => {
  return (
    <main className="w-full flex justify-center items-center ">
      <div className="max-w-6xl h-full flex flex-1 items-start justify-between md:flex-row flex-col gap-y-10">
      <Hero/>
      </div>
    </main>
  );
};
export default HomePage;
