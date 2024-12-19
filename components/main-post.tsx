import Image from "next/image";
import React from "react";

const MainPost = () => {
  return (
    <div className="h-[550px] bg-gray-100 flex items-center">
      <div className="md:w-2/3 w-[85%] mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* text */}
        <div className="md:order-first order-last">
            <div className="flex gap-3 text-sm text-gray-500">
                <span>Nextjs</span>
                <span>Dec 10, 2024</span>
                <span>3 min read</span>
            </div>
            <div>
                <h1 className="text-4xl my-5 font-semibold">Nosecone: a library for setting security headers in Next.js, SvelteKit, Node.js, Bun, and Deno</h1>
                <p className="text-gray-500">Nosecone is an open source library to set security headers like Content Security Policy (CSP) and HTTP Strict Transport Security (HSTS) on Next.js, SvelteKit, and other JavaScript frameworks using Bun, Deno, or Node.js. Security headers as code.</p>
            </div>
        </div>

        {/* Image */}
        <div className="md:mt-0 mt-32">
          <Image
            src={"/images/meteor.jpg"}
            alt="meteor"
            width={800}
            height={400}
            style={{objectFit:"cover"}}
            quality={100}
            className="rounded-3xl"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MainPost;
