import { Post } from '@/types';
import { Link } from 'react-router-dom';
interface BlogPostListProps {
  posts: Post[];
}
function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <div className="my-8 grid grid-cols-1 gap-16 px-4 md:grid-cols-3 lg:grid-cols-3">
      {posts.map((post) => (
        <Link to={`/blogs/${post.id}`} key={post.id}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-xl mb-4"
          />
          <h2 className='line-clamp-1 text-xl font-extrabold'>{post.title}</h2>
          <h3 className="my-2 line-clamp-3 text-base font[400]">{post.content}</h3>
          <div className="text-sm">
            <span>
              By
              <span className="font[600] mx-1">{post.author}</span>
              On
              <span className="font[600] mx-1">{post.updated_at}</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BlogPostList