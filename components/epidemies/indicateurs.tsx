'use client'
import { Card, CardDescription } from "@/components/ui/card"
import { motion } from "motion/react"
import React from "react"
import Tableau from "./tableau"
import TableauZS from "./tableau-zs"


const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => (
    <span className="relative group cursor-pointer">
        {children}
        <span className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-1/2 -translate-x-1/2 -top-10 z-20 whitespace-nowrap bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-lg font-medium">
            {text}
        </span>
    </span>
)

type IndicateursCardsProps = {
    total_cas: number
    total_deces: number
    taux_letalite: number
}

function IndicateursCards({ total_cas, total_deces, taux_letalite }: IndicateursCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <Card className="h-full flex flex-col items-center py-6 shadow-md hover:shadow-lg transition">
                    <Tooltip text="Nombre total de cas confirmés par les autorités sanitaires">
                        <span className="text-4xl mb-2">🧑‍⚕️</span>
                    </Tooltip>
                    <span className="text-3xl font-mono font-bold text-blue-700">
                        {total_cas.toLocaleString('fr-FR')}
                    </span>
                    <CardDescription className="mt-2 text-blue-900 font-semibold">Cas confirmés</CardDescription>
                </Card>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            >
                <Card className="h-full flex flex-col items-center py-6 shadow-md hover:shadow-lg transition">
                    <Tooltip text="Nombre total de décès enregistrés liés à l'épidémie">
                        <span className="text-4xl mb-2">⚰️</span>
                    </Tooltip>
                    <span className="text-3xl font-mono font-bold text-rose-700">
                        {total_deces.toLocaleString('fr-FR')}
                    </span>
                    <CardDescription className="mt-2 text-rose-900 font-semibold">Décès signalés</CardDescription>
                </Card>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
                <Card className="h-full flex flex-col items-center py-6 shadow-md hover:shadow-lg transition">
                    <Tooltip text="Pourcentage de décès parmi les cas confirmés (décès/cas x 100)">
                        <span className="text-4xl mb-2">📉</span>
                    </Tooltip>
                    <span className="text-3xl font-mono font-bold text-green-700">
                        {taux_letalite.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} %
                    </span>
                    <CardDescription className="mt-2 text-green-900 font-semibold">Taux de létalité</CardDescription>
                </Card>
            </motion.div>
        </div>
    )
}

type IndicateursProps = {
    indicateurs: any[]
    selectedProvince?: string
    provinces?: any[]
}

function Indicateurs({ indicateurs, selectedProvince = "all", provinces }: IndicateursProps) {
    const total_cas = indicateurs.reduce((acc, curr) => acc + curr.cas, 0)
    const total_deces = indicateurs.reduce((acc, curr) => acc + curr.deces, 0)
    const taux_letalite = total_cas > 0 ? (total_deces / total_cas) * 100 : 0

    // Récupérer les données des zones de santé si une province est sélectionnée
    const rapportZS = selectedProvince !== "all"
        ? indicateurs?.filter((rapport: any) => rapport.province_id === selectedProvince)[0]?.rapport_zs || []
        : []

    const provinceLabel = selectedProvince !== "all"
        ? provinces?.find(p => p.value === selectedProvince)?.label
        : undefined

    return (
        <>
            <IndicateursCards
                total_cas={total_cas}
                total_deces={total_deces}
                taux_letalite={taux_letalite}
            />

            {/* Affichage conditionnel : tableau de provinces ou zones de santé */}
            {selectedProvince === "all" ? (
                <Tableau indicateurs={indicateurs} />
            ) : (
                <TableauZS
                    rapport_zs={rapportZS}
                    provinceLabel={provinceLabel}
                />
            )}
        </>
    )
}

export default Indicateurs