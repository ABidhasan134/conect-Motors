"use client"
import DashBordlayout from "@/app/(dashbord)/dashbord/layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React from "react";
import Logout from "../log/logout";

const NavBar = () => {
  const sessoin=useSession();
    const pathName=usePathname();
    const router=useRouter()
    // console.log(sessoin?.data?.user?.image)
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
    router.push("/api/auth/signin")
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
     {
      sessoin.status==="authenticated"?<Logout>
      </Logout>:
      <button className="btn" onClick={handelRedirect}>Log In</button>
      
      
     } 
     
    </nav>
  );
};

export default NavBar;
