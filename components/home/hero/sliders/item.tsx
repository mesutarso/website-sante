import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'



import Link from 'next/link'


type ItemProps = {
    title: string
    description: string
    image: string
    slug: string
}

function Item({ title, description, image, slug }: ItemProps) {
    return (
        <article className='flex flex-col md:flex-row md:items-center gap-4'>
            <div className='w-full md:w-1/2 flex flex-col items-start'>
                <h3 className='text-3xl font-bold text-white text-left uppercase line-clamp-3 mb-8'>{title}</h3>
                <p className='text-white text-left line-clamp-3 mb-8'>{description}</p>
                <Link href={slug} className='text-white text-left'>
                    <Button className='bg-red text-white'>
                        <span>Lire la suite</span>
                        <ArrowRight className='w-4 h-4' />
                    </Button>
                </Link>
            </div>
            <div className='w-full md:w-1/2'>
                <Image src={image} alt={title} width={300} height={300} className='rounded-xl object-cover w-full h-full' />
            </div>
        </article>
    )
}

export default Item