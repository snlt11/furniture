import { useParams } from "react-router-dom";
import { Post } from "@/types";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import TextRenderer from "@/components/Blogs/TextRenderer";

function BlogDetails() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col lg:flex-row">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant={"outline"} asChild className="mb-6 mt-8">
            <Link to="/blogs">
              <Icons.arrowLeft />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mt-4 text-3xl text-center font-extrabold mb-3 md:text-left">
                {post.title}
              </h2>
              <h3 className="text-base font-[400] my-6">{post.content}</h3>
              <div className="my-2 text-sm">
                <span>
                  By
                  <span className="font-semibold mx-1">{post.author}</span>
                  On
                  <span className="font-semibold mx-1">{post.updated_at}</span>
                </span>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl mb-4"
              />
              <TextRenderer content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button variant={"secondary"}>{tag}</Button>
                ))}
              </div>
            </>
          ) : (
            <p className="mb-16">Post not found</p>
          )}
        </section>
        <section className="w-full lg:w-1/4 lg:mt-25">
          <div className="mb-4 items-center gap-1 text-base flex font-semibold">
            <Icons.layers />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="mb-6 flex items-start gap-3"
              >
                <img
                  src={post.image}
                  alt="Blog Post"
                  className="w-1/4 rounded"
                />
                <div className="w-3/4 text-sm font-[500] text-muted-foreground">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>...see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetails;
