'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type TableauProps = {
    indicateurs: any[]
    onProvinceSelect?: (provinceId: string) => void
    provinces?: any[]
}

function Tableau({ indicateurs, onProvinceSelect, provinces }: TableauProps) {
    const indicateursTries = [...indicateurs].sort((a, b) => {
        if (!a.province) return 1;
        if (!b.province) return 1;
        return a.province.localeCompare(b.province, 'fr', { sensitivity: 'base' });
    });

    const handleRowClick = (provinceName: string) => {
        if (!onProvinceSelect || !provinces) return;

        // Trouver la province correspondante dans la liste des provinces
        const provinceData = provinces.find(p => p.label === provinceName);
        if (provinceData) {
            onProvinceSelect(provinceData.value);
        }
    };

    return (
        <Card className="w-full max-w-4xl mx-auto mt-4 shadow-md">
            <CardHeader>
                <CardTitle className="text-lg font-bold">Détail par province</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 text-left">Province</th>
                            <th className="px-4 py-2 text-right">🧑‍⚕️ Cas</th>
                            <th className="px-4 py-2 text-right">⚰️ Décès</th>
                            <th className="px-4 py-2 text-right">📉 Taux de létalité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {indicateursTries.map((item, idx) => {
                            const letalite = item.cas > 0 ? (item.deces / item.cas) * 100 : 0;
                            return (
                                <tr
                                    key={item.province || idx}
                                    className="border-t border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                                    onClick={() => handleRowClick(item.province)}
                                    title="Cliquez pour filtrer par cette province"
                                >
                                    <td className="px-4 py-2 font-medium text-gray-900">{item.province}</td>
                                    <td className="px-4 py-2 text-right text-blue-700 font-mono">{item.cas?.toLocaleString('fr-FR')}</td>
                                    <td className="px-4 py-2 text-right text-rose-700 font-mono">{item.deces?.toLocaleString('fr-FR')}</td>
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

export default Tableau 