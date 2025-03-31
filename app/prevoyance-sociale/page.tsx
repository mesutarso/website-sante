"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation, AnimatePresence } from "motion/react"
import {
  Shield,
  Users,
  Briefcase,
  HeartPulse,
  Building2,
  HandHelping,
  FileCheck,
  HardHat,
  UserCog,
  Baby,
  Wallet,
  HeartHandshake,
  BookOpen,
  PiggyBank,
  Share2,
  LucideIcon,
} from "lucide-react"

// Animated counter component
const Counter = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        setCount(Math.floor(percentage * target))

        if (percentage < 1) {
          requestAnimationFrame(animateCount)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [isInView, target, duration])

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  )
}

// Animated section component
const AnimatedSection = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "down" | "left" | "right" }) => {
  const ref = useRef<HTMLDivElement>(null)
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

// Animated icon component
const AnimatedIcon = ({ icon: Icon, delay = 0, color = "text-green" }: { icon: LucideIcon; delay?: number; color?: string }) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: [0.5, 1.2, 1],
        opacity: [0, 1, 1],
        transition: { duration: 0.5, delay },
      })
    }
  }, [isInView, controls, delay])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.5, opacity: 0 }}
      className="flex items-center justify-center"
    >
      <Icon size={40} className={color} />
    </motion.div>
  )
}

// Card component with hover effect
const HoverCard = ({ icon: Icon, title, children, delay = 0 }: { icon: LucideIcon; title: string; children: React.ReactNode; delay?: number }) => {
  return (
    <AnimatedSection delay={delay}>
      <motion.div
        className="bg-white p-8 rounded-xl shadow-md h-full border border-gray-100"
        whileHover={{
          scale: 1.03,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="mb-4">
          <AnimatedIcon icon={Icon} delay={delay + 0.2} />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-green-900">{title}</h3>
        {children}
      </motion.div>
    </AnimatedSection>
  )
}

// Program card component
const ProgramCard = ({ icon: Icon, title, items, delay = 0 }: { icon: LucideIcon; title: string; items: string[]; delay?: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AnimatedSection delay={delay}>
      <motion.div
        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="flex items-center mb-4">
          <AnimatedIcon icon={Icon} delay={delay + 0.2} />
          <h3 className="text-xl font-bold ml-4 text-green-900">{title}</h3>
        </div>

        <div className="mt-4 space-y-3">
          {items.map((item: string, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.3 + index * 0.1 }}
              className="flex items-start"
            >
              <div className="min-w-6 mt-1">
                <div className="h-2 w-2 rounded-full bg-green"></div>
              </div>
              <p className="ml-2 text-gray-700">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-4 text-green font-medium flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? "Voir moins" : "En savoir plus"}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 9L12 16L5 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-100"
            >
              <p className="text-gray-700">
                Ce programme vise à améliorer la protection sociale des citoyens congolais en renforçant les mécanismes
                existants et en développant de nouvelles initiatives adaptées aux besoins spécifiques de la population.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  )
}

export default function PrevoyanceSocialePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden bg-green-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-indigo-800/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-green-900 opacity-30"></div>
          <div className="w-full h-full relative">
            <Image
              src="/images/prevoyance.jpeg"
              alt="Prévoyance Sociale en RDC"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
          >
            <div className="h-full w-full flex items-center justify-center">
              <Shield size={400} className="text-white opacity-20" />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center max-w-4xl mb-6 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            La Prévoyance Sociale en RDC
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-center max-w-3xl relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Protéger les citoyens congolais face aux risques sociaux
          </motion.p>

          <motion.div
            className="mt-8 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#enjeux"
              className="bg-white text-green-900 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors inline-flex items-center gap-2"
            >
              Explorer
              <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-lg text-gray-700 leading-relaxed">
              La prévoyance sociale est un élément clé du bien-être des citoyens congolais. Elle vise à garantir une
              protection sociale aux travailleurs et à leurs familles face aux risques sociaux tels que la maladie, les
              accidents du travail, l&apos;invalidité, la vieillesse et le chômage. En République Démocratique du Congo, le
              Ministère de la Santé Publique, Hygiène et Prévoyance Sociale met en place des politiques et des
              programmes visant à renforcer la sécurité sociale et à assurer une meilleure couverture aux populations
              vulnérables.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enjeux de la Prévoyance Sociale */}
      <section id="enjeux" className="py-16 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green">
              1. Les enjeux de la prévoyance Sociale
            </h2>
          </AnimatedSection>

          <div className="mt-8">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                La RDC fait face à plusieurs défis en matière de prévoyance sociale :
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <HoverCard icon={Users} title="Faible couverture sociale" delay={0.3}>
                <p className="text-gray-600">
                  Seule une petite partie de la population bénéficie d&apos;une protection sociale formelle.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="relative h-32 w-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#009689"
                        strokeWidth="10"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        whileInView={{ strokeDashoffset: 283 * (1 - 15 / 100) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-green">
                      <Counter target={15} suffix="%" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">de la population couverte</p>
              </HoverCard>

              <HoverCard icon={Briefcase} title="Informalité du marché du travail" delay={0.4}>
                <p className="text-gray-600">
                  La majorité des travailleurs évoluent dans le secteur informel sans protection sociale.
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="relative h-32 w-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#009689"
                        strokeWidth="10"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        whileInView={{ strokeDashoffset: 283 * (1 - 80 / 100) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-green">
                      <Counter target={80} suffix="%" />
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">de travailleurs informels</p>
              </HoverCard>

              <HoverCard icon={HeartPulse} title="Accès limité aux soins de santé" delay={0.5}>
                <p className="text-gray-600">
                  De nombreuses familles ne peuvent pas couvrir les coûts médicaux en l&apos;absence d&apos;assurance maladie.
                </p>
              </HoverCard>

              <HoverCard icon={Wallet} title="Pensions insuffisantes" delay={0.6}>
                <p className="text-gray-600">
                  Les retraités perçoivent souvent des allocations trop faibles pour couvrir leurs besoins.
                </p>
              </HoverCard>

              <HoverCard icon={HandHelping} title="Protection des groupes vulnérables" delay={0.7}>
                <p className="text-gray-600">
                  Les personnes âgées, les orphelins et les personnes en situation de handicap nécessitent une meilleure
                  prise en charge.
                </p>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* Politiques et programmes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-green-900">
              2. Politiques et programmes du ministère
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Renforcement du système de sécurité sociale */}
            <div>
              <ProgramCard
                icon={Building2}
                title="A. Renforcement du système de sécurité sociale"
                delay={0.3}
                items={[
                  "Modernisation des services de la Caisse Nationale de Sécurité Sociale (CNSS) pour une gestion plus efficace des pensions et allocations sociales.",
                  "Extension de la couverture sociale aux travailleurs du secteur informel grâce à des régimes adaptés.",
                  "Lutte contre la fraude et les irrégularités dans le paiement des prestations sociales.",
                ]}
              />
            </div>

            {/* Promotion des Mutuelles de Santé */}
            <div>
              <ProgramCard
                icon={HeartPulse}
                title="B. Promotion des Mutuelles de Santé"
                delay={0.4}
                items={[
                  "Encouragement de la création et de l'adhésion aux mutuelles de santé communautaires pour une couverture médicale plus large.",
                  "Subventions et soutien technique aux mutuelles pour renforcer leur viabilité et accessibilité.",
                  "Campagnes de sensibilisation sur l'importance de l'assurance santé pour tous.",
                ]}
              />
            </div>

            {/* Protection des travailleurs contre les risques professionnels */}
            <div>
              <ProgramCard
                icon={HardHat}
                title="C. Protection des travailleurs contre les risques professionnels"
                delay={0.5}
                items={[
                  "Mise en place de programmes de prévention des accidents du travail et des maladies professionnelles.",
                  "Application stricte des normes de sécurité dans les entreprises.",
                  "Indemnisation rapide et juste des travailleurs victimes d'accidents de travail.",
                ]}
              />
            </div>

            {/* Prévoyance pour la retraite et l'assistance aux personnes âgées */}
            <div>
              <ProgramCard
                icon={UserCog}
                title="D. Prévoyance pour la retraite et l'assistance aux personnes âgées"
                delay={0.6}
                items={[
                  "Réformes pour garantir des pensions de retraite dignes et régulières.",
                  "Création de centres d'accueil et d'assistance pour les personnes âgées en situation de précarité.",
                  "Programmes de réinsertion sociale et économique pour les retraités.",
                ]}
              />
            </div>

            {/* Protection des orphelins et des groupes vulnérables */}
            <div>
              <ProgramCard
                icon={Baby}
                title="E. Protection des orphelins et des groupes vulnérables"
                delay={0.7}
                items={[
                  "Mise en place de programmes d'assistance pour les enfants en situation de vulnérabilité.",
                  "Collaboration avec les ONG pour la prise en charge des orphelins et enfants abandonnés.",
                  "Allocation de fonds pour l'accès à l'éducation et aux soins des enfants démunis.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comment bénéficier */}
      <section className="py-16 px-4 bg-green text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              3. Comment bénéficier des programmes de prévoyance sociale ?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <AnimatedSection delay={0.3}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <FileCheck size={48} className="text-green-200" />
                </motion.div>
                <p className="text-white/90">
                  🔹 S&apos;inscrire à la CNSS pour bénéficier d&apos;une couverture sociale en tant que travailleur salarié.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <HeartHandshake size={48} className="text-green-200" />
                </motion.div>
                <p className="text-white/90">
                  🔹 Adhérer à une mutuelle de santé pour réduire les coûts des soins médicaux.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <BookOpen size={48} className="text-green-200" />
                </motion.div>
                <p className="text-white/90">🔹 Connaître ses droits et obligations en matière de sécurité sociale.</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <PiggyBank size={48} className="text-green-200" />
                </motion.div>
                <p className="text-white/90">🔹 Épargner pour la retraite et anticiper les risques sociaux.</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <motion.div
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <Share2 size={48} className="text-green-200" />
                </motion.div>
                <p className="text-white/90">🔹 Sensibiliser son entourage à l&apos;importance de la prévoyance sociale.</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

    </div>
  )
}

