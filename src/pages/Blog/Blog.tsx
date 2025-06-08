import BlogPostList from "@/components/Blogs/BlogPostList";
import { posts } from "@/data/posts";

function Blog() {
  return (
    <div className="container mx-auto">
      <h1 className="mt-4 text-3xl text-center font-bold mb-4 md:text-left">
        Blog
      </h1>
      <BlogPostList posts={posts} />
    </div>
  );
}

export default Blog;
