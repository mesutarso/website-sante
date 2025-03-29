
function About() {
  return (
    <section className="py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue">
        Que signifie la Couverture Santé Universelle (CSU)?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold mr-2">OMS</span>
            <div className="h-1 flex-grow bg-blue-600"></div>
          </div>
          <p className="text-sm">
            En protégeant les gens des conséquences financières du paiement des services de santé à leur charge, on
            réduit le risque qu&apos;ils sombrent dans la pauvreté lorsqu&apos;une maladie soudaine les force à dépenser les
            économies de toute une vie, à vendre leurs biens ou à emprunter, détruisant ainsi leur avenir et ceux de
            leurs enfants.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold mr-2">OIT</span>
            <div className="h-1 flex-grow bg-red-600"></div>
          </div>
          <p className="text-sm">
            Les principaux déficits en matière d&apos;accès aux soins de santé essentiels sont liés à l&apos;insuffisance des
            ressources allouées à la protection de la santé, à la pénurie de personnel et aux taux élevés de
            dépenses à la charge des patients. Cela entraine un risque accru d&apos;appauvrissement et de difficultés
            financières.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold mr-2">ODD</span>
            <div className="h-1 flex-grow bg-yellow-500"></div>
          </div>
          <p className="text-sm">
            Les urgences sanitaires telles que la COVID-19 présentent un risque pour l&apos;humanité tout entière et ont
            démontré que la préparation est indispensable. La pandémie offre donc une occasion de se préparer aux
            urgences sanitaires et d&apos;investir dans les services publics essentiels du XXIe siècle.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
