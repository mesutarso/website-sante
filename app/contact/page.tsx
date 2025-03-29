import ContactContent from "@/components/contact/content";
import { Section } from "@/components/craft";

export default function ContactPage() {
    return (
        <>
            <Section className="bg-blue text-white">
                <div
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold  mb-4">
                        Contactez-nous
                    </h1>
                    <p className=" max-w-xl mx-auto">
                        Pour toute question ou information complémentaire, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider.
                    </p>
                </div>
            </Section>
            <Section>
                <ContactContent />
            </Section>
        </>
    );
}