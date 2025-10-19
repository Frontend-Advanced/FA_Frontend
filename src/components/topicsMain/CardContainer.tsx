import TopicsCard from "../common/TopicsCard"
import { TOPICS_DATA } from "../../constants/topicsData";

const CardContainer = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-4 ">
        {TOPICS_DATA.map((topic, index) => (
        <TopicsCard
          key={index}
          title={topic.title}
          description={topic.description}
          duration={topic.duration}
          imageUrl={topic.imageUrl}
          stats={topic.stats}
        />
      ))}

    </section>
  )
}

export default CardContainer
