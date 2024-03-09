"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="pt-7 px-6 lg:px-24 xl:px-[8.125rem] flex justify-between text-white ">
      <h1 className="text-2xl lg:text-4xl font-bold">FurniShop</h1>
      <ul className="gap-8 lg:gap-16  hidden md:flex">
        <li className="font-semibold">Home</li>
        <li>About</li>
        <li>Features</li>
        <li>Contact</li>
      </ul>
      <button onClick={toggleDropdown} className="md:hidden relative">
        <Image src="/menu.svg" alt="Menu" width={24} height={24} />
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="absolute right-4 space-y-4 top-16">
          <li className="font-semibold">Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
