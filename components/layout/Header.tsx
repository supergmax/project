"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl">W</span>
          <span className="hidden md:inline-block font-semibold">WithUS Funded</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#hero" className="transition hover:text-primary">Home</a>
          <a href="#stats" className="transition hover:text-primary">Statistics</a>
          <a href="#process" className="transition hover:text-primary">Process</a>
          <a href="#faq" className="transition hover:text-primary">FAQ</a>
        </nav>

        {/* Auth & Theme Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className="btn btn-circle btn-ghost"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/register" className="btn btn-primary">Register</Link>
          <Link href="/login" className="btn btn-outline">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className="btn btn-circle btn-ghost"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="btn btn-ghost"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#hero" 
              className="py-2 transition hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#stats" 
              className="py-2 transition hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistics
            </a>
            <a 
              href="#process" 
              className="py-2 transition hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#faq" 
              className="py-2 transition hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/register" className="btn btn-primary w-full">
                Register
              </Link>
              <Link href="/login" className="btn btn-outline w-full">
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}