"use client"
import { useQuery } from "@tanstack/react-query"
import { getEpidemieByDocumentId } from "@/actions/epidemies"
import { Skeleton } from "@/components/ui/skeleton"

type HeadingProps = {
    id: string;
}

function Heading({ id }: HeadingProps) {
    const { data: epidemie, isLoading } = useQuery({
        queryKey: ["epidemie", id],
        queryFn: () => getEpidemieByDocumentId(id),
    })
    if (isLoading) {
        return <Skeleton className="h-12 w-3/4 mb-12" />
    }
    return (
        <h1 className="text-2xl text-center md:text-left md:text-5xl text-blue font-bold mb-12">Surveillance Épidémiologique : {epidemie || ''}</h1>
    )
}

export default Heading