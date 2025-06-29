import { Link } from "react-router-dom";
import { Post } from "@/types";

interface BlogCardProps {
  posts: Post[];
}

function BlogCard({ posts }: BlogCardProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.images[0].path}
            alt={post.title}
            className="w-full rounded-2xl mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 ml-4">{post.title}</h3>
          <div className="ml-4 mt-2 text-sm">
            <span>
              By
              <span className="text-gray-600 font-semibold">
                {post.author}
              </span>
              <span className="text-gray-600 font-semibold">
                {post.updated_at}
              </span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BlogCard;
