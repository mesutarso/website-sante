'use client'

import { useQuery } from "@tanstack/react-query"
import { useState, useEffect, useMemo } from "react"
import { getWeekReportsByEpidemie } from "@/actions/rapports"
import { getProvinces } from "@/actions/provinces"
import CongoMap from "./map/congo"
import Indicateurs from "./indicateurs"
import Commentaires from "./commentaires"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { ArrowLeftIcon, FilterIcon, XIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { useRouter } from "next/navigation"

type DashboardEpidemieProps = {
    id: string;
}

function DashboardEpidemie({ id }: DashboardEpidemieProps) {
    const [selectedWeek, setSelectedWeek] = useState<number>(29);
    const [selectedProvince, setSelectedProvince] = useState<string>("all");
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const router = useRouter();

    const { data: provinces } = useQuery({
        queryKey: ["provinces"],
        queryFn: () => getProvinces(),
    });

    const { data: rapports, isLoading } = useQuery({
        queryKey: ["rapports", id, selectedWeek],
        queryFn: () => getWeekReportsByEpidemie(id, { semaine: selectedWeek }),
    });

    const filteredRapports = useMemo(() => {
        if (!rapports) return [];
        if (selectedProvince === "all") return rapports;
        return rapports.filter(r => r.province_id === selectedProvince);
    }, [rapports, selectedProvince]);

    const weekOptions = Array.from({ length: 52 }, (_, i) => i + 1);

    const totalCas = filteredRapports?.reduce((acc, curr) => acc + curr.cas, 0) || 0;
    const totalDeces = filteredRapports?.reduce((acc, curr) => acc + curr.deces, 0) || 0;

    const clearFilters = () => {
        setSelectedWeek(29);
        setSelectedProvince("all");
    };

    const activeFiltersCount = (selectedWeek !== 29 ? 1 : 0) + (selectedProvince !== "all" ? 1 : 0);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" onClick={() => router.back()}>
                        <ArrowLeftIcon className="w-4 h-4" />
                    </Button>
                    <div>
                        <h1 className="text-2xl font-bold">
                            Tableau de bord épidémiologique
                        </h1>
                        <p className="text-muted-foreground">
                            Semaine {selectedWeek}
                            {selectedProvince !== "all" && provinces && (
                                <span> • {provinces.find(p => p.value === selectedProvince)?.label}</span>
                            )}
                        </p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="sm:hidden"
                >
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filtres
                    {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2 px-1.5 py-0.5 text-xs">
                            {activeFiltersCount}
                        </Badge>
                    )}
                </Button>
            </div>

            <div className={`${showFilters ? 'block' : 'hidden'} sm:block bg-card rounded-lg border p-4`}>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex flex-col sm:flex-row gap-4 flex-1">

                        <div className="flex flex-col gap-2 min-w-[200px]">
                            <label className="text-sm font-medium">Semaine</label>
                            <Select
                                value={selectedWeek.toString()}
                                onValueChange={(value) => setSelectedWeek(parseInt(value))}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sélectionner une semaine" />
                                </SelectTrigger>
                                <SelectContent>
                                    {weekOptions.map((week) => (
                                        <SelectItem key={week} value={week.toString()}>
                                            Semaine {week}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Filtre province */}
                        <div className="flex flex-col gap-2 min-w-[200px]">
                            <label className="text-sm font-medium">Province (optionnel)</label>
                            <Select
                                value={selectedProvince}
                                onValueChange={setSelectedProvince}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Toutes les provinces" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Toutes les provinces</SelectItem>
                                    {provinces?.filter(province => province.value).map((province) => (
                                        <SelectItem key={province.value} value={province.value}>
                                            {province.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-2">
                        {activeFiltersCount > 0 && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={clearFilters}
                            >
                                <XIcon className="w-4 h-4 mr-2" />
                                Réinitialiser
                            </Button>
                        )}
                    </div>
                </div>

                {/* Filtres actifs */}
                {activeFiltersCount > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                        <span className="text-sm text-muted-foreground">Filtres actifs:</span>
                        {selectedWeek !== 26 && (
                            <Badge variant="secondary">
                                Semaine {selectedWeek}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-1 h-auto p-0.5"
                                    onClick={() => setSelectedWeek(26)}
                                >
                                    <XIcon className="w-3 h-3" />
                                </Button>
                            </Badge>
                        )}
                        {selectedProvince !== "all" && provinces && (
                            <Badge variant="secondary">
                                {provinces.find(p => p.value === selectedProvince)?.label}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="ml-1 h-auto p-0.5"
                                    onClick={() => setSelectedProvince("all")}
                                >
                                    <XIcon className="w-3 h-3" />
                                </Button>
                            </Badge>
                        )}
                    </div>
                )}
            </div>



            {isLoading ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-card rounded-lg border p-4 h-96 flex items-center justify-center">
                            <div className="text-muted-foreground">Chargement de la carte...</div>
                        </div>
                        <div className="bg-card rounded-lg border p-4 h-48 flex items-center justify-center">
                            <div className="text-muted-foreground">Chargement des commentaires...</div>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg border p-4 h-96 flex items-center justify-center">
                        <div className="text-muted-foreground">Chargement des indicateurs...</div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <div className="space-y-4">
                        <div className="bg-card rounded-lg border p-4">
                            <CongoMap
                                indicateurs={filteredRapports}
                                selectedProvince={selectedProvince}
                                onProvinceSelect={(province) => {
                                    if (province === "Toutes les provinces") {
                                        setSelectedProvince("all");
                                    } else {
                                        // Trouver la valeur correspondante dans la liste des provinces
                                        const provinceData = provinces?.find(p => p.label === province);
                                        if (provinceData) {
                                            setSelectedProvince(provinceData.value);
                                        }
                                    }
                                }}
                            />
                        </div>
                        <div className="bg-card rounded-lg border p-4">
                            <Commentaires
                                indicateurs={filteredRapports || []}
                                total_cas={totalCas}
                                total_deces={totalDeces}
                                selectedWeek={selectedWeek}
                                selectedProvince={selectedProvince}
                                provinceLabel={provinces?.find(p => p.value === selectedProvince)?.label}
                                rapport_zs={selectedProvince !== "all"
                                    ? filteredRapports?.filter((rapport: any) => rapport.province_id === selectedProvince)[0]?.rapport_zs || []
                                    : []
                                }
                            />
                        </div>

                    </div>

                    {/* Colonne droite: Indicateurs */}
                    <div className="bg-card rounded-lg border p-4">
                        <Indicateurs
                            indicateurs={filteredRapports || []}
                            selectedProvince={selectedProvince}
                            provinces={provinces}
                        />
                    </div>
                </div>
            )}


        </div>
    )
}

export default DashboardEpidemie