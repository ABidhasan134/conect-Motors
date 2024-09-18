"use client"
import DashBordlayout from "@/app/(dashbord)/dashbord/layout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";

const NavBar = () => {
    const pathName=usePathname();
    const router=useRouter()
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
    {
      title: "Blogs",
      path: "/blogs"
    },
    {
      title: "Dashboard",
      path: "dashbord"
    },
    {
      title: "Post",
      path: "/post"
    },
    {
      title: "mails",
      path: "/mails"
    }
  ];
  const handelRedirect=()=>{
    router.push("/login")
  }


  if(pathName.includes("dashbord"))
    return (
  <div>
    <DashBordlayout></DashBordlayout>
  </div>)
  return (
    <nav className="flex fix justify-between items-center m-2">
      <h1 className="text-3xl">
        Conect <span className="font-bold text-green-700">Motors</span>
      </h1>
      <ul className="flex justify-center gap-2 m-2 p-2">
        {
            links.map((link,index)=><Link key={index} className={pathName===link.path && "text-red-600"} href={link.path}>{link.title}</Link>)
        }
      </ul>
      <button className="btn" onClick={handelRedirect}>Log In</button>
    </nav>
  );
};

export default NavBar;
