'use client'
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from 'motion/react'



interface ArticleProps {
  image: string,
  title: string,
  date: string,
  slug: string
}


const CardArticle: React.FC<ArticleProps> = ({ image, title, date, slug }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="border-none shadow p-0 h-full max-h-full">
        <Link href={`/actualites/${slug}`}>
          <CardHeader className="relative p-0">
            <Image
              src={image || "/images/prevoyance.jpeg"}
              alt={`image de l'article: ${title}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </CardHeader>
          <CardContent className="p-3">
            <span className="text-xs text-white bg-blue mb-2 py-1 px-3 rounded-lg">{date}</span>
            <h2 className="text-md font-semi-bold mb-1 mt-4 line-clamp-3">{title}</h2>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}

export default CardArticle;
