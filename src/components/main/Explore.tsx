const Explore = () => {
  return (
    <>
      <section className="md:w-full bg-black flex justify-center items-center mt-12 md:h-[600px] h-[300px]">
        <div className="w-full ">
          <h1 className="text-white md:text-4xl text-xl font-bold text-center ">
            Ready for next-level frontend?
          </h1>
          <p className="text-[#999999] w-[280px] text-center m-auto text-xl my-4">
            Access advanced topics and curated content.
          </p>
          <div className="flex justify-center items-center ">
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 hover:cursor-pointer transition duration-300">
              Start Exploring
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Explore;
