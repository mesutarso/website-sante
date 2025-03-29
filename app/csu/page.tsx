import About from '@/components/csu/About'
import Hero from '@/components/csu/Hero'
import Piliers from '@/components/csu/Piliers'
import Realisations from '@/components/csu/Realisations'
import Vision from '@/components/csu/Vision'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Piliers />
      <Vision />
      <Realisations />
    </div>
  )
}

export default page
