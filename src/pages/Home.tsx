import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import { CarouselCard } from "@/components/Products/CarouselCard";
import { products } from "@/data/products";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row place-items-center">
        <div className="text-center my-8">
          <h1 className="text-4xl font-extrabold mb-4 lg:mb-8 lg:text-6xl">
            Modern Interior Design Studio
          </h1>
          <p className="mb-6 lg:mb-8">
            We are a team of interior designers who are passionate about
            creating beautiful and functional spaces.
          </p>
          <div className="">
            <Button
              asChild
              className="mr-2 rounded-full bg-orange-300 px-8 py-6 text-base font-bold"
            >
              <Link to="#">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="rounded-full px-8 py-6 text-base font-bold"
            >
              <Link to="#">Explore</Link>
            </Button>
          </div>
        </div>
        <img src={Couch} alt="Couch" />
      </div>
      <CarouselCard products={products} />
    </div>
  );
}

export default Home;
