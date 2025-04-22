"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { MapPin, Phone, Building, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HospitalsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const provinces = [
    {
      name: "Kinshasa",
      hospitals: [
        {
          name: "Hôpital Général de Kinshasa",
          description: "Principal hôpital public de la capitale (anciennement Maman Yemo)",
        },
        { name: "Cliniques Universitaires de Kinshasa", description: "Centre hospitalier universitaire" },
        { name: "Clinique Ngaliema", description: "Établissement public de référence" },
        { name: "Hôpital du Cinquantenaire", description: "Hôpital moderne financé par l'État" },
        { name: "Hôpital Provincial de Référence Kabila", description: "Situé sur l'avenue Bypass, Camp Kabila" },
        { name: "Centre Médico-Chirurgical LNI (CMC PIR)", description: "Quartier Victoire" },
        { name: "Hôpital de la Police (Camp Lufungula)", description: "Géré par la police nationale" },
        {
          name: "Hôpital Militaire du Camp Tshatshi",
          description: "Lieu de lancement du programme de gratuité de la maternité",
        },
      ],
    },
    {
      name: "Kongo Central",
      hospitals: [
        { name: "Hôpital Général de Référence de Matadi", description: "Principal hôpital de la province" },
        { name: "Hôpital Général de Référence de Boma", description: "Important centre de soins dans la région" },
      ],
    },
    {
      name: "Haut-Katanga",
      hospitals: [
        { name: "Hôpital Général de Référence Jason Sendwe", description: "Lubumbashi" },
        { name: "Hôpital Copte", description: "Boulevard de la Katuba, Lubumbashi" },
        { name: "Centre Médical Lumière", description: "Quartier Gambela 3, Lubumbashi" },
        { name: "Polyclinique de Bel-Air", description: "Chée Kasenga 51, Bel-Air, Kampemba, Lubumbashi" },
      ],
    },
    {
      name: "Lualaba",
      hospitals: [
        { name: "Skyborne Hospital", description: "Avenue Route Golf-Club 53, Quartier Golf, Commune Dilala, Kolwezi" },
        { name: "Polyclinique Bwana Lubete", description: "Avenue Kimbangu, Commune Fungurume" },
      ],
    },
    {
      name: "Sud-Kivu",
      hospitals: [
        { name: "Hôpital Général de Référence de Bukavu", description: "Centre hospitalier majeur de la province" },
        {
          name: "Hôpital de Vutule",
          description: "A connu une reconnaissance officielle pour son accession à la catégorie 1 des hôpitaux",
        },
      ],
    },
    {
      name: "Autres provinces",
      hospitals: [
        { name: "Hôpital Général de Référence de Kisangani", description: "Tshopo" },
        { name: "Hôpital Général de Référence de Kananga", description: "Kasaï-Central" },
        { name: "Hôpital Général de Référence de Mbandaka", description: "Équateur" },
      ],
    },
  ]

  const filteredProvinces = provinces
    .map((province) => ({
      ...province,
      hospitals: province.hospitals.filter(
        (hospital) =>
          hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hospital.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((province) => province.hospitals.length > 0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <header className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 bg-emerald-100 rounded-full mb-4"
          >
            <Building className="h-10 w-10 text-emerald-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-slate-800 mb-4"
          >
            Hôpitaux en République Démocratique du Congo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Liste des principaux établissements hospitaliers publics à travers les provinces de la RDC
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Rechercher un hôpital..."
              className="pl-10 py-6 bg-white shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-4xl mx-auto">
          {filteredProvinces.map((province, index) => (
            <motion.div
              key={province.name}
              variants={item}
              className="bg-white rounded-xl shadow-md overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Accordion type="single" collapsible defaultValue={index === 0 ? province.name : undefined}>
                <AccordionItem value={province.name} className="border-none">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-emerald-50 to-teal-50">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                      <h2 className="text-xl font-semibold text-slate-800">{province.name}</h2>
                      <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {province.hospitals.length}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-4 grid gap-4 md:grid-cols-2">
                      {province.hospitals.map((hospital, hospitalIndex) => (
                        <motion.div
                          key={hospital.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: hospitalIndex * 0.05 }}
                          whileHover={{ scale: 1.03 }}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-100"
                        >
                          <h3 className="font-medium text-slate-800 mb-1">{hospital.name}</h3>
                          <p className="text-sm text-slate-600">{hospital.description}</p>
                          <div className="mt-3 flex justify-end">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              Contacter
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center text-slate-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Ministère de la Santé, République Démocratique du Congo</p>
          <p className="mt-1">Cette liste n&apos;est pas exhaustive et peut être sujette à des modifications.</p>
        </motion.footer>
      </motion.div>
    </div>
  )
}
