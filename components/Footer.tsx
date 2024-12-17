import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-2/3 mx-auto py-10">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div><Image src={"/images/logo-monogram-spark-dark.svg"} className="w-10" width={100} height={50} alt="logo" /></div>
        <span className="text-gray-500">© 2024</span>
      </div>

      <div>
        <Link href={"#"} className="text-sm text-gray-500">support@arcjet.com</Link>
      </div>
      </div>
    </div>
  );
};

export default Footer;
