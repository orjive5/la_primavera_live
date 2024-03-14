'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { photoUrls } from "./constants";

export const ImageCarousel = () => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {photoUrls.map((item, index) => (
                    <CarouselItem>
                        <AspectRatio
                            className="overflow-hidden rounded-lg"
                            ratio={4 / 3}
                        >
                            <Image
                                src={item}
                                alt={`La Primavera photo ${index + 1}`}
                                priority={true}
                                fill
                                className="rounded-lg object-contain object-top"
                            />
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}