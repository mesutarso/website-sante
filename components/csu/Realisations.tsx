function Realisations() {
  return (
    <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue">Nos réalisations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blueSky p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Faire de la couverture santé universelle une réalité en RDC
              </h3>
              <p className="mb-6 text-white text-sm">
                La Constitution de la République démocratique du Congo garantit le droit à la Santé, considéré comme
                l&apos;un des droits fondamentaux de l&apos;Homme. La loi fixant les principes fondamentaux de l&apos;organisation de
                la santé publique en République Démocratique du Congo y institue un système national de couverture santé
                universelle.
              </p>
            </div>

            <div className="bg-[#f6d55c] p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue">
                Plus d&apos;1 million de nouveau-nés accueillis dans des conditions plus sûres
              </h3>
              <p className="mb-6 text-blue text-sm">
                Grâce aux efforts déployés dans le cadre de la Couverture Santé Universelle, plus d&apos;un million de
                nouveau-nés ont été accueillis dans des conditions plus sûres et sereines. Cela représente une avancée
                significative dans la réduction de la mortalité infantile et maternelle.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Realisations
