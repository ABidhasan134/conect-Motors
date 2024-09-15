"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
    const pathName=usePathname();
    console.log(pathName)
  const links = [
    {
      title: "home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
  ];
  return (
    <nav className="flex justify-between">
      <h1 className="text-3xl">
        Conect <span className="font-bold text-green-700">Motors</span>
      </h1>
      <ul className="flex justify-center gap-2 m-2 p-2">
        {
            links.map((link)=><Link className={pathName===link.path && "text-red-600"} href={link.path}>{link.title}</Link>)
        }
      </ul>
    </nav>
  );
};

export default NavBar;
