"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HamburgerMenu, Close, Logo } from "@/assets/icons";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header
      className={`${
        menuOpen ? "pr-6" : ""
      } px-2 md:px-8 md:pr-12 lg:px-12 lg:pr-20 border-bottom fixed z-30 w-full border border-slate-50 top-0 bg-white shadow-sm py-3 `}
    >
      <div className="flex justify-between items-center">
        <div>
          <Logo />
        </div>

        <div className="flex items-center justify-center pr-1">
          <div className="hidden md:flex gap-x-6 items-center">
            <Link
              href="/"
              className="py-1.5 px-3 border border-[#D0D5DD] shadow-sm text-dark-grey text-base rounded-lg transition-all duration-100 hover:border-[#9d9ea0] hover:shadow-md"
            >
              <button>Sign In</button>
            </Link>

            <Link
              href="/"
              className="py-1.5 px-3 bg-base-purple text-base rounded-lg shadow-sm text-white transition-all duration-100 hover:text-neutral-50 hover:shadow-2xl hover:bg-[#714ec5e8]"
            >
              <button>Sign Up</button>
            </Link>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden">
            {!menuOpen ? <HamburgerMenu /> : <Close />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-10 w-full bg-white"
        >
          <div className="w-full space-y-4 py-6 text-secondary md:hidden">
            <div className="flex flex-col items-start gap-y-4">
              <Link
                href="/"
                className="py-1.5 px-3 border border-[#D0D5DD] shadow-sm text-dark-grey text-base rounded-lg transition-all duration-100 hover:border-[#9d9ea0] hover:shadow-md"
              >
                <button>Sign In</button>
              </Link>

              <Link
                href="/"
                className="py-1.5 px-3 bg-base-purple text-base rounded-lg shadow-sm text-white transition-all duration-100 hover:text-neutral-50 hover:shadow-2xl hover:bg-[#3b2274]"
              >
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
