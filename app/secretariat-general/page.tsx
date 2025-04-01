"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "motion/react"
import {
  Building2,
  Users,
  FileText,
  BarChart3,
  Globe,
  Briefcase,
  BookOpen,
  Award,
  GraduationCap,
  Lightbulb,
  Target,
  Handshake,
  Landmark,
} from "lucide-react"

// Animated text component that reveals character by character
const AnimatedText = ({ text, delay = 0, className = "", speed = 0.01 }: { text: string; delay?: number; className?: string; speed?: number }) => {
  const controls = useAnimation()
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  }

  return (
    <motion.p ref={textRef} className={className} variants={container} initial="hidden" animate={controls} custom={1}>
      {words.map((word: string, index: number) => (
        <motion.span key={index} className="inline-block" variants={child}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.p>
  )
}

// Animated section component
const AnimatedSection = ({ children, delay = 0, direction = "up", className }: { children: React.ReactNode; delay?: number; direction?: string; className?: string }) => {
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
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated card component
const AnimatedCard = ({ 
  icon: Icon, 
  title, 
  children, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode; 
  delay?: number 
}) => {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        className="bg-white p-8 rounded-xl shadow-md h-full border-l-4 border-blue"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderColor: "#063956",
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
        <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
        <div className="text-gray-600">{children}</div>
      </motion.div>
    </AnimatedSection>
  )
}

// Timeline component for biography
const TimelineItem = ({ 
  year, 
  title, 
  description, 
  delay = 0 
}: { 
  year: string; 
  title: string; 
  description: string; 
  delay?: number 
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className="flex mb-8"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue text-white font-bold text-sm">
          {year}
        </div>
        <div className="w-1 flex-grow bg-blue-200 mt-2"></div>
      </div>
      <div className="pt-2">
        <h4 className="text-lg font-bold text-blue-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

// Floating elements background
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => {
        const icons = [Building2, FileText, BarChart3, Globe, Briefcase, BookOpen]
        const RandomIcon = icons[Math.floor(Math.random() * icons.length)]

        return (
          <motion.div
            key={i}
            className="absolute text-blue-200 opacity-20"
            style={{
              insetBlockStart: `${Math.random() * 100}%`,
              insetInlineStart: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 360],
              opacity: [0.2, 0.1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <RandomIcon size={Math.random() * 30 + 20} />
          </motion.div>
        )
      })}
    </div>
  )
}

// Parallax effect component
const ParallaxSection = ({ 
  children, 
  speed = 0.5 
}: { 
  children: React.ReactNode; 
  speed?: number 
}) => {
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const y = scrollY * speed

  return (
    <motion.div ref={ref} style={{ y: -y }} className="relative">
      {children}
    </motion.div>
  )
}

export default function SecretariatGeneralPage() {
  // Animation for the building icon
  const buildingControls = useAnimation()

  useEffect(() => {
    const animateBuilding = async () => {
      await buildingControls.start({
        scale: [0.8, 1.2, 1],
        opacity: [0, 1, 1],
        transition: { duration: 1.5 },
      })

      // Subtle continuous animation
      buildingControls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
      })
    }

    animateBuilding()
  }, [buildingControls])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div className="mb-8 flex justify-center" animate={buildingControls}>
              <Building2 size={80} className="text-blue" />
            </motion.div>

            <motion.h1
              className="text-blue md:text-4xl text-2xl font-bold mt-8 mb-20 text-center"
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
                Le Secretariat General
              </motion.span>
            </motion.h1>

            <AnimatedText
              text="Le Secrétariat Général à la Santé, planjfie, coordonne et supervise les activités en appui au Ministère de la Santé qui en fixe les orientations générales. Cadre de liaison entre le Cabinet, l'Administration de la Santé et les partenaires, il coordonne la direction des services décentralisés en tenant compte des orientations politiques et budgétaires tracées par le Ministère."
              delay={0.5}
              className="max-w-4xl mx-auto text-center mb-10 text-blue text-lg leading-relaxed"
            />

            <AnimatedText
              text="Les fonctions de Secrétaire général sont exercées par le Dr. Sylvain Yuma Ramazani. Il a dirigé le Programme national de transfusion sanguine de 2006 à 2016 avant de devenir Directeur de Cabinet au Ministère de la Santé de 2016 à 2018. Docteur en médecine, chirurgie et accouchement de l'Université de Kinshasa en 1998, il a obtenu un Diplôme d'Etudes Spécialisées en Immuno-hematologie et Transfusion de l'Université de Liège en Belgique en 2005 avant de décrocher, trois ans plus tard, un Master en Santé Publique à l'Université de Kinshasa."
              delay={0.8}
              className="max-w-4xl mx-auto text-center text-blue text-lg leading-relaxed"
            />

            <AnimatedSection delay={1.2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-12">
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

      {/* Missions */}
      <section id="missions" className="py-16 px-4 relative">
        <ParallaxSection speed={0.2}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
        </ParallaxSection>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue">Nos missions</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard icon={Target} title="Planification stratégique" delay={0.3}>
              <p>
                Élaborer et mettre en œuvre les plans stratégiques du secteur de la santé en alignement avec les
                politiques nationales et les objectifs de développement durable.
              </p>
            </AnimatedCard>

            <AnimatedCard icon={Users} title="Coordination" delay={0.5}>
              <p>
                Assurer la coordination entre les différentes directions et programmes du Ministère de la Santé ainsi
                qu&apos;avec les partenaires techniques et financiers.
              </p>
            </AnimatedCard>

            <AnimatedCard icon={BarChart3} title="Supervision et évaluation" delay={0.7}>
              <p>
                Superviser la mise en œuvre des programmes de santé et évaluer leur impact sur l&apos;amélioration des
                indicateurs sanitaires nationaux.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-16 px-4 bg-blue-50 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-blue-100 skew-y-3 transform origin-top-right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">Notre organisation</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.3} direction="left">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Structure administrative</h3>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Landmark size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Direction de l&apos;Administration</h4>
                      <p className="text-gray-600 mt-1">Gestion des ressources humaines, financières et matérielles</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Lightbulb size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Direction des Études et Planification</h4>
                      <p className="text-gray-600 mt-1">Élaboration des stratégies et suivi des indicateurs de santé</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Direction des Services Décentralisés</h4>
                      <p className="text-gray-600 mt-1">Coordination des activités sanitaires au niveau provincial</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <div className="mt-1 text-blue-600">
                      <Handshake size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Direction de la Coopération</h4>
                      <p className="text-gray-600 mt-1">Relations avec les partenaires techniques et financiers</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="right">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/secretariat-general.webp"
                  alt="Organisation du Secrétariat Général"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Une équipe dévouée à la santé publique</h4>
                    <p>
                      Le Secrétariat Général compte plus de 200 experts et professionnels engagés pour l&apos;amélioration du
                      système de santé congolais.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Biographie du Secrétaire Général */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
              Biographie du Secrétaire Général
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <AnimatedSection delay={0.3} direction="left">
              <div className="relative">
                <motion.div
                  className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Image
                    src="/images/dr-Sylvain-Yuma-Ramazani.webp"
                    alt="Dr. Sylvain Yuma Ramazani"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold">Dr. Sylvain Yuma Ramazani</h3>
                  <p className="text-sm text-blue-100">Secrétaire Général à la Santé</p>
                </motion.div>
              </div>

              <div className="mt-16 space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <GraduationCap className="text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Formation académique</h4>
                    <p className="text-gray-600">Docteur en médecine, Master en Santé Publique</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Briefcase className="text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Expérience</h4>
                    <p className="text-gray-600">Plus de 20 ans dans le secteur de la santé</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Award className="text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Spécialité</h4>
                    <p className="text-gray-600">Immuno-hématologie et Transfusion</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} direction="right" className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">Parcours professionnel</h3>

                <div className="mt-8">
                  <TimelineItem
                    year="1998"
                    title="Diplôme de Docteur en médecine"
                    description="Obtention du diplôme de Docteur en médecine, chirurgie et accouchement de l'Université de Kinshasa."
                    delay={0.6}
                  />

                  <TimelineItem
                    year="2005"
                    title="Spécialisation en Immuno-hématologie"
                    description="Diplôme d'Études Spécialisées en Immuno-hématologie et Transfusion de l'Université de Liège en Belgique."
                    delay={0.7}
                  />

                  <TimelineItem
                    year="2006"
                    title="Direction du Programme national de transfusion sanguine"
                    description="Nomination à la tête du Programme national de transfusion sanguine, poste qu'il occupera pendant 10 ans."
                    delay={0.8}
                  />

                  <TimelineItem
                    year="2008"
                    title="Master en Santé Publique"
                    description="Obtention d'un Master en Santé Publique à l'Université de Kinshasa."
                    delay={0.9}
                  />

                  <TimelineItem
                    year="2016"
                    title="Directeur de Cabinet au Ministère de la Santé"
                    description="Nomination au poste de Directeur de Cabinet au Ministère de la Santé, fonction qu'il exercera jusqu'en 2018."
                    delay={1.0}
                  />

                  <TimelineItem
                    year="2018"
                    title="Secrétaire Général à la Santé"
                    description="Nomination au poste de Secrétaire Général à la Santé, où il coordonne l'ensemble des activités du Ministère."
                    delay={1.1}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Réalisations majeures</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.3}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div className="mb-4 text-blue-200" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                  <FileText size={40} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Plan National de Développement Sanitaire</h3>
                <p className="text-white/80">
                  Élaboration et mise en œuvre du Plan National de Développement Sanitaire 2019-2022.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div className="mb-4 text-blue-200" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                  <Users size={40} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Renforcement des ressources humaines</h3>
                <p className="text-white/80">
                  Formation et déploiement de plus de 5000 professionnels de santé dans les zones rurales.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div className="mb-4 text-blue-200" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                  <Building2 size={40} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Modernisation des infrastructures</h3>
                <p className="text-white/80">
                  Rénovation et équipement de plus de 200 centres de santé et hôpitaux à travers le pays.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div className="mb-4 text-blue-200" whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                  <Globe size={40} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">Coopération internationale</h3>
                <p className="text-white/80">
                  Mobilisation de plus de 500 millions USD de financement pour les programmes de santé prioritaires.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Contactez le Secrétariat Général</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl mb-8 text-gray-600">
              Pour toute information concernant les activités du Secrétariat Général à la Santé ou pour des demandes de
              collaboration, n&apos;hésitez pas à nous contacter.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.button
              className="bg-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
   
    </div>
  )
}

