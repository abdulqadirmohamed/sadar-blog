import Image from "next/image";
import Link from "next/link";
import React from "react";

const SecondPosts = () => {
  const posts = [
    {
      id: 1,
      title: "The Wasm Component Model and idiomatic codegen",
      desc: `Nosecone is an open source library to set security headers like
              Content Security Policy (CSP) and HTTP Strict Transport Security
              (HSTS) on Next.js, SvelteKit, and other JavaScript frameworks
              using Bun, Deno, or Node.js. Security headers as code.`,
      feature: "/images/obsercured-sun.jpg",
    },
    {
      id: 2,
      title: "Multi-framework docs with Astro Starlight",
      desc: `Framework switching, custom sidebar, custom table of contents, improved SEO, and a better user experience. How we customized Astro Starlight for the Arcjet docs.`,
      feature: "/images/misty-nebula.png",
    },
  ];
  return (
    <div className="md:w-2/3 w-[85%] mx-auto my-12">
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link href={''} className="bg-gray-50 border rounded-3xl" key={post.id}>
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
                <h1 className="text-4xl my-5 font-semibold">{post.title}</h1>
                <p className="text-gray-500">{post.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SecondPosts;
