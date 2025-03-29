import { Section, Container } from "@/components/craft";
import Image from "next/image";
import React from "react";

function Actualite() {
  return (
    <div>
      <div className="bg-blue min-h-[600px] text-white p-6 relative">
        <Section>
          <Container>
            {/* Date */}
            <div className="bg-white text-blue text-sm font-semibold py-1 px-3 rounded-full inline-block mb-6">
              11 juin 2024
            </div>

            {/* Title and subtitle */}
            <h1 className="text-4xl font-bold mb-4 max-w-3xl">
              Descente Au Siège Du Secretariat General De La Cooperation
              Internationale Et Francophonie
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Stratégie de notre mission dans la réalisation des 6 engagements
              du contrat social du Président de la République
            </p>
          </Container>
        </Section>
      </div>

      <div className="bg-white ">
        <Section>
          <Container className="relative -top-44 z-10">
            {/* Main content area */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Image */}
              <div className="md:w-2/3">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/articles/article.png?height=400&width=600"
                    alt="Group of officials at the Secretariat General"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Publication info */}
              <div className="md:w-1/3">
                <div className="bg-[#F3F5F7] text-blue p-4 rounded-lg">
                  <h2 className="font-bold mb-2">Date de publication</h2>
                  <p>11 juin 2024</p>
                  <h2 className="font-bold mt-4 mb-2">Dernière édition</h2>
                  <p>11 juin 2024</p>
                </div>
              </div>
            </div>

            {/* Article text */}
            <div className="mt-8 text-lg">
              <p>
                A-Level students at Lincoln College achieved a 12% increase in
                A* to C grades compared to last year, with the overall pass rate
                rising to 98%.
              </p>
              <p className="mt-4">
                Lincoln College Group, which includes Lincoln College, Newark
                College, and the Air & Space Institute (ASI), achieved a 91%
                pass rate across Level 3 technical training (including BTECs).
                This is 5% higher than the national average, and the Group saw
                an 8% increase in higher grades. The majority of the College's T
                Level students also achieved high grades.
              </p>
              <p className="mt-4">
                This year, we celebrated the success of all Level 3 learners,
                including those in Technical Training, A Levels and T Levels.
                The dedication and hard work of our students, combined with the
                support of our staff, have led to these impressive results.
              </p>
              <p className="mt-4">
                This year, we celebrated the success of all Level 3 learners,
                including those in Technical Training, A Levels and T Levels.
                The dedication and hard work of our students, combined with the
                support of our staff, have led to these impressive results.
              </p>
              <p className="mt-4">
                This year, we celebrated the success of all Level 3 learners,
                including those in Technical Training, A Levels and T Levels.
                The dedication and hard work of our students, combined with the
                support of our staff, have led to these impressive results.
              </p>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}

export default Actualite;
