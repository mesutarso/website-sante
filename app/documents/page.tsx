import { Container, Section } from "@/components/craft"
import { Metadata } from "next"
import { DocumentDataTable } from "@/components/documents/document-data-table"

export const metadata: Metadata = {
    title: "Documents",
    description: "Documents du Ministère de la Santé Publique, Hygiène et prévoyance sociale",
}

function page() {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-blue text-white ">
                <Container
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold  mb-4">
                        Documents
                    </h1>
                    <p className=" max-w-xl mx-auto">
                        Documents du Ministère de la Santé Publique, Hygiène et prévoyance sociale
                    </p>
                </Container>
            </div>

            <Section>
                <Container className="py-8">
                    <DocumentDataTable />
                </Container>
            </Section>
        </div>
    )
}

export default page