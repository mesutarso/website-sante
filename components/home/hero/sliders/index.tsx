"use client"

import { articles } from "../data";
import Item from "./item";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Sliders() {
    return (
        <Carousel showArrows={false} showStatus={false} showThumbs={false} autoPlay>
            {articles.map((article, index) => (
                <div key={index}>
                    <Item title={article.title} description={article.description} image={article.image} slug={article.link} />
                </div>

            ))}
        </Carousel>
    )
}

export default Sliders