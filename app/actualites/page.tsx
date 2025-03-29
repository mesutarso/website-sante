import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Section, Container } from "@/components/craft";
import CardArticle from "@/components/articles/Card";
import Link from "next/link";

import { articles } from "@/lib/data";

interface ArticleProps {
  image: string;
  title: string;
  date: string;
}

const data: ArticleProps[] = [
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
  {
    image: "/images/image.png",
    title: "L'ONU adopte une résolution sur la coopération des Casques ...",
    date: "20 Novembre 2024",
  },
];

function Actualites() {
  return (
    <div>
      <div className="bg-blue w-full min-h-[600px] text-white p-6">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-5 mt-3">
            <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/articles/article.png?height=400&width=600"
                alt="Group of officials"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-white text-blue text-sm font-semibold py-1 px-3 rounded-full inline-block">
                11 juin 2024
              </div>
              <h1 className="text-3xl font-bold">
                Descente Au Siège Du Secretariat General De La Cooperation
                Internationale
              </h1>
              <p className="text-gray-300 font-medium text-lg">
                Stratégie de notre mission dans la réalisation des 6 engagements
                du contrat social du Président de la République ...
              </p>
              <Button variant="outline" className="text-blue border-white">
                <Link href="/actualites/descente-au-siege-du">
                  Lire cet article
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-yellowSky">
        <Section>
          <Container>
            <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              <h2 className="text-2xl font-bold max-w-2xl text-blue">
                Découvrez les dernières nouvelles de la coopération
                internationale et Francophonie
              </h2>
              <div className="flex space-x-4 mb-8">
                <Select>
                  <SelectTrigger className="w-[180px] bg-transparent border-blue text-blue">
                    <SelectValue placeholder="Categorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="cooperation">Coopération</SelectItem>
                    <SelectItem value="francophonie">Francophonie</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px] bg-transparent border-blue text-blue">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les dates</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-24">
              {articles.map((item: any, key: number) => (
                <CardArticle
                  key={key}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                />
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}

export default Actualites;
