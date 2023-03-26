import useCheck from "@/Components/hook/useCheck";
import HmbargerMenu from "@/Components/Icons/HmbargerMenu";
import Search from "@/Components/Icons/Search";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ setSearchComponent }: { setSearchComponent: any }) => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const { setCheck } = useCheck()
  // const { searchComponent, setSearchComponent } = useSearchComponent();
  // console.log(searchComponent)
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
            className={`list-none p-5 flex space-x-4 ${expandNavbar ? "flex-col" : ""
              }`}
          >
            <Link href="/">
              <li className="hover:text-primary duration-300">Home</li>
            </Link>
            <Link href="/about/">
              <li className="hover:text-primary duration-300">About</li>
            </Link>
            <Link href="/contact/">
              <li className="hover:text-primary duration-300">Contact</li>
            </Link>
            <Link href="/menu/">
              <li className="hover:text-primary duration-300">Menu</li>
            </Link>
            <Link href="/news/">
              <li className="hover:text-primary duration-300">News</li>
            </Link>
            <button onClick={() => {
              setSearchComponent((pre: any) => !pre)
              setCheck("checked")
            }}><Search moreClass={"fill-secondary hover:fill-primary duration-300"} /></button>
          </ul>
        </div>
        {expandNavbar && (
          <div className="">
            <ul
              className={`list-none p-5 flex space-x-4 ${expandNavbar ? "flex-col" : ""
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
