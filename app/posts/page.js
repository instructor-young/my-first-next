import PostListItem from "./_components/PostListItem";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
}

async function PostsListPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">포스트 목록</h1>

      <nav>
        <ul>
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default PostsListPage;
