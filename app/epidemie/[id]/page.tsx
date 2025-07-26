import { Section, Container } from "@/components/craft";
import Heading from "@/components/epidemies/details/heading";
import DashboardEpidemie from "@/components/epidemies";

async function EpidemiePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <Section>
            <Container>
                <Heading id={id} />
                <DashboardEpidemie id={id} />
            </Container>
        </Section>
    )
}

export default EpidemiePage