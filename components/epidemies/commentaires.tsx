'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type CommentairesProps = {
    indicateurs: any[]
    total_cas: number
    total_deces: number
}

function Commentaires({ indicateurs, total_cas, total_deces }: CommentairesProps) {
    const indicateursTries = [...indicateurs].sort((a, b) => {
        if (!a.province) return 1;
        if (!b.province) return -1;
        return a.province.localeCompare(b.province, 'fr', { sensitivity: 'base' });
    });

    const maxCas = Math.max(...indicateursTries.map(i => i.cas || 0));
    const maxDeces = Math.max(...indicateursTries.map(i => i.deces || 0));
    const maxLetalite = Math.max(...indicateursTries.map(i => (i.cas > 0 ? (i.deces / i.cas) * 100 : 0)));

    const provinceMaxCas = indicateursTries.find(i => i.cas === maxCas);
    const provinceMaxDeces = indicateursTries.find(i => i.deces === maxDeces);
    const provinceMaxLetalite = indicateursTries.find(i => (i.cas > 0 ? (i.deces / i.cas) * 100 : 0) === maxLetalite);

    const tauxLetaliteGlobal = total_cas > 0 ? (total_deces / total_cas) * 100 : 0;

    return (
        <Card className="w-full max-w-4xl mx-auto mt-4 shadow-md">
            <CardHeader>
                <CardTitle className="text-lg font-bold">📊 Analyse épidémiologique</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                    <p>
                        <strong>Province la plus touchée :</strong> {provinceMaxCas?.province} avec {maxCas.toLocaleString('fr-FR')} cas confirmés.
                        {provinceMaxCas?.province !== provinceMaxDeces?.province && (
                            <span> La province avec le plus de décès est {provinceMaxDeces?.province} ({maxDeces.toLocaleString('fr-FR')} décès).</span>
                        )}
                    </p>
                    <p>
                        <strong>Taux de létalité le plus élevé :</strong> {provinceMaxLetalite?.province} avec {maxLetalite.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}%.
                        {maxLetalite > tauxLetaliteGlobal && (
                            <span> Ce taux est supérieur à la moyenne nationale ({tauxLetaliteGlobal.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}%).</span>
                        )}
                    </p>
                    <p>
                        <strong>Interprétation :</strong> La répartition géographique montre une concentration des cas dans certaines provinces,
                        nécessitant une surveillance renforcée et des mesures de contrôle ciblées.
                        Le taux de létalité varie significativement entre les provinces,
                        suggérant des différences dans la qualité des soins ou la virulence de l'épidémie selon les régions.
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}

export default Commentaires 