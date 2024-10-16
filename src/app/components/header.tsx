"use client";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BiAlignLeft } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to check if the current route matches
  const isActive = (path: string) => pathname === path;

  // Toggle Menu Visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Search Visibility
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="h-auto">
      <nav className="h-20 w-full bg-[#F0F5F0] text-[#343434] flex justify-between items-center shadow-lg px-4 md:px-10">
        {/* Left Side: Logo + Menu Button */}
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <BiAlignLeft
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <Image
            src={"/images/logo.png"}
            height={51}
            width={133}
            alt="logo"
            className="mb-2"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`text-xl text-[#080808] flex-col gap-y-4 md:flex md:flex-row md:items-center md:static lg:flex lg:flex-row lg:items-center lg:static absolute top-20 left-0 w-full mt-14 md:mt-0 lg:mt-0 bg-white opacity-65 md:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            href={"/"}
            className={`block px-4 py-2 md:py-0 ${
              isActive("/") ? "text-green-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href={"/plants"}
            className={`block px-4 py-2 md:py-0 ${
              isActive("/plants") ? "text-green-600" : ""
            }`}
          >
            Plants
          </Link>
          <Link
            href={"/planters"}
            className={`block px-4 py-2 md:py-0 ${
              isActive("/planters") ? "text-green-600" : ""
            }`}
          >
            Planters
          </Link>
          <Link
            href={"/services"}
            className={`block px-4 py-2 md:py-0 ${
              isActive("/services") ? "text-green-600" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href={"/contact"}
            className={`block px-4 py-2 md:py-0 ${
              isActive("/contact") ? "text-green-600" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Search Icon for Small Screens */}
        <div className="md:hidden">
          <CiSearch
            className="text-2xl cursor-pointer"
            onClick={toggleSearch}
          />
        </div>

        {/* Search Input for Small Screens */}
        <div
          className={`absolute top-20 mt-14 left-0 w-full bg-white shadow-lg px-4 py-2 transition-all duration-300 ease-in-out ${
            isSearchOpen ? "flex" : "hidden"
          }`}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-gray-300 rounded-lg outline-none"
          />
        </div>

        {/* Search Box for Larger Screens */}
        <div className="md:flex items-center border rounded-lg overflow-hidden border-gray-300 hidden">
          <CiSearch className="text-2xl text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="p-2 outline-none"
          />
        </div>
      </nav>
    </header>
  );
}
