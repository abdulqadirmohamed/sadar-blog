import { SunMoon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopHeader = () => {
  return (
    <div className="border-b ">
      <div className="w-2/3 mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image
            className="-ml-8"
            src={"/images/logo.svg"}
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link href={""} className="text-sm">
            arcjet.com
          </Link>
          <SunMoon size={20} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
