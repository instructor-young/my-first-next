import Link from "next/link";

function PostListItem({ post }) {
  return (
    <li key={post.id} className="border-b">
      <Link
        href={`/posts/${post.id}`}
        className="py-5 block hover:text-blue-500 transition-colors"
      >
        {post.title}
      </Link>
    </li>
  );
}

export default PostListItem;
