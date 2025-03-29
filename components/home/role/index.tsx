"use client"
import { motion, useInView } from "motion/react"
import { Volume2, Telescope, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useRef } from "react"

export default function Role() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      id: 1,
      title: "Organisation, réglementation et promotion",
      icon: <Volume2 className="h-12 w-12 text-red-600" />,
      content:
        "De la médecine traditionnelle, du système de Santé, de l'Hygiène, des aliments, médicaments, produits phytosanitaires, produits cosmétiques et d'hygiène corporelle.",
    },
    {
      id: 2,
      title: "Agrément et contrôle",
      icon: <Telescope className="h-12 w-12 text-red-600" />,
      content:
        "Des établissements privés médico-sanitaires, pharmaceutiques, laboratoires et d'enseignement médical technique",
    },
    {
      id: 3,
      title: "Organisation et Gestion",
      icon: <Building2 className="h-12 w-12 text-red-600" />,
      content:
        "De l'enseignement technique médical du niveau secondaire, de la Police sanitaire aux frontières, de la gestion du personnel médical, de la prévention et de l'inspection sanitaire humanitaire et médicale.",
    },
  ]

  return (
    <div ref={ref} className="min-h-screen bg-blue py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12 mt-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-sm font-medium text-white tracking-wide uppercase"
          >
            Le rôle du ministère
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mt-2 text-4xl font-extrabold text-white sm:text-5xl"
          >
            Le rôle du ministère
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="prose prose-lg text-white mx-auto mb-16 text-center max-w-3xl"
        >
          <p className="text-sm">
            Le Ministère de la Santé Publique, Hygiène et Préventions, est chargé d'élaborer et mettre en œuvre des
            politiques, des plans et des stratégies en matière de santé, conformément aux orientations du gouvernement.
            À ce titre, et en liaison avec les différents départements ministériels concernés, il a l'initiative et la
            responsabilité des actions suivantes :
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden border-none bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600" />
                <CardHeader className="text-center pb-0 pt-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center mb-4 bg-red-50 p-4 rounded-full w-20 h-20 mx-auto"
                  >
                    {card.icon}
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-xl font-bold text-blue mt-4"
                  >
                    {card.title}
                  </motion.h3>
                </CardHeader>
                <CardContent>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="text-gray-600 text-center"
                  >
                    {card.content}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-2">
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-blue-800"
              initial={{ opacity: 0.3 }}
              animate={isInView ? { opacity: dot === 2 ? 1 : 0.3 } : { opacity: 0.3 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

