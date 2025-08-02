'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface ZoneSante {
    zones_de_sante: string;
    cas: number;
    deces: number;
}

interface TableauZSProps {
    rapport_zs: ZoneSante[];
    provinceLabel?: string;
    onBackToProvinces?: () => void;
}

function TableauZS({ rapport_zs, provinceLabel, onBackToProvinces }: TableauZSProps) {
    if (!rapport_zs || rapport_zs.length === 0) {
        return (
            <Card className="w-full max-w-4xl mx-auto mt-4 shadow-md">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-bold">
                            Détail par zone de santé {provinceLabel && `- ${provinceLabel}`}
                        </CardTitle>
                        {onBackToProvinces && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onBackToProvinces}
                                className="flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Retour aux provinces
                            </Button>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-muted-foreground py-8">
                        Aucune donnée disponible pour les zones de santé
                    </div>
                </CardContent>
            </Card>
        )
    }

    const zonesTriees = [...rapport_zs].sort((a, b) => {
        if (!a.zones_de_sante) return 1;
        if (!b.zones_de_sante) return -1;
        return a.zones_de_sante.localeCompare(b.zones_de_sante, 'fr', { sensitivity: 'base' });
    });

    return (
        <Card className="w-full max-w-4xl mx-auto mt-4 shadow-md">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">
                        Détail par zone de santé {provinceLabel && `- ${provinceLabel}`}
                    </CardTitle>
                    {onBackToProvinces && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onBackToProvinces}
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Retour aux provinces
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 text-left">Zone de santé</th>
                            <th className="px-4 py-2 text-right">🧑‍⚕️ Cas</th>
                            <th className="px-4 py-2 text-right">⚰️ Décès</th>
                            <th className="px-4 py-2 text-right">📉 Taux de létalité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {zonesTriees.map((zone, idx) => {
                            const letalite = zone.cas > 0 ? (zone.deces / zone.cas) * 100 : 0;
                            return (
                                <tr key={zone.zones_de_sante || idx} className="border-t border-gray-100 hover:bg-gray-50">
                                    <td className="px-4 py-2 font-medium text-gray-900">{zone.zones_de_sante}</td>
                                    <td className="px-4 py-2 text-right text-blue-700 font-mono">{zone.cas?.toLocaleString('fr-FR')}</td>
                                    <td className="px-4 py-2 text-right text-rose-700 font-mono">{zone.deces?.toLocaleString('fr-FR')}</td>
                                    <td className="px-4 py-2 text-right text-green-700 font-mono">
                                        {letalite.toLocaleString('fr-FR', { maximumFractionDigits: 2 })} %
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    )
}

export default TableauZS 