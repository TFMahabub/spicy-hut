import Link from "next/link";

const Header = () => {
  return (
    <header className="h-screen bg-banner_backbround_image bg-no-repeat bg-center bg-black">
      <div className="bg-bodyBackground/40 w-full h-full grid_place_center">
        <div className="container grid_place_center space-y-md">
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
        </div>
    </header>
  );
};

export default Header;
