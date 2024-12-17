import Image from "next/image";
import Link from "next/link";
import React from "react";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "Announcing the Arcjet NestJS & Remix adapters",
      desc: `Arcjet security as code adapters for NestJS and Remix.`,
      feature: "/images/bright-sun.jpg",
    },
    {
      id: 2,
      title: "Rethinking our REST API: Building the Golden API",
      desc: `Using Go + Gin to reimplement our backend REST API. How we built the golden API: performance & scalability, comprehensive docs, security, authentication, and testability.`,
      feature: "/images/celestial-bodies.jpg",
    },
    {
      id: 3,
      title: "Hacking (and securing) GraphQL",
      desc: `Exploiting (and protecting against) injection attacks, duplication DOS, and circular query attacks in GraphQL.`,
      feature: "/images/star.jpg",
    },
  ];
  return (
    <div className="w-2/3 mx-auto my-10">
      <div className="grid grid-cols-3 gap-10">
        {posts.map((post) => (
          <Link
            href={""}
            className="bg-gray-50 border rounded-3xl"
            key={post.id}
          >
            <div>
              <Image
                src={post.feature}
                alt={post.title}
                width={800}
                height={400}
                style={{ objectFit: "cover" }}
                quality={100}
                className="rounded-3xl"
              />
            </div>
            <div className="p-8">
              <div className="flex gap-3 text-sm text-gray-500">
                <span>Nextjs</span>
                <span>Dec 10, 2024</span>
                <span>3 min read</span>
              </div>
              <div>
                <h1 className="text-2xl my-5 font-semibold">{post.title}</h1>
                <p className="text-gray-500">{post.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center my-10">
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Load more
        </button>
      </div>

    </div>
  );
};

export default Posts;
