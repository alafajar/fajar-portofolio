"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const links = [
  { url: "/", title: "home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const iconLinks = [
  { name: "github", url: "#", img: "/github.png" },
  { name: "dribbble", url: "#", img: "/dribbble.png" },
  { name: "facebook", url: "#", img: "/facebook.png" },
  { name: "instagram", url: "#", img: "/instagram.png" },
  { name: "linkedin", url: "#", img: "/linkedin.png" },
  { name: "pinterest", url: "#", img: "/pinterest.png" },
];

const DynamicLinks = dynamic(() => import("./navLink"), {
  ssr: false,
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <DynamicLinks link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* Social */}
      <div className="hidden md:flex gap-4 w-1/3">
        {iconLinks.map((icon, idx) => (
          <Link href={icon.url} key={idx}>
            <Image src={icon.img} alt="" width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
