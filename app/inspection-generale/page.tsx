"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "motion/react"
import { Shield, Search, FileCheck, Scale, Users, Award, ClipboardCheck, BookOpen, Building, Gavel } from "lucide-react"

// Animated section component
const AnimatedSection = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

// Animated card component
const AnimatedCard = ({ icon: Icon, title, children, delay = 0 }: { icon: React.ElementType; title: string; children: React.ReactNode; delay?: number }) => {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        className="bg-white p-8 rounded-xl shadow-md h-full border-l-4 border-blue"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderColor: "#1e40af",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          className="mb-4 text-blue"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
        >
          <Icon size={40} />
        </motion.div>
        <h3 className="text-xl font-bold mb-3 text-blue">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </motion.div>
    </AnimatedSection>
  )
}

// Floating particles background
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue opacity-10"
          style={{
            inlineSize: Math.random() * 30 + 10,
            blockSize: Math.random() * 30 + 10,
            insetBlockStart: `${Math.random() * 100}%`,
            insetInlineStart: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0.1, 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Animated counter component
const AnimatedCounter = ({ value, label, delay = 0 }: { value: string | number; label: string; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay },
      })
    }
  }, [isInView, controls, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls} className="text-center">
      <motion.div
        className="text-4xl font-bold text-blue"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {value}
        </motion.span>
      </motion.div>
      <motion.p
        className="text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

export default function InspectionGeneralePage() {
  // Animation for the shield icon
  const shieldControls = useAnimation()

  useEffect(() => {
    const animateShield = async () => {
      await shieldControls.start({
        scale: [0.8, 1.2, 1],
        opacity: [0, 1, 1],
        transition: { duration: 1.5 },
      })

      // Subtle continuous animation
      shieldControls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      })
    }

    animateShield()
  }, [shieldControls])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <ParticlesBackground />

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div className="mb-8 flex justify-center" animate={shieldControls}>
              <Shield size={80} className="text-blue-600" />
            </motion.div>

            <motion.h1
              className="text-blue text-4xl font-bold mt-8 mb-20 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="block uppercase md:text-[6rem] text-3xl"
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.05em", opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                Inspection generale
              </motion.span>
            </motion.h1>

            <AnimatedSection delay={0.5}>
              <p className="max-w-4xl mx-auto text-center mb-10 text-blue text-lg leading-relaxed">
                L&apos;Inspection générale de la Santé a été créée en 2017 pour encadrer, enquêter, contrôler et
                sanctionner le cas échéant les cas d&apos;irrégularités constatés au sein des services et organes du
                Ministère de la Santé. Il est un outil de bonne gouvernance dont la mission consiste à garantir
                l&apos;intégrité des services et systèmes de santé.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="#missions"
                  className="inline-flex items-center gap-2 bg-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  Découvrir nos missions
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 5V19M12 19L5 12M12 19L19 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </header>

      {/* Statistiques */}
      <section className="py-16 px-4 bg-white relative">
        <div className="absolute inset-0 bg-blue-50 skew-y-3 transform origin-top-right"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Notre impact depuis 2017</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCounter value="500+" label="Inspections réalisées" delay={0.2} />
            <AnimatedCounter value="120" label="Cas résolus" delay={0.4} />
            <AnimatedCounter value="95%" label="Taux de conformité" delay={0.6} />
            <AnimatedCounter value="28" label="Provinces couvertes" delay={0.8} />
          </div>
        </div>
      </section>

      {/* Missions */}
      <section id="missions" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Nos missions</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard icon={Search} title="Enquêter" delay={0.3}>
              <p>
                Mener des investigations approfondies sur les allégations d&apos;irrégularités et de non-conformité au sein
                des services de santé.
              </p>
            </AnimatedCard>

            <AnimatedCard icon={ClipboardCheck} title="Contrôler" delay={0.5}>
              <p>
                Effectuer des contrôles réguliers pour vérifier la conformité des établissements de santé aux normes et
                réglementations en vigueur.
              </p>
            </AnimatedCard>

            <AnimatedCard icon={Gavel} title="Sanctionner" delay={0.7}>
              <p>
                Recommander des mesures disciplinaires appropriées en cas d&apos;infractions ou de manquements graves aux
                règles établies.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Notre organisation</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3} direction="left">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Structure administrative</h3>
                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Building size={20} />
                    </div>
                    <div>
                      <span className="font-semibold">Direction générale</span>
                      <p className="text-gray-600 mt-1">Coordination des activités et élaboration des stratégies</p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Users size={20} />
                    </div>
                    <div>
                      <span className="font-semibold">Départements spécialisés</span>
                      <p className="text-gray-600 mt-1">Unités d&apos;inspection, d&apos;enquête et de contrôle</p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1 text-blue-600">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <span className="font-semibold">Service juridique</span>
                      <p className="text-gray-600 mt-1">Analyse des cas et recommandations de sanctions</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/inspection-sante.jpg"
                  alt="Organisation de l'Inspection générale"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Une équipe d&apos;experts dévoués</h4>
                    <p>
                      Nos inspecteurs sont formés aux techniques d&apos;investigation les plus modernes pour garantir
                      l&apos;intégrité du système de santé.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Processus d'inspection */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
              Notre processus d&apos;inspection
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Ligne de progression */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-24 relative">
              {/* Étape 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <AnimatedSection delay={0.3} direction="left">
                  <div className="bg-white p-8 rounded-xl shadow-md md:text-right relative">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-blue-600 rounded-full transform translate-x-10 -translate-y-1/2 hidden md:block"></div>
                    <motion.div
                      className="inline-block mb-4 text-blue-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <FileCheck size={40} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">1. Planification</h3>
                    <p className="text-gray-600">
                      Identification des établissements à inspecter et préparation des protocoles d&apos;inspection basés sur
                      les normes en vigueur.
                    </p>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div>
              </div>

              {/* Étape 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <AnimatedSection delay={0.5} direction="right">
                  <div className="bg-white p-8 rounded-xl shadow-md relative">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-10 -translate-y-1/2 hidden md:block"></div>
                    <motion.div
                      className="inline-block mb-4 text-blue-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <Search size={40} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">2. Inspection sur site</h3>
                    <p className="text-gray-600">
                      Visite des établissements, entretiens avec le personnel, examen des documents et vérification des
                      procédures.
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Étape 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <AnimatedSection delay={0.7} direction="left">
                  <div className="bg-white p-8 rounded-xl shadow-md md:text-right relative">
                    <div className="absolute right-0 top-1/2 w-4 h-4 bg-blue-600 rounded-full transform translate-x-10 -translate-y-1/2 hidden md:block"></div>
                    <motion.div
                      className="inline-block mb-4 text-blue-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <Scale size={40} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">3. Analyse et rapport</h3>
                    <p className="text-gray-600">
                      Évaluation des données recueillies, identification des non-conformités et rédaction d&apos;un rapport
                      détaillé avec recommandations.
                    </p>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div>
              </div>

              {/* Étape 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="hidden md:block"></div>
                <AnimatedSection delay={0.9} direction="right">
                  <div className="bg-white p-8 rounded-xl shadow-md relative">
                    <div className="absolute left-0 top-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-10 -translate-y-1/2 hidden md:block"></div>
                    <motion.div
                      className="inline-block mb-4 text-blue-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <Award size={40} />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-blue-900">4. Suivi et amélioration</h3>
                    <p className="text-gray-600">
                      Mise en œuvre des recommandations, accompagnement des établissements dans leur démarche
                      d&apos;amélioration et contrôles de suivi.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

