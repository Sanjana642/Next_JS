import Link from "next/link";

export default async function BlogPage() {

  // const data = await fetch('https://jsonplaceholder.typicode.com/posts',{cache: 'no-store'});
  // const posts = await data.json()

  // const posts = [
  //   {
  //     id: 1,
  //     title: "post 1",
  //     body: "post 1 body",
  //   },
  //   {
  //     id: 2,
  //     title: "post 2",
  //     body: "post 2 body",
  //   },
  // ];

  const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  return (
    <div>
      <nav className="flex gap-4">
        <Link href={"/"}>Logo</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
      </nav>
      <h1>Blog Posts</h1>

      {/* reused this div for client component - <div className="flex gap-4 flex-wrap p-4">
        {posts.map((post) => {
          return (
            <div className="border" key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-indigo-500">{post.title}</h2>
              </Link>   */}
              {/* instead of a tag use in-built tag of nextjs link - also import this tag */}
              {/* <p>{post.body}</p>
            </div>
          );
        })}
      </div> */} 
        <Suspense fallback={<div>Loading...</div>}>
      <Posts promise={promise} />
    </Suspense>
    </div>
  );
}
