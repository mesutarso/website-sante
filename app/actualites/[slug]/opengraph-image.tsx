import { ImageResponse } from 'next/og'
import { getArticleBySlug } from '@/lib/wordpress'


export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'


export default async function Image({ params }: { params: { slug: string } }) {
    const post = await getArticleBySlug(params.slug)

    return new ImageResponse(
        (

            <div
                style={{
                    fontSize: 128,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={post.image} alt={post.title} />
            </div>
        ),
        {
            width: size.width,
            height: size.height,
        }
    )
} 