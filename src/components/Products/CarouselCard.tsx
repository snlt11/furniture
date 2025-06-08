"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";
import { Link } from "react-router-dom";

interface productsProps {
  products: Product[];
}

export function CarouselCard({ products }: productsProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="md:basis-1/2 pl-1 lg:basis-1/3"
          >
            <div className="flex p-4 lg:px-4 gap-3">
              <img
                src={product.images[0].toString()}
                alt={product.name}
                className="size-28 rounded-md"
              />
              <div>
                <h3 className="text-sm font-bold">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {product.description}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="text-sm font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
