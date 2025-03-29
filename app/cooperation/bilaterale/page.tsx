
import BilateralGrid from "@/components/cooperation/bilateral";
import Hero from "@/components/cooperation/hero";
import Representation from "@/components/cooperation/representation/representation";
import Description from "@/components/cooperation/section";

function Bilaterale() {
  return (
    <>
      <Hero title={`LA cooperation bilaterale`}/>
      <Description text={`La coopération bilatérale fait référence à la collaboration entre deux pays, généralement sous forme d'accords ou de partenariats, dans divers domaines comme l'économie, la culture, l'éducation, la sécurité, ou la technologie. Elle implique des échanges réciproques, des projets conjoints, et des initiatives visant à renforcer les relations diplomatiques et à favoriser le développement mutuel des nations impliquées.`} />
      <BilateralGrid />
      <Representation />
    </>
  );
}

export default Bilaterale;
