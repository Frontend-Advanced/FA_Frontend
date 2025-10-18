import TopicsNav from "@/components/topicsMain/TopicsNav";

const Page = () => {
  return (
    <section className="w-full flex justify-center items-center border border-red-600">
      <div className="max-w-6xl h-full flex-1 items-center border border-blue-600">
        <TopicsNav />
        <div className="border h-[251px] w-full">Topic Page Content</div>
      </div>
    </section>
  );
};

export default Page;