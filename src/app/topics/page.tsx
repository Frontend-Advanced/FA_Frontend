import TopicsNav from "@/components/topicsMain/TopicsNav";
import CardContainer from "@/components/topicsMain/CardContainer";

const Page = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="max-w-6xl h-full flex-1 items-center">
        <TopicsNav />
        {/* Card Container */}
        <div className="w-full my-3 py-2 md:my-6 md:py-4">
            <CardContainer/>
        </div>
      </div>
    </section>
  );
};

export default Page;