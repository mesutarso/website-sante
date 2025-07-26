'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

type CommentairesProps = {
    indicateurs: any[]
    total_cas: number
    total_deces: number
    selectedWeek?: number
    selectedProvince?: string
    provinceLabel?: string
}

function Commentaires({
    indicateurs,
    total_cas,
    total_deces,
    selectedWeek,
    selectedProvince,
    provinceLabel
}: CommentairesProps) {
    const indicateursTries = [...indicateurs].sort((a, b) => {
        if (!a.province) return 1;
        if (!b.province) return -1;
        return a.province.localeCompare(b.province, 'fr', { sensitivity: 'base' });
    });

    // Utiliser la semaine sélectionnée ou calculer la semaine courante
    const currentYear = new Date().getFullYear();
    const weekNumber = selectedWeek || (() => {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
    })();

    // Vérifier si c'est une seule province ou plusieurs
    // Si selectedProvince est défini et n'est pas "all", c'est une province spécifique
    const isFilteredByProvince = selectedProvince && selectedProvince !== "all";
    const uniqueProvinces = [...new Set(indicateursTries.map(i => i.province).filter(Boolean))];
    const isSingleProvince = isFilteredByProvince || uniqueProvinces.length === 1;

    const tauxLetaliteGlobal = total_cas > 0 ? (total_deces / total_cas) * 100 : 0;

    // Obtenir le nom de la province pour l'affichage
    const getProvinceDisplayName = () => {
        if (isFilteredByProvince) {
            return provinceLabel || selectedProvince;
        }
        return uniqueProvinces[0];
    };

    // Commentaire pour une seule province
    const renderSingleProvinceComment = () => {
        const province = getProvinceDisplayName();
        const indicateur = indicateursTries[0] || { cas: 0, deces: 0 };
        const tauxLetaliteProvince = indicateur.cas > 0 ? (indicateur.deces / indicateur.cas) * 100 : 0;

        const contextText = isFilteredByProvince
            ? `Données filtrées pour la province de ${province}`
            : `Analyse spécifique à la province de ${province}`;

        return (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    <strong>📍 Analyse provinciale - {province}</strong> (Semaine {weekNumber}, {currentYear})
                </p>
                <p className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    {contextText} • Semaine {weekNumber}
                </p>
                <p>
                    <strong>Situation épidémiologique :</strong> {isFilteredByProvince ? `Selon les filtres appliqués, la province de` : `La province de`} {province} présente actuellement {indicateur.cas?.toLocaleString('fr-FR') || 0} cas confirmés
                    et {indicateur.deces?.toLocaleString('fr-FR') || 0} décès, soit un taux de létalité de {tauxLetaliteProvince.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}%.
                </p>
                <p>
                    <strong>Tendance :</strong> {tauxLetaliteProvince > 5
                        ? `Le taux de létalité élevé (${tauxLetaliteProvince.toFixed(2)}%) nécessite une attention particulière et un renforcement des capacités de prise en charge.`
                        : tauxLetaliteProvince > 2
                            ? `Le taux de létalité modéré (${tauxLetaliteProvince.toFixed(2)}%) indique une situation sous contrôle mais nécessitant une surveillance continue.`
                            : `Le faible taux de létalité (${tauxLetaliteProvince.toFixed(2)}%) suggère une bonne prise en charge des cas ou une forme moins sévère de l'épidémie.`}
                </p>

            </div>
        );
    };

    // Commentaire global pour plusieurs provinces
    const renderGlobalComment = () => {
        const maxCas = Math.max(...indicateursTries.map(i => i.cas || 0));
        const maxDeces = Math.max(...indicateursTries.map(i => i.deces || 0));
        const maxLetalite = Math.max(...indicateursTries.map(i => (i.cas > 0 ? (i.deces / i.cas) * 100 : 0)));

        const provinceMaxCas = indicateursTries.find(i => i.cas === maxCas);
        const provinceMaxDeces = indicateursTries.find(i => i.deces === maxDeces);
        const provinceMaxLetalite = indicateursTries.find(i => (i.cas > 0 ? (i.deces / i.cas) * 100 : 0) === maxLetalite);

        const provincesAffectees = indicateursTries.filter(i => i.cas > 0).length;

        return (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    <strong>🌍 Analyse épidémiologique nationale - Semaine {weekNumber}</strong> ({currentYear})
                </p>
                <p className="text-xs text-green-600 bg-green-50 p-2 rounded">
                    Vue d'ensemble nationale • Semaine {weekNumber} • {uniqueProvinces.length} provinces analysées sur 26 provinces de la RDC
                </p>
                <p>
                    <strong>Situation générale :</strong> Pour la semaine {weekNumber}, l'épidémie affecte {provincesAffectees} province{provincesAffectees > 1 ? 's' : ''} sur les 26 provinces de la RDC avec un total de {total_cas.toLocaleString('fr-FR')} cas confirmés
                    et {total_deces.toLocaleString('fr-FR')} décès (taux de létalité national : {tauxLetaliteGlobal.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}%).
                </p>
                <p>
                    <strong>Provinces les plus touchées :</strong> {provinceMaxCas?.province} enregistre le plus grand nombre de cas ({maxCas.toLocaleString('fr-FR')} cas).
                    {provinceMaxCas?.province !== provinceMaxDeces?.province && (
                        <span> {provinceMaxDeces?.province} présente le plus de décès ({maxDeces.toLocaleString('fr-FR')} décès).</span>
                    )}
                    {' '}Le taux de létalité le plus élevé est observé dans {provinceMaxLetalite?.province} ({maxLetalite.toLocaleString('fr-FR', { maximumFractionDigits: 2 })}%).
                </p>
                <p>
                    <strong>Répartition géographique :</strong> {provincesAffectees === 26
                        ? 'Toutes les 26 provinces de la RDC sont affectées, indiquant une propagation généralisée nécessitant une réponse coordonnée au niveau national.'
                        : `${provincesAffectees} province${provincesAffectees > 1 ? 's' : ''} sur les 26 provinces de la RDC ${provincesAffectees > 1 ? 'sont affectées' : 'est affectée'}, suggérant une propagation ${provincesAffectees > 13 ? 'majoritaire' : 'encore localisée'} qui ${provincesAffectees > 13 ? 'nécessite une coordination nationale renforcée' : 'peut être contenue avec des mesures ciblées'}.`}
                </p>

            </div>
        );
    };

    return (
        <Card className="w-full max-w-4xl mx-auto mt-4 shadow-md">
            <CardHeader>
                <CardTitle className="text-lg font-bold">
                    📊 {isSingleProvince ? 'Analyse épidémiologique provinciale' : 'Analyse épidémiologique nationale'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {isSingleProvince ? renderSingleProvinceComment() : renderGlobalComment()}
            </CardContent>
        </Card>
    )
}

export default Commentaires 