import TopicsCard from "../common/TopicsCard"

const CardContainer = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 ">
        <TopicsCard />
        <TopicsCard />
        <TopicsCard />

    </section>
  )
}

export default CardContainer
