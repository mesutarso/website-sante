"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "motion/react"
import {
  Droplets,
  AlertTriangle,
  WormIcon as Virus,
  Hospital,
  Users,
  Globe,
  ShieldCheck,
  Droplet,
  School,
  HandIcon as HandWash,
  TableIcon as Toilet,
  Coffee,
  Trash2,
  Share2,
} from "lucide-react"

// Animated counter component
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const counterRef = useRef(null)
  const isInView = useInView(counterRef, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number | undefined
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

  return <span ref={counterRef}>{count}</span>
}

// Animated section component
const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

// Animated icon component
const AnimatedIcon = ({ icon: Icon, delay = 0 }: { icon: React.ComponentType<{ size?: number; className?: string }>; delay?: number }) => {
  const controls = useAnimation()
  const ref = useRef(null)
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
      <Icon size={40} className="blueSkySky" />
    </motion.div>
  )
}

export default function HygienePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] overflow-hidden bg-blueSky">
        <div className="absolute inset-0 bg-gradient-to-r from-blueSky-90 to-blueSky z-10"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blueSky opacity-30"></div>
          <div className="w-full h-full relative">
            <Image
              src="/images/hygiene.jpeg"
              alt="Hygiène en RDC"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-center max-w-4xl mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            L&apos;Hygiène en République Démocratique du Congo
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-center max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Un pilier fondamental de la santé publique
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#enjeux"
              className="bg-white text-blueSky px-6 py-3 rounded-full font-medium hover:bg-blueSky hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Découvrir
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
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              L&apos;hygiène est un pilier fondamental de la santé publique en République Démocratique du Congo. Elle joue un
              rôle crucial dans la prévention des maladies, la réduction de la mortalité infantile et l&apos;amélioration de
              la qualité de vie des populations. Le Ministère de la Santé Publique, Hygiène et Prévoyance Sociale place
              l&apos;hygiène au cœur de ses stratégies sanitaires afin de garantir un environnement sain et sécurisé pour
              tous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Enjeux de l'Hygiène */}
      <section id="enjeux" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blueSky">
              1. Les enjeux de l&apos;Hygiène
            </h2>
          </AnimatedSection>

          <div className="mt-8">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
                Malgré les efforts déployés, plusieurs défis persistent en matière d&apos;hygiène en RDC :
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="mb-4">
                    <AnimatedIcon icon={Droplets} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blueSky text-center">Accès limité à l&apos;eau potable</h3>
                  <div className="flex items-center justify-center my-6">
                    <div className="relative h-32 w-32">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#063956"
                          strokeWidth="10"
                          strokeDasharray="283"
                          initial={{ strokeDashoffset: 283 }}
                          whileInView={{ strokeDashoffset: 283 * (1 - 33 / 100) }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-blueSky">
                        <Counter target={33} />%
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    <Counter target={33} />% de la population n&apos;a pas accès à une eau de qualité.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="mb-4">
                    <AnimatedIcon icon={AlertTriangle} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blueSky text-center">
                    Faible couverture des infrastructures sanitaires
                  </h3>
                  <p className="text-gray-600 text-center">
                    Beaucoup de zones rurales manquent de latrines et de systèmes d&apos;évacuation des déchets.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="mb-4">
                    <AnimatedIcon icon={Virus} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blueSky text-center">Propagation des maladies hydriques</h3>
                  <p className="text-gray-600 text-center">
                    Le choléra, la diarrhée et les infections parasitaires sont encore fréquents.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="mb-4">
                    <AnimatedIcon icon={Hospital} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blueSky">Hygiène en milieu hospitalier</h3>
                  <p className="text-gray-600 text-center">
                    Les infections nosocomiales sont un problème majeur dans les établissements de santé.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <div className="bg-white p-8 rounded-xl shadow-md h-full">
                  <div className="mb-4">
                    <AnimatedIcon icon={Users} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blueSky">Sensibilisation insuffisante</h3>
                  <p className="text-gray-600 text-center">
                    Les bonnes pratiques d&apos;hygiène sont encore méconnues dans certaines communautés.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stratégies et actions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blueSky">
              2. Stratégies et actions du ministère
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Le Ministère de la Santé met en place plusieurs actions pour renforcer l&apos;hygiène à travers le pays :
            </p>
          </AnimatedSection>

          {/* Programme National d'Hygiène aux Frontières */}
          <div className="mb-16">
            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <AnimatedIcon icon={Globe} />
                <h3 className="text-2xl font-bold ml-4 text-blueSky">
                  A. Programme National d&apos;Hygiène aux Frontières (PNHF)
                </h3>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Surveillance sanitaire des points d&apos;entrée (aéroports, ports, frontières terrestres).
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">Contrôle sanitaire des voyageurs et des marchandises.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Prévention des épidémies transfrontalières (Ebola, choléra, Mpox, etc.).
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Promotion de l'hygiène et de l'assainissement */}
          <div className="mb-16">
            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <AnimatedIcon icon={ShieldCheck} />
                <h3 className="text-2xl font-bold ml-4 text-blueSky">
                  B. Promotion de l&apos;hygiène et de l&apos;assainissement
                </h3>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">Campagnes de sensibilisation dans les écoles, marchés et hôpitaux.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Construction de latrines et systèmes d&apos;assainissement en zones rurales et urbaines.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Formation des professionnels de santé et des relais communautaires sur les normes d&apos;hygiène.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Accès à l'eau potable */}
          <div className="mb-16">
            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <AnimatedIcon icon={Droplet} />
                <h3 className="text-2xl font-bold ml-4 text-blueSky">C. Accès à l&apos;eau potable</h3>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Collaboration avec le ministère de l&apos;Environnement et les ONG pour améliorer l&apos;accès à l&apos;eau.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Déploiement de forages et de pompes à eau potable dans les zones vulnérables.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">Contrôle de la qualité de l&apos;eau distribuée aux populations.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Hygiène en milieu scolaire et hospitalier */}
          <div>
            <AnimatedSection delay={0.3}>
              <div className="flex items-center mb-6">
                <AnimatedIcon icon={School} />
                <h3 className="text-2xl font-bold ml-4 text-blueSky">D. Hygiène en milieu scolaire et hospitalier</h3>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">Équipement des écoles en infrastructures sanitaires adaptées.</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Distribution de kits d&apos;hygiène aux élèves et sensibilisation sur le lavage des mains.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="bg-blueSky-50 p-6 rounded-lg border-l-4 border-blueSky">
                  <p className="text-gray-700">
                    Mise en place de protocoles stricts d&apos;hygiène dans les hôpitaux pour limiter les infections
                    nosocomiales.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="py-16 px-4 bg-blueSky text-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Vous souhaitez contribuer à un environnement plus sain ?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-center mb-12">Voici quelques gestes simples :</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <AnimatedSection delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
                  <HandWash size={48} className="text-white" />
                </motion.div>
                <p className="text-white/90">🔹 Lavez-vous les mains régulièrement avec du savon.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
                  <Toilet size={48} className="text-white" />
                </motion.div>
                <p className="text-white/90">🔹 Utilisez des latrines et évitez la défécation à l&apos;air libre.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
                  <Coffee size={48} className="text-white" />
                </motion.div>
                <p className="text-white/90">🔹 Boire de l&apos;eau potable et bien conserver les aliments.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
                  <Trash2 size={48} className="text-white" />
                </motion.div>
                <p className="text-white/90">
                  🔹 Gardez votre environnement propre en jetant les déchets dans les endroits appropriés.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col items-center text-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="mb-4">
                  <Share2 size={48} className="text-white" />
                </motion.div>
                <p className="text-white/90">🔹 Sensibilisez votre entourage aux bonnes pratiques d&apos;hygiène.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


    </div>
  )
}

