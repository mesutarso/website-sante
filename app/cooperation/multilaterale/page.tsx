
import Hero from "@/components/cooperation/hero";
import MultilateralGrid from "@/components/cooperation/multilateral";
import Representation from "@/components/cooperation/representation/representation";
import Description from "@/components/cooperation/section";
function Multilaterale() {
  return (
    <>
       <Hero title={`LA cooperation Multilaterale`}/>
       <Description text={`La coopération bilatérale fait référence à la collaboration entre deux pays, généralement sous forme d'accords ou de partenariats, dans divers domaines comme l'économie, la culture, l'éducation, la sécurité, ou la technologie. Elle implique des échanges réciproques, des projets conjoints, et des initiatives visant à renforcer les relations diplomatiques et à favoriser le développement mutuel des nations impliquées.`} />
       <MultilateralGrid />
       <Representation />
    </>
  )
}

export default Multilaterale
