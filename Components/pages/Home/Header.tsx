import Link from "next/link";

const Header = () => {
  return (
    <header className="container grid_place_center space-y-md">
      <h2 className="banner_title_text font-cormorant text-secondary uppercase">
        Contemporary <br /> Japanese Cuisine
      </h2>
      <div className="flex flex-col md:flex-row gap-sm">
        <button className="primary_button ">
          <Link href={"/"}>Make A ReserVation</Link>
        </button>
        <button className="primary_button">
          <Link href={"/"}>Make A ReserVation</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
