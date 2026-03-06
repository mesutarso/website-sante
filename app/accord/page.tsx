"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Container, Section } from "@/components/craft";
import {
  ChevronDown,
  FileText,
  Download,
  Shield,
  HeartPulse,
  Microscope,
  FlaskConical,
  AlertTriangle,
  Building2,
  CheckCircle,
  ArrowRight,
  Calendar,
  Newspaper,
  HelpCircle,
  ChevronRight,
} from "lucide-react";
import BANNER from "@/public/images/accord-banner.jpg";
import HANDSHAKE from "@/public/images/accord-handshake.jpg";
import SIGNATURE from "@/public/images/signature.jpeg";
import Link from "next/link";

/* ─────────────────────────────────────────────
   NAV TABS
───────────────────────────────────────────── */
const TABS = [
  { id: "apercu", label: "Vue d'ensemble" },
  { id: "pourquoi", label: "Pourquoi ?" },
  { id: "domaines", label: "Domaines" },
  { id: "financement", label: "Financement" },
  { id: "gouvernance", label: "Gouvernance" },
  { id: "resultats", label: "Résultats" },
  { id: "documents", label: "Documents" },
  { id: "actualites", label: "Actualités" },
  { id: "faq", label: "FAQ" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  tag,
  title,
  subtitle,
  light = false,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <FadeIn className="mb-12">
      <span
        className={`inline-block text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-4 ${
          light
            ? "bg-white/20 text-white"
            : "bg-[#063956]/10 text-[#063956]"
        }`}
      >
        {tag}
      </span>
      <h2
        className={`text-3xl md:text-4xl font-extrabold leading-tight mb-4 ${
          light ? "text-white" : "text-[#063956]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function AccordPage() {
  const [activeTab, setActiveTab] = useState("apercu");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function scrollTo(id: string) {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-white">
      {/* ── HERO ─────────────────────────────── */}
      <div className="relative w-full overflow-hidden">
        <Image
          src={BANNER}
          alt="Accord RDC – États-Unis pour la santé 2026-2030"
          className="w-full h-auto object-cover"
          priority
          quality={95}
        />
        {/* subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── STICKY NAV ───────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
        <Container className="!py-0">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={`whitespace-nowrap text-sm font-semibold px-4 py-4 border-b-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#B8860B] text-[#B8860B]"
                    : "border-transparent text-gray-500 hover:text-[#063956]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </Container>
      </div>

      {/* ── 1. VUE D'ENSEMBLE ───────────────── */}
      <div id="apercu" className="scroll-mt-16 bg-[#F9F9F5]">
        <Section>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left text */}
              <div>
                <FadeIn>
                  <span className="inline-block text-xs font-bold tracking-widest uppercase bg-[#B8860B]/15 text-[#B8860B] px-3 py-1 rounded-full mb-5">
                    Accord RDC – États-Unis · Santé
                  </span>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-[#063956] leading-tight mb-6">
                    Accord de coopération en santé
                    <br />
                    <span className="text-[#B8860B]">RDC – États-Unis</span>
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Le Gouvernement de la République Démocratique du Congo et le
                    Gouvernement des États-Unis d&apos;Amérique ont signé un accord
                    stratégique de coopération en matière de santé visant à renforcer
                    durablement le système de santé congolais.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Cet accord s&apos;inscrit dans une vision commune : améliorer l&apos;accès
                    aux soins, renforcer la prévention et la surveillance des maladies,
                    moderniser les systèmes sanitaires et renforcer la capacité du pays
                    à répondre aux urgences de santé publique.
                  </p>
                  {/* Key date */}
                  <div className="flex items-center gap-3 p-4 bg-[#063956]/5 rounded-2xl border border-[#063956]/10">
                    <Calendar className="text-[#B8860B] w-6 h-6 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Signé le</p>
                      <p className="font-bold text-[#063956]">26 février 2026 · Kinshasa</p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right: stats */}
              <FadeIn delay={0.2}>
                <div className="relative">
                  <Image
                    src={HANDSHAKE}
                    alt="Accord-cadre bilatéral RDC-USA"
                    className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
                    width={480}
                    height={480}
                  />
                  {/* Floating stat card */}
                  <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 min-w-[200px]">
                    <p className="text-4xl font-extrabold text-[#B8860B]">$1,2 Mrd</p>
                    <p className="text-sm text-gray-500 mt-1">Mobilisés sur 5 ans</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
              {[
                { val: "$1,2 Mrd", label: "Budget total", color: "bg-[#063956]" },
                { val: "$900M", label: "Contribution USA", color: "bg-[#B8860B]" },
                { val: "$300M", label: "Financement RDC", color: "bg-[#009689]" },
                { val: "2026–2030", label: "Durée du partenariat", color: "bg-[#21469D]" },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`${s.color} rounded-2xl p-6 text-white text-center`}>
                    <p className="text-2xl md:text-3xl font-extrabold">{s.val}</p>
                    <p className="text-xs mt-2 text-white/80 uppercase tracking-wide">{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Objectif */}
            <FadeIn delay={0.2} className="mt-12">
              <div className="bg-gradient-to-r from-[#063956] to-[#21469D] rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-white/60">
                  Objectif général
                </h3>
                <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                  Renforcer la résilience et la performance du système de santé de la
                  République Démocratique du Congo afin d&apos;améliorer durablement la santé
                  et le bien-être de la population.
                </p>
              </div>
            </FadeIn>
          </Container>
        </Section>
      </div>

      {/* ── 2. POURQUOI CET ACCORD ───────────── */}
      <div id="pourquoi" className="scroll-mt-16 bg-white">
        <Section>
          <Container>
            <SectionTitle
              tag="Contexte"
              title="Pourquoi cet accord ?"
              subtitle="Le système de santé congolais face à des défis majeurs qui appellent une réponse coordonnée."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src={SIGNATURE}
                    alt="Signature de l'accord RDC-USA"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063956]/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-lg">Signature officielle</p>
                    <p className="text-sm text-white/80">26 février 2026, Kinshasa</p>
                  </div>
                </div>
              </FadeIn>

              <div className="space-y-6">
                {[
                  {
                    title: "Des défis persistants",
                    body: "Accès inégal aux soins, pression des maladies infectieuses, besoins en infrastructures sanitaires et nécessité de renforcer la préparation aux urgences sanitaires.",
                  },
                  {
                    title: "Un rôle essentiel de la coopération",
                    body: "Face à ces défis, la coopération internationale joue un rôle essentiel pour soutenir les réformes engagées par le gouvernement.",
                  },
                  {
                    title: "Une nouvelle étape",
                    body: "Cet accord marque une nouvelle étape dans la coopération entre la RDC et les États-Unis. Il permet de coordonner les efforts, de mobiliser davantage de ressources et d'appuyer les priorités nationales de santé publique.",
                  },
                  {
                    title: "Au-delà du financement",
                    body: "Cet accord vise à renforcer les capacités nationales, améliorer la gouvernance du système de santé et garantir une meilleure coordination entre institutions publiques et partenaires.",
                  },
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex gap-4 p-5 bg-[#F9F9F5] rounded-2xl">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-[#B8860B]/15 flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-[#B8860B]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#063956] mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 3. DOMAINES PRIORITAIRES ─────────── */}
      <div id="domaines" className="scroll-mt-16 bg-[#063956]">
        <Section>
          <Container>
            <SectionTitle
              tag="Piliers d'intervention"
              title="Domaines prioritaires"
              subtitle="Six axes essentiels pour transformer durablement le système de santé congolais."
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Lutte contre les grandes maladies",
                  desc: "Renforcement des programmes de lutte contre le VIH/SIDA, la tuberculose et le paludisme afin de réduire la mortalité et améliorer la prise en charge des patients.",
                  color: "bg-[#21469D]",
                },
                {
                  icon: <HeartPulse className="w-6 h-6" />,
                  title: "Santé maternelle et infantile",
                  desc: "Amélioration de l'accès aux soins pour les femmes et les enfants, renforcement des services prénatals, de la vaccination et de la nutrition.",
                  color: "bg-[#009689]",
                },
                {
                  icon: <Microscope className="w-6 h-6" />,
                  title: "Surveillance épidémiologique",
                  desc: "Modernisation des systèmes de détection et de réponse aux épidémies afin d'identifier plus rapidement les menaces sanitaires.",
                  color: "bg-[#B8860B]",
                },
                {
                  icon: <FlaskConical className="w-6 h-6" />,
                  title: "Renforcement des laboratoires",
                  desc: "Développement des capacités des laboratoires pour améliorer les diagnostics et soutenir la surveillance des maladies.",
                  color: "bg-[#28B8CE]",
                },
                {
                  icon: <AlertTriangle className="w-6 h-6" />,
                  title: "Préparation aux urgences",
                  desc: "Renforcement des capacités nationales pour prévenir et gérer les crises sanitaires et les flambées épidémiques.",
                  color: "bg-[#706767]",
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "Renforcement du système de santé",
                  desc: "Appui aux infrastructures sanitaires, à la formation du personnel de santé et à l'amélioration de la gestion des services.",
                  color: "bg-[#21469D]",
                },
              ].map((d, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`${d.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5`}>
                      {d.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{d.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 4. FINANCEMENT ───────────────────── */}
      <div id="financement" className="scroll-mt-16 bg-[#F9F9F5]">
        <Section>
          <Container>
            <SectionTitle
              tag="Budget"
              title="Financement du partenariat"
              subtitle="Un investissement total estimé à 1,2 milliard de dollars sur la période 2026–2030."
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Total */}
              <FadeIn className="lg:col-span-1">
                <div className="bg-gradient-to-br from-[#063956] to-[#21469D] rounded-3xl p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <p className="text-white/60 uppercase text-xs tracking-widest mb-2">Budget total</p>
                    <p className="text-5xl font-black text-[#F6A226]">$1,2 Mrd</p>
                    <p className="text-white/70 mt-3 text-sm leading-relaxed">
                      Mobilisés sur 5 ans (2026 – 2030) pour transformer le système de santé de la RDC.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-[#F6A226]" />
                      <span className="text-sm">$900M — États-Unis</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#009689]" />
                      <span className="text-sm">$300M — Gouvernement RDC</span>
                    </div>
                    {/* bar */}
                    <div className="mt-5 h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-3/4 bg-[#F6A226] rounded-full" />
                    </div>
                    <div className="flex justify-between text-xs text-white/50 mt-2">
                      <span>USA: 75%</span>
                      <span>RDC: 25%</span>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Two cards */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={0.1}>
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6A226]/15 flex items-center justify-center mb-5">
                      <span className="text-2xl">🇺🇸</span>
                    </div>
                    <h3 className="font-bold text-[#063956] text-lg mb-3">
                      Contribution des États-Unis
                    </h3>
                    <p className="text-4xl font-black text-[#B8860B] mb-4">$900M</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Environ 900 millions USD seront mobilisés pour soutenir les programmes
                      de santé prioritaires en République Démocratique du Congo.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-[#009689]/15 flex items-center justify-center mb-5">
                      <span className="text-2xl">🇨🇩</span>
                    </div>
                    <h3 className="font-bold text-[#063956] text-lg mb-3">
                      Engagement du Gouvernement congolais
                    </h3>
                    <p className="text-4xl font-black text-[#009689] mb-4">$300M</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Le Gouvernement de la RDC s&apos;engage à augmenter progressivement ses
                      investissements nationaux dans le secteur de la santé pour atteindre
                      300 millions USD supplémentaires durant la mise en œuvre de l&apos;accord.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3} className="md:col-span-2">
                  <div className="bg-[#063956]/5 border border-[#063956]/10 rounded-3xl p-6 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#009689] shrink-0 mt-0.5" />
                    <p className="text-[#063956] text-sm leading-relaxed">
                      Cet effort traduit la volonté du pays de renforcer progressivement le
                      financement domestique du système de santé, en s&apos;alignant sur les
                      priorités définies dans le cadre de la Couverture Santé Universelle.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 5. GOUVERNANCE ───────────────────── */}
      <div id="gouvernance" className="scroll-mt-16 bg-white">
        <Section>
          <Container>
            <SectionTitle
              tag="Coordination"
              title="Gouvernance et mise en œuvre"
              subtitle="Un mécanisme de coordination transparent entre institutions nationales et partenaires."
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <FadeIn>
                <p className="text-gray-600 leading-relaxed mb-8">
                  La mise en œuvre de cet accord repose sur un mécanisme de coordination entre
                  les institutions nationales et les partenaires. Un cadre de gouvernance permettra
                  de piloter l&apos;ensemble des activités de manière structurée et transparente.
                </p>
                <div className="space-y-4">
                  {[
                    "Assurer la coordination des interventions",
                    "Suivre la mise en œuvre des programmes",
                    "Garantir la transparence dans l'utilisation des ressources",
                    "Mesurer les résultats obtenus",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-[#F9F9F5] rounded-2xl">
                      <div className="w-8 h-8 rounded-full bg-[#063956] flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-[#063956] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-[#B8860B]/10 to-[#063956]/5 border border-[#B8860B]/20 rounded-3xl p-8">
                  <h3 className="font-bold text-[#063956] text-xl mb-6">
                    Entités impliquées
                  </h3>
                  {[
                    {
                      name: "Ministère de la Santé Publique",
                      detail: "Hygiène et Prévoyance Sociale — pilotage principal",
                      color: "bg-[#063956]",
                    },
                    {
                      name: "Partenaires techniques et financiers",
                      detail: "CDC, USAID et autres agences américaines",
                      color: "bg-[#B8860B]",
                    },
                    {
                      name: "Institutions sanitaires nationales",
                      detail: "INSP, FPS, ARC-CSU et structures partenaires",
                      color: "bg-[#009689]",
                    },
                  ].map((e, i) => (
                    <div key={i} className="flex gap-4 mb-6 last:mb-0">
                      <div className={`${e.color} w-1 rounded-full shrink-0`} />
                      <div>
                        <p className="font-bold text-[#063956]">{e.name}</p>
                        <p className="text-sm text-gray-500">{e.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 6. RÉSULTATS ATTENDUS ────────────── */}
      <div id="resultats" className="scroll-mt-16 bg-[#063956]">
        <Section>
          <Container>
            <SectionTitle
              tag="Impact"
              title="Résultats attendus"
              subtitle="Les bénéfices concrets pour la population congolaise à l'horizon 2030."
              light
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  num: "01",
                  title: "Accès aux soins",
                  desc: "Amélioration de l'accès aux services de santé essentiels pour l'ensemble de la population.",
                },
                {
                  num: "02",
                  title: "Surveillance renforcée",
                  desc: "Un renforcement significatif de la surveillance des maladies sur tout le territoire.",
                },
                {
                  num: "03",
                  title: "Préparation aux urgences",
                  desc: "Une meilleure préparation et réponse aux urgences sanitaires et épidémiques.",
                },
                {
                  num: "04",
                  title: "Réduction de la mortalité",
                  desc: "Une réduction de la mortalité liée aux maladies prioritaires (VIH, TB, paludisme).",
                },
                {
                  num: "05",
                  title: "Système résilient",
                  desc: "Un système de santé plus résilient, mieux coordonné et plus performant.",
                },
                {
                  num: "06",
                  title: "Couverture Santé Universelle",
                  desc: "Progression vers la CSU pour garantir un accès équitable aux soins pour tous.",
                },
              ].map((r, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 h-full">
                    <span className="text-4xl font-black text-[#B8860B]/40">{r.num}</span>
                    <h3 className="text-white font-bold text-lg mt-3 mb-2">{r.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 7. DOCUMENTS ─────────────────────── */}
      <div id="documents" className="scroll-mt-16 bg-[#F9F9F5]">
        <Section>
          <Container>
            <SectionTitle
              tag="Ressources"
              title="Documents officiels"
              subtitle="Les documents relatifs à l'accord sont disponibles pour consultation et téléchargement."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: "Protocole d'accord de coopération en santé RDC – États-Unis",
                  type: "PDF",
                  size: "2,4 Mo",
                },
                {
                  title: "Accord de partage de données sanitaires",
                  type: "PDF",
                  size: "1,1 Mo",
                },
                {
                  title: "Accord de partage d'échantillons biologiques",
                  type: "PDF",
                  size: "876 Ko",
                },
                {
                  title: "Déclaration conjointe de signature",
                  type: "PDF",
                  size: "540 Ko",
                },
              ].map((doc, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5 group hover:border-[#063956]/20 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-[#063956]/10 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#063956]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[#063956] text-sm leading-snug mb-1 line-clamp-2">
                        {doc.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {doc.type} · {doc.size}
                      </p>
                    </div>
                    <button className="shrink-0 w-10 h-10 rounded-xl bg-[#063956]/5 hover:bg-[#063956] flex items-center justify-center text-[#063956] hover:text-white transition-all group-hover:scale-105">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 8. ACTUALITÉS ────────────────────── */}
      <div id="actualites" className="scroll-mt-16 bg-white">
        <Section>
          <Container>
            <SectionTitle
              tag="Actualités"
              title="Informations et avancées"
              subtitle="Retrouvez dans cette section les informations liées à la mise en œuvre de l'accord."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Calendar className="w-5 h-5" />,
                  label: "Évènement",
                  title: "Signature officielle de l'accord",
                  date: "26 fév. 2026",
                  color: "bg-[#063956]",
                },
                {
                  icon: <ArrowRight className="w-5 h-5" />,
                  label: "Programme",
                  title: "Lancement des programmes",
                  date: "Mars 2026",
                  color: "bg-[#B8860B]",
                },
                {
                  icon: <Newspaper className="w-5 h-5" />,
                  label: "Terrain",
                  title: "Missions conjointes",
                  date: "À venir",
                  color: "bg-[#009689]",
                },
                {
                  icon: <CheckCircle className="w-5 h-5" />,
                  label: "Résultats",
                  title: "Avancées et résultats obtenus",
                  date: "En continu",
                  color: "bg-[#21469D]",
                },
              ].map((a, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-[#F9F9F5] rounded-2xl p-6 flex flex-col gap-4 h-full border border-gray-100 hover:shadow-md transition-all">
                    <div className={`${a.color} w-10 h-10 rounded-xl flex items-center justify-center text-white`}>
                      {a.icon}
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-wide">{a.label}</span>
                      <h4 className="font-bold text-[#063956] mt-1 mb-2">{a.title}</h4>
                      <span className="text-sm text-[#B8860B] font-semibold">{a.date}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      {/* ── 9. FAQ ───────────────────────────── */}
      <div id="faq" className="scroll-mt-16 bg-[#F9F9F5]">
        <Section>
          <Container className="max-w-4xl">
            <SectionTitle
              tag="Questions fréquentes"
              title="Tout ce que vous devez savoir"
            />
            <div className="space-y-4">
              {[
                {
                  q: "Pourquoi cet accord est-il important ?",
                  a: "Il permet de renforcer durablement le système de santé congolais et d'améliorer l'accès aux soins pour la population. Il constitue un cadre structuré de collaboration pour soutenir les priorités nationales de santé et accélérer les progrès vers la Couverture Santé Universelle.",
                },
                {
                  q: "Combien représente cet accord ?",
                  a: "Le partenariat mobilise environ 1,2 milliard de dollars sur cinq ans, dont 900 millions USD de la contribution américaine et 300 millions USD d'engagement progressif du gouvernement congolais.",
                },
                {
                  q: "Quels domaines seront soutenus ?",
                  a: "La lutte contre les grandes maladies (VIH/SIDA, tuberculose, paludisme), la santé maternelle et infantile, la surveillance épidémiologique, le renforcement des laboratoires, la préparation aux urgences sanitaires et le renforcement général du système de santé.",
                },
                {
                  q: "Qui met en œuvre cet accord ?",
                  a: "Le Ministère de la Santé Publique, Hygiène et Prévoyance Sociale, en collaboration avec les partenaires techniques et financiers, notamment les agences américaines (CDC, USAID) et les structures sanitaires nationales.",
                },
                {
                  q: "Quand l'accord a-t-il été signé ?",
                  a: "L'accord a été officiellement signé le 26 février 2026 à Kinshasa, pour une durée de mise en œuvre couvrant la période 2026 à 2030.",
                },
              ].map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                      openFaq === i ? "border-[#063956]/20 shadow-md" : "border-gray-100"
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-[#B8860B] shrink-0" />
                        <span className="font-bold text-[#063956]">{faq.q}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      </div>

      {/* ── CTA FINAL ────────────────────────── */}
      <div className="bg-gradient-to-r from-[#063956] via-[#21469D] to-[#063956] py-16">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              En savoir plus sur la santé en RDC
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Découvrez les programmes, les actualités et les ressources du Ministère de la Santé
              Publique, Hygiène et Prévoyance Sociale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/actualites"
                className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#9a700a] text-white font-bold px-7 py-3 rounded-xl transition-all"
              >
                Actualités <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/documents"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all border border-white/20"
              >
                Documents officiels
              </Link>
            </div>
          </FadeIn>
        </Container>
      </div>
    </div>
  );
}