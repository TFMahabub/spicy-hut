import HmbargerMenu from "@/Components/Icons/HmbargerMenu";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <section className="bg-bodyBackground/80 text-secondary absolute z-50 top-0 w-full">
      <div className="container flex justify-between items-center py-2">
        <div className="items-center flexBetween py-2 px-6">
          <Link href="/">
            <li className="list-none inline-block text-blck font-semibold tracking-wider text-primary text-2xl">
              Spicy Heat
            </li>
          </Link>
        </div>
        <div
          onClick={() => setExpandNavbar(!expandNavbar)}
          className="w-10 block lg:hidden"
        >
          <div onClick={() => setExpandNavbar(!expandNavbar)} className="w-8">
            <HmbargerMenu />
          </div>
        </div>
        <div className={`hidden lg:block ${expandNavbar ? "" : ""}`}>
          <ul
            className={`list-none p-5 flex space-x-4 ${
              expandNavbar ? "flex-col" : ""
            }`}
          >
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/menu">
              <li>Menu</li>
            </Link>
            <Link href="/news">
              <li>News</li>
            </Link>
          </ul>
        </div>
        {expandNavbar && (
          <div className="">
            <ul
              className={`list-none p-5 flex space-x-4 ${
                expandNavbar ? "flex-col" : ""
              }`}
            >
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/">
                <li>Home</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
