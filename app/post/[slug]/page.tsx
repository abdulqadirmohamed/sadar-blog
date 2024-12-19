import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-[550px] bg-gray-100">
        <div className="w-2/5 mx-auto">
          <div className="py-24">
            <div className="flex justify-center gap-3 text-sm text-gray-500">
              <span>Nextjs</span>
              <span>Dec 10, 2024</span>
              <span>3 min read</span>
            </div>

            <div className="text-center">
              <h1 className="text-4xl my-5 font-semibold">
                Nosecone: a library for setting security headers in Next.js,
                SvelteKit, Node.js, Bun, and Deno
              </h1>
              <p className="text-gray-500">
                Nosecone is an open source library to set security headers like
                Content Security Policy (CSP) and HTTP Strict Transport Security
                (HSTS) on Next.js, SvelteKit, and other JavaScript frameworks
                using Bun, Deno, or Node.js. Security headers as code.
              </p>
            </div>
          </div>
      

        <div className="flex flex-col justify-center">
          <div className="">
            <Image
              src={"/images/meteor.jpg"}
              alt="meteor"
              width={800}
              height={400}
              style={{ objectFit: "cover" }}
              quality={100}
              className="rounded-3xl"
            />
          </div>
          <div className="text-gray-500 my-3">
            <p className="my-2">
              Arcjet bundles WebAssembly with our security as code SDK. This
              helps developers implement common security functionality like PII
              detection and bot detection directly in their code. Much of the
              logic is embedded in Wasm, which gives us a secure sandbox with
              near-native performance and is part of our philosophy around
              local-first security. The ability to run the same code across
              platforms is also helpful as we build out support from JavaScript
              to other tech stacks, but it requires an important abstraction to
              translate between languages (our Wasm is compiled from Rust).
            </p>
            <p>The ability to run the same code across platforms is also helpful as we build out support from JavaScript to other tech stacks, but it requires an important abstraction to translate between languages (our Wasm is compiled from Rust).</p>
          </div>
        </div>
      </div>
    </div>  </div>
  );
};

export default page;
