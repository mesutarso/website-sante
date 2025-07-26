'use client'

import { useQuery } from "@tanstack/react-query"
import { getWeekReportsByEpidemie } from "@/actions/rapports"
import { getWeek } from "date-fns"
import { Skeleton } from "@/components/ui/skeleton"
import CongoMap from "./map/congo"
import Indicateurs from "./indicateurs"
import Commentaires from "./commentaires"



type DashboardEpidemieProps = {
    id: string;

}

function DashboardEpidemie({ id }: DashboardEpidemieProps) {
    const week = 26;

    const { data: rapports } = useQuery({
        queryKey: ["rapports", id, week],
        queryFn: () => getWeekReportsByEpidemie(id, { semaine: week }),
    })
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="">
                    <CongoMap indicateurs={rapports} />
                    <Commentaires
                        indicateurs={rapports || []}
                        total_cas={rapports?.reduce((acc, curr) => acc + curr.cas, 0) || 0}
                        total_deces={rapports?.reduce((acc, curr) => acc + curr.deces, 0) || 0}
                    />
                </div>
                <div className="">
                    <Indicateurs indicateurs={rapports || []} />
                </div>

            </div>

        </div>
    )
}

export default DashboardEpidemie