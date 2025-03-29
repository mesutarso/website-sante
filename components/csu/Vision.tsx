import Image from 'next/image'
import React from 'react'

function Vision() {
  return (
    <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue">Notre vision</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Dans une République engagée pour l&apos;avenir, la Couverture Santé Universelle repose sur trois piliers :
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                <span className="font-semibold">L&apos;équité</span>,
              </li>
              <li>
                La <span className="font-semibold">qualité des soins irréprochable</span>,
              </li>
              <li>
                et La <span className="font-semibold">protection sociale pour tous</span>.
              </li>
            </ul>
            <p className="text-lg mt-6">
              Des hommes et des femmes de tout âge, en bonne santé, capables de porter le développement
              socio-économique de la RDC.
            </p>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image src="/images/cnsu-banner.jpeg" alt="Population de la RDC" fill className="object-cover" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Vision
