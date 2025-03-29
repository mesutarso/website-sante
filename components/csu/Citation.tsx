import Image from 'next/image'
import React from 'react'

function Citation() {
  return (
    <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto bg-blue p-8 md:p-12 rounded-lg relative">
          <div className="text-6xl font-serif text-white absolute top-4 left-6">&quot;</div>
          <blockquote className="text-lg md:text-xl text-white pl-8 pt-6">
            <p>
              Conscient que la santé est un des droits fondamentaux des congolais, j&apos;en ai fait l&apos;un des principaux
              piliers de mon action à la tête de l&apos;Etat. Ma vision est que tout congolais ait accès à tous les soins et
              services de santé de base dont il a besoin, sans encourir une ruine financière ou économique.
            </p>
            <div className='flex items-center mt-10'>
            <Image src={'/images/president.jpg'} height={80} width={80} alt='Félix Antoine TSHISEKEDI TSHILOMBO' className='rounded-full'/>
            <footer className="ml-6 font-semibold">
              Félix Antoine TSHISEKEDI TSHILOMBO
              <br />
              <span className="font-normal text-sm">Président de la République Démocratique du Congo</span>
            </footer>
            </div>
          </blockquote>
        </div>
      </section>
  )
}

export default Citation
