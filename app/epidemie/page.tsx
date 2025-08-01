
import { Container } from "@/components/craft";
import { getEpidemies } from "@/actions/epidemies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Activity, Shield, BarChart3, Users, Calendar } from "lucide-react";
import Link from "next/link";

// Interface pour les données d'épidémie
interface Epidemie {
    documentId: string;
    nom: string;
    description?: string;
    codeOMS?: string;
    rapport_hebomandaires: number;
}

// Images par type d'épidémie
const getEpidemieImage = (nom: string): string => {
    const nomLower = nom.toLowerCase();

    if (nomLower.includes('covid') || nomLower.includes('corona')) {
        return '/images/virus.jpg';
    } else if (nomLower.includes('ebola')) {
        return '/images/virus.jpg';
    } else if (nomLower.includes('choléra')) {
        return '/images/epidemies/cholera.webp';
    }
    else if (nomLower.includes('mpox')) {
        return '/images/epidemies/mpox.webp';
    }
    else if (nomLower.includes('anthrax')) {
        return '/images/epidemies/anthrax.jpg';
    }
    else if (nomLower.includes('fièvre jaune')) {
        return '/images/epidemies/FiEvre-jaune.jpg';
    } else if (nomLower.includes('rubéole')) {
        return '/images/epidemies/Rubeole.jpg';
    } else if (nomLower.includes('tétanos')) {
        return '/images/epidemies/Tétanos.jpg';
    } else if (nomLower.includes('tétanos')) {
        return '/images/epidemies/Tétanos.jpg';
    } else if (nomLower.includes('paludisme') || nomLower.includes('malaria')) {
        return '/images/prevention.jpeg';
    } else if (nomLower.includes('rougeole') || nomLower.includes('measles')) {
        return '/images/prevention.jpeg';
    } else if (nomLower.includes('polio')) {
        return '/images/prevention.jpeg';
    } else if (nomLower.includes('fièvre') || nomLower.includes('fever')) {
        return '/images/labo.jpeg';
    } else if (nomLower.includes('diarrhée') || nomLower.includes('diarrhea')) {
        return '/images/hygiene.jpeg';
    } else {

        return '/images/virus.jpg';
    }
};

async function EpidemiePage() {
    const epidemies = await getEpidemies() as Epidemie[];

    return (
        <div>
            {/* Section avec image de fond */}

            <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/epidemies/epidemie.jpg)' }}>
                <div className="absolute inset-0 bg-black/50"></div>
                <Container className="relative z-10 mb-12">
                    <h1 className="text-5xl text-white font-bold mb-12">Surveillance épidémiologique</h1>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <p className="text-lg text-white mb-6 leading-relaxed">
                                La surveillance épidémiologique constitue un pilier fondamental de la santé publique en RDC.
                                Notre système de surveillance permet de détecter précocement les épidémies, de suivre leur évolution
                                et d&apos;orienter les interventions de santé publique pour protéger la population congolaise.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-200">
                                <Activity className="w-4 h-4" />
                                <span>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</span>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                            <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Mission de Surveillance
                            </h3>
                            <ul className="text-sm text-white space-y-2">
                                <li>• Détection précoce des foyers épidémiques</li>
                                <li>• Suivi des tendances épidémiologiques</li>
                                <li>• Évaluation de l&apos;impact des interventions</li>
                                <li>• Appui à la prise de décision sanitaire</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>

                <h2 className="text-5xl font-semibold mb-12 text-gray-800">Maladies sous surveillance</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {epidemies && epidemies.length > 0 ? (
                        epidemies
                            .sort((a, b) => {
                                // Mettre le choléra en premier
                                if (a.nom.toLowerCase().includes('choléra')) return -1;
                                if (b.nom.toLowerCase().includes('choléra')) return 1;
                                return 0;
                            })
                            .map((epidemie: Epidemie) => (
                                <Card
                                    key={epidemie.documentId}
                                    className="hover:shadow-lg hover:scale-105 hover:z-50 transition-all duration-300 overflow-hidden group relative"
                                    style={{
                                        backgroundImage: `url(${getEpidemieImage(epidemie.nom)})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >
                                    {/* Overlay sombre pour la lisibilité */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>

                                    {/* Contenu de la carte */}
                                    <div className="relative z-10">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="text-lg font-semibold text-white">
                                                    {epidemie.nom}
                                                </CardTitle>
                                                <Badge
                                                    variant={epidemie.rapport_hebomandaires > 0 ? "default" : "secondary"}
                                                    className="text-xs"
                                                >
                                                    {epidemie.rapport_hebomandaires > 0 ? "Active" : "Inactive"}
                                                </Badge>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            {epidemie.description && (
                                                <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                                                    {epidemie.description}
                                                </p>
                                            )}

                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-gray-300">Code OMS :</span>
                                                    <span className="font-medium text-white">
                                                        {epidemie.codeOMS || 'Non défini'}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-xs">
                                                    <span className="text-gray-300">Rapports :</span>
                                                    <span className="font-medium text-blue-300">
                                                        {epidemie.rapport_hebomandaires} hebdomadaires
                                                    </span>
                                                </div>
                                            </div>
                                            <Link href={`/epidemie/${epidemie.documentId}`}>
                                                <Button
                                                    className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50"
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <BarChart3 className="w-4 h-4 mr-2" />
                                                    Voir les statistiques
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </div>
                                </Card>
                            ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">Aucune épidémie enregistrée pour le moment.</p>
                        </div>
                    )}
                </div>
                {/* Section d'urgence en verre */}
                <div className="mt-12 relative">
                    <div className="bg-green-500/10 backdrop-blur-md border border-green-200/30 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-500/20 p-3 rounded-full">
                                <AlertTriangle className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-1">Urgence médicale</h3>
                                <p className="text-black-200">
                                    En cas d&apos;urgence, appelez immédiatement le <span className="font-bold text-black text-lg">151</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

            <div className="mt-8 bg-brown">
                <Container>
                    <h2 className="text-5xl font-semibold mb-12 text-white">Indicateurs de surveillance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="text-center">
                            <CardContent className="p-4">
                                <Users className="w-8 h-8 text-blue mx-auto mb-2" />
                                <div className="text-2xl font-bold text-blue">{epidemies?.length || 0}</div>
                                <div className="text-sm text-gray-600">Maladies surveillées</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="p-4">
                                <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-green-600">
                                    {epidemies?.reduce((acc: number, ep: Epidemie) => acc + ep.rapport_hebomandaires, 0) || 0}
                                </div>
                                <div className="text-sm text-gray-600">Rapports hebdomadaires</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="p-4">
                                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-orange-600">24/7</div>
                                <div className="text-sm text-gray-600">Surveillance active</div>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardContent className="p-4">
                                <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-red-600">0</div>
                                <div className="text-sm text-gray-600">Alertes actives</div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default EpidemiePage;