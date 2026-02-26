"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import SvgIcon from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Game", path: "/game" },
    { name: "Team", path: "/team" },
    { name: "Resources", path: "/Resources" },
  ];

  return (
    <header className="z-50">
      <section className="container mx-auto px-4 flex justify-between items-center py-4 h-20">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <SvgIcon />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                ${
                  isActive ? "text-primary font-semibold" : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right (Always show) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/games" className="cursor-pointer">
            <Button className="rounded-lg py-6 bg-transparent border-2 border-primary cursor-pointer">
              Games
            </Button>
          </Link>
          <Link href="/contact-us" className="cursor-pointer">
            <Button className="rounded-lg py-6 border-2 border-primary cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-muted cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </section>

      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 mt-20"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 py-6 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-lg font-medium transition 
                ${
                  isActive ? "text-primary font-semibold" : "hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Auth Links */}
          <div className="flex flex-col gap-5 border-t pt-4">
            <Link
              href="/auth/sign-in"
              className="text-lg font-medium hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link href="/auth/sign-up" onClick={() => setIsOpen(false)}>
              <Button className="rounded-2xl w-full">Registration</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
