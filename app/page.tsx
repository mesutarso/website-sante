import Hero from "@/components/home/hero";
import MotMinistre from "@/components/home/mot-ministre";
import CompteRendu from "@/components/home/compte-rendu";
import CooperationGrid from "@/components/home/CooperationGrid";
import DoubleCards from "@/components/home/double-cards";
import ArticleSection from "@/components/articles";
import EventsSection from "@/components/home/events";
import Role from "@/components/home/role";

async function HomePage() {
  return (
    <div>
      <Hero />
      <MotMinistre />
      <Role />
      <CooperationGrid />
      <ArticleSection />
      <EventsSection />
      <DoubleCards />
    </div>
  )
}

export default HomePage