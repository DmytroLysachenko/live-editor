import Image from "next/image";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link
        href={"/"}
        className="flex items-center"
      >
        <Image
          src="/assets/icons/logo-icon.svg"
          width={32}
          height={32}
          alt="Logo"
          className="mr-2 inline"
        />
        <span className=" text-xl hidden md:inline text-white font-semibold">
          LiveEditor
        </span>
      </Link>
      {children}
    </div>
  );
};

export default Header;
