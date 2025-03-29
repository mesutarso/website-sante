import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";


interface ArticleProps {
  image : string,
  title : string,
  date : string
}


const CardArticle: React.FC<ArticleProps> = ({ image, title, date }) => {
  return (
    <Card className="border-none shadow-none">
      <Link href={`/actualites/`}>
        <CardHeader className="relative p-0">
          <Image
            src={image}
            alt={`article title`}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className=" pt-4">
          <span className="text-sm text-white bg-blue mb-2 py-2 px-3 rounded-lg">{'20 Novembre 2024'}</span>
          <h2 className="text-md font-semi-bold mb-1 mt-4 line-clamp-3">{title}</h2>
        </CardContent>
      </Link>
    </Card>
  );
}

export default CardArticle;
