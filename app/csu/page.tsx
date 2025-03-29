import About from '@/components/csu/About'
import Citation from '@/components/csu/Citation'
import Hero from '@/components/csu/Hero'
import Piliers from '@/components/csu/Piliers'
import Realisations from '@/components/csu/Realisations'
import Vision from '@/components/csu/Vision'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Piliers />  
      <Vision />
      <Citation />
      <Realisations />
      <About />
    </div>
  )
}

export default page
