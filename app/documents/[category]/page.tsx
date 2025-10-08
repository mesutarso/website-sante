import { Section, Container } from "@/components/craft";
import { CategoryDocumentsTable } from "@/components/documents/category-documents-table";
import { getDocumentsByCategory } from "@/wordpress/collections/documents";
import { Metadata } from "next";


type DocumentsByCategoryPageProps = {
    params: Promise<{ category: string }>
}

export const generateMetadata = async ({ params }: DocumentsByCategoryPageProps): Promise<Metadata> => {
    const { category } = await params;
    const categoryData = await getDocumentsByCategory(category);

    return {
        title: `Documents - ${categoryData.name || category}`,
        description: `Consultez les ${categoryData.count} documents de la catégorie ${categoryData.name || category}`,
    }
}

async function DocumentsByCategoryPage({ params }: DocumentsByCategoryPageProps) {
    const { category } = await params;
    const categoryData = await getDocumentsByCategory(category);

    return (
        <div className="bg-white min-h-screen">
            <Section className="bg-blue text-white">
                <Container className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">
                        Documents
                    </h1>
                    <p className="max-w-xl mx-auto">
                        Catégorie : {categoryData.name || category}
                    </p>
                </Container>
            </Section>

            <Section>
                <Container className="py-8">
                    <CategoryDocumentsTable
                        documents={categoryData.documents}
                        categoryName={categoryData.name}
                        documentCount={categoryData.count}
                    />
                </Container>
            </Section>
        </div>
    )
}

export default DocumentsByCategoryPage