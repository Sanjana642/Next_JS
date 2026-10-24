import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "post 1",
      body: "post 1 body",
    },
    {
      id: 2,
      title: "post 2",
      body: "post 2 body",
    },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>

      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>  
              {/* instead of a tag use in-built tag of nextjs link - also import this tag */}
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
