import Hero from "@/components/home/hero";
import MotMinistre from "@/components/home/mot-ministre";
import CooperationGrid from "@/components/home/CooperationGrid";
import DoubleCards from "@/components/home/double-cards";
import ArticleSection from "@/components/articles";
import EventsSection from "@/components/home/events";
import Role from "@/components/home/role";

function HomePage() {
  return (
    <div>
      <Hero />
      <MotMinistre />
      {/* <CompteRendu />  remplace par role du ministere */}
      <Role />
      <CooperationGrid />
      <ArticleSection />
      <EventsSection />
      <DoubleCards />
    </div>
  )
}

export default HomePage