'use client'
import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const FirstCard = ({ data }: { data: any }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px"
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 items-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center"
            >
                <Image
                    src={data.image}
                    alt="Group of officials"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
            >
                <div className="bg-white text-blue text-sm font-semibold py-1 px-3 rounded-full inline-block">
                    {data.date}
                </div>
                <h1 className="text-3xl font-bold line-clamp-3">
                    {data.title}
                </h1>
                <p className="text-gray-300 font-medium text-lg line-clamp-4" dangerouslySetInnerHTML={{ __html: data.excerpt }}>
                </p>
                <Button variant="outline" className="text-blue border-white">
                    <Link href={`/actualites/${data.link}`}>
                        Lire cet article
                    </Link>
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default FirstCard;