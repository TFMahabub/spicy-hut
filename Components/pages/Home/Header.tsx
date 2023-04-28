import useCheck from "@/Components/hook/useCheck";
import Link from "next/link";

const Header = () => {
  const { check } = useCheck()
  // console.log(check)
  return (
    <header className="grid_place_center absolute inset-0 bg-[rgba(0,0,0,0.7)]">
      <div className="container space-y-sm lg:space-y-md">
        <h2 className="banner_title_text font-cormorant text-secondary uppercase">
          Contemporary <br /> Japanese Cuisine
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-sm">
          <button className="primary_button ">
            <Link href={"/"}>Make A ReserVation</Link>
          </button>
          <button className="primary_button">
            <Link href={"/"}>Make A ReserVation</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
