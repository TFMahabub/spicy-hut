import viewFullMenus1 from "@/public/assats/home(view-full-menu1).jpg";
import viewFullMenus2 from "@/public/assats/home(view-full-menu2).jpg";
import viewFullMenus3 from "@/public/assats/home(view-full-menu3).jpg";
import viewFullMenus4 from "@/public/assats/home(view-full-menu4).jpg";
import Image from "next/image";
import Link from "next/link";

const ViewFullMenus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <Image src={viewFullMenus1} className="" alt="" />
      <div className="grid_place_center">
        <div className="py-16 lg:py-0 px-2 lg:px-8">
          <div className={`flex gap-4 items-center justify-center`}>
            <hr className={`w-10 h-[2px] bg-primary block`} />
            <h2 className="top_title">À LA CARTE</h2>
            <hr className={`w-10 h-[2px] bg-primary block`} />
          </div>
          <h3 className="mt-2 text-center text-secondary text-3xl lg:text-6xl font-semibold font-cormorant">
            View Full <br /> Menus
          </h3>
          <p className="pText text-center">
            We serve food, harmony, and laughter. Making delicious food and
            providing a wonderful eating experience. update something
          </p>
          <Link href={"/"}>
            <p className="text-secondary text-center tracking-wide text-lg leading-relaxed mt-8 hover:underline hover:underline-offset-8">
              BROWSE MENUS
            </p>
          </Link>
        </div>
      </div>
      <Image src={viewFullMenus2} className="" alt="" />
      <div className="grid_place_center">
        <div className="py-16 lg:py-0 px-2 lg:px-8">
          <div className={`flex gap-4 items-center justify-center`}>
            <hr className={`w-10 h-[2px] bg-primary block`} />
            <h2 className="top_title">THE MOST POPULAR</h2>
            <hr className={`w-10 h-[2px] bg-primary block`} />
          </div>
          <h3 className="mt-2 text-center text-secondary text-3xl lg:text-6xl font-semibold font-cormorant">
            Chef Selection
          </h3>
          <p className="pText text-center">
            We present delicious and enticing dishes with high-quality
            ingredients. There is no set protocol for ordering from the menu.
          </p>
          <Link href={"/"}>
            <p className="text-secondary text-center tracking-wide text-lg leading-relaxed mt-8 hover:underline hover:underline-offset-8">
              LEARN MORE
            </p>
          </Link>
        </div>
      </div>
      <Image src={viewFullMenus3} className="" alt="" />
      <Image src={viewFullMenus4} className="" alt="" />
    </div>
  );
};

export default ViewFullMenus;
