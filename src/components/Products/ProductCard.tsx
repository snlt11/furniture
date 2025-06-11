import { Link } from "react-router-dom";
import { Product } from "@/types";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  products: Product[];
}

function ProductCard({ products }: ProductCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id}>
          <Link to={`/products/${product.id}`}>
            <CardHeader>
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                  src={product.images[0]?.path}
                  alt={product.name}
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            </CardHeader>
          </Link>
          <CardContent>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="mt-2 flex items-center gap-x-2">
              <span className="font-semibold">
                {formatPrice(product.price)}
              </span>
              {product.discount > 0 && (
                <span className="line-through text-muted-foreground">
                  {formatPrice(product.discount)}
                </span>
              )}
            </CardDescription>
          </CardContent>
          <CardFooter>
            {product.status === "sold" ? (
              <Button variant="outline" disabled>
                Out of Stock
              </Button>
            ) : (
              <Button variant="outline">Add to Cart</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;
