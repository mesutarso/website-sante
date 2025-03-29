import Image from "next/image";
import React from "react";
import { Section } from "../craft";

function Piliers() {
  return (
    <>
    <Section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-blue">
          Les trois piliers de notre mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#253d8a] text-white p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-6">
              <Image
                src="/images/mortalite.png"
                alt="Réduire la mortalité"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Réduire la mortalité et la morbidité
            </h3>
            <p className="text-white/90">
              Améliorer l&apos;accès aux soins de santé essentiels pour tous les
              Congolais
            </p>
          </div>

          <div className="bg-[#f82f43] text-white p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-6">
              <Image
                src="/images/protection.png"
                alt="Protection sociale"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Promouvoir la protection sociale
            </h3>
            <p className="text-white/90">
              Garantir une couverture sociale pour tous sans risque de ruine
              financière
            </p>
          </div>

          <div className="bg-[#fbd917] text-blue-900 p-8 rounded-lg flex flex-col items-center text-center">
            <div className="w-32 h-32 mb-6">
              <Image
                src="/images/developpement.png"
                alt="Développement économique"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Contribuer au développement économique du pays
            </h3>
            <p className="text-blue-900/90">
              Soutenir la croissance économique par une population en bonne
              santé
            </p>
          </div>
        </div>
      </div>
     
    </Section>
    <div className="relative min-h-[800px]">
<Image src={'/images/sante-universelle.jpeg'} fill alt='discours' className="object-cover" />  
</div>
    </>
  );
}

export default Piliers;
