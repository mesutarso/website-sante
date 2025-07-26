
import { Container, Section } from "@/components/craft";
import { getEpidemies } from "@/actions/epidemies";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Activity, Shield, BarChart3, Users, Calendar } from "lucide-react";
import Link from "next/link";

async function EpidemiePage() {
    const epidemies = await getEpidemies();

    return (

        <Section>

            <Container className="mb-12">
                <h1 className="text-5xl text-blue font-bold mb-12">Surveillance Épidémiologique</h1>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            La surveillance épidémiologique constitue un pilier fondamental de la santé publique en RDC.
                            Notre système de surveillance permet de détecter précocement les épidémies, de suivre leur évolution
                            et d'orienter les interventions de santé publique pour protéger la population congolaise.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Activity className="w-4 h-4" />
                            <span>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</span>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue">
                        <h3 className="font-semibold text-blue mb-3 flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Mission de Surveillance
                        </h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Détection précoce des foyers épidémiques</li>
                            <li>• Suivi des tendances épidémiologiques</li>
                            <li>• Évaluation de l'impact des interventions</li>
                            <li>• Appui à la prise de décision sanitaire</li>
                        </ul>
                    </div>
                </div>
            </Container>


            <Section className="mb-8 bg-blue">
                <Container>
                    <h2 className="text-5xl font-semibold mb-12 text-white">Indicateurs de Surveillance</h2>
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
                                    {epidemies?.reduce((acc: number, ep: any) => acc + ep.rapport_hebomandaires, 0) || 0}
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

            </Section>


            <Container>
                <h2 className="text-5xl font-semibold mb-12 text-gray-800">Maladies sous Surveillance</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {epidemies && epidemies.length > 0 ? (
                        epidemies.map((epidemie: any) => (
                            <Card key={epidemie.documentId} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <CardTitle className="text-lg font-semibold text-gray-800">
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
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {epidemie.description}
                                        </p>
                                    )}

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500">Code OMS :</span>
                                            <span className="font-medium">
                                                {epidemie.codeOMS || 'Non défini'}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-gray-500">Rapports :</span>
                                            <span className="font-medium text-blue">
                                                {epidemie.rapport_hebomandaires} hebdomadaires
                                            </span>
                                        </div>
                                    </div>
                                    <Link href={`/epidemie/${epidemie.documentId}`}>
                                        <Button
                                            className="w-full"
                                            variant="outline"
                                            size="sm"
                                        >
                                            <BarChart3 className="w-4 h-4 mr-2" />
                                            Voir les statistiques
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">Aucune épidémie enregistrée pour le moment.</p>
                        </div>
                    )}
                </div>
            </Container>


        </Section>

    );
}

export default EpidemiePage;