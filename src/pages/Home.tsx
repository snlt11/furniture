import { Link } from "react-router-dom";
import Couch from "@/data/images/couch.png";
import { Button } from "@/components/ui/button";
import { CarouselCard } from "@/components/Products/CarouselCard";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import BlogCard from "@/components/Blogs/BlogCard";

function Home() {
  const Title = ({
    title,
    href,
    sideText,
  }: {
    title: string;
    href: string;
    sideText: string;
  }) => (
    <div className="mt-28 mb-10 flex flex-col md:flex-row md:justify-between px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-4 md:mb-0">{title}</h2>
      <Link to={href} className="text-muted-foreground font-semibold underline">
        {sideText}
      </Link>
    </div>
  );
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
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              className="rounded-full px-8 py-6 text-base font-bold"
            >
              <Link to="/about">Explore</Link>
            </Button>
          </div>
        </div>
        <img src={Couch} alt="Couch" />
      </div>
      <CarouselCard products={products} />
      <Title title="Recently Blog" href="/blog" sideText="View All Posts" />
      <BlogCard posts={posts} />
    </div>
  );
}

export default Home;
