import { Rss, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    { id: 1, title: "Blog home" },
    { id: 2, title: "Next.js" },
    { id: 3, title: "js" },
    { id: 4, title: "rust" },
    { id: 5, title: "culture" },
    { id: 6, title: "somalia" },
    { id: 7, title: "technology" },
    { id: 8, title: "jobs" },
  ];
  return (
    <div className="">
      <div className="border-b bg-gray-50">
        <div className="w-2/3 mx-auto">
          <div className="flex items-center justify-between py-6 capitalize text-gray-600">
            <nav className="space-x-6">
              {navLinks.map((link) => (
                <Link href={""} key={link.id} className="capitalize">
                  {link.title}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Search size={20} />
              <Rss size={20} />
              <button className="bg-black text-white px-4 py-2 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
