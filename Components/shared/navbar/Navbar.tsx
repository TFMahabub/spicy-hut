import HmbargerMenu from "@/Components/Icons/HmbargerMenu";
import Search from "@/Components/Icons/Search";
import { signOutWithFirebase } from "@/Redux/auth/authSlice";
import { setSearchOpenClose } from "@/Redux/navbarSlice/navbarSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // redux-------------------------
  const { navbarSlice, auth } = useSelector((state: any) => state)
  const dispatch = useDispatch();
  const { searchOpenClose } = navbarSlice;
  const { email } = auth;
  // console.log(auth);


  return (
    <section className="bg-bodyBackground text-secondary absolute z-50 top-0 w-full">
      <div className="container flex justify-between items-center py-">
        <div className="items-center flexBetween py-2 px-6">
          <Link href="/">
            <li className="list-none inline-block text-blck font-semibold tracking-wider text-primary text-2xl">
              Spicy Heat
            </li>
          </Link>
        </div>
        <div
          // onClick={() => setExpandNavbar(!expandNavbar)}
          className="w-10 block md:hidden"
        >
          <div
            // onClick={() => setExpandNavbar(!expandNavbar)} 
            className="w-8">
            <HmbargerMenu />
          </div>
        </div>
        <div className={`hidden md:block`}>
          <ul
            className={`list-none p-5 flex items-center space-x-4`}
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
            {
              !email &&
              <Link href="/login">
                <button className="py-1 px-4 border border-primary rounded-full group">
                  <li className="group-hover:text-primary duration-300">Login</li>
                </button>
              </Link>
            }
            {
              email &&
              <>
                <button
                  onClick={() => dispatch<any>(signOutWithFirebase())}
                  className="py-1 px-4 border border-primary rounded-full group">
                  <li className="group-hover:text-primary duration-300">Sign out</li>
                </button>
                <button onClick={() => dispatch(setSearchOpenClose())}>
                  <Search moreClass={"fill-secondary hover:fill-primary duration-300"} />
                </button>
              </>
            }
          </ul>
        </div>
        {/* <div className="">
          <ul
            className={`list-none p-5 flex space-x-4flex-col`}
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
        </div> */}
      </div>
    </section>
  );
};

export default Navbar;
