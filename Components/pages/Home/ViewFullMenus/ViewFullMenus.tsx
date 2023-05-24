import Image from "next/image";

const ViewFullMenus = () => {
  return (
    <div className="section_gap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="relative h-96 lg:h-full">
        <Image src="https://i.ibb.co/pXjZtHy/home-view-full-menu1.jpg" objectFit="cover" objectPosition="center" alt="" layout="fill" />
      </div>
      <div className="grid_place_center lg:h-screen">
        <div className="py-16 lg:py-0 px-2 lg:px-8 flex flex-col items-center">
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
          <a href="http://" target="_blank" rel="noreferrer" className="mt-5 button_border_animation_end_to_start text-secondary after:bg-primary text-center">BROWSE MENUS</a>
        </div>
      </div>
      <div className="relative h-96 lg:h-full">
        <Image src="https://i.ibb.co/yggschM/home-view-full-menu2.jpg" objectFit="cover" objectPosition="center" alt="" layout="fill" />
      </div>
      <div className="grid_place_center lg:h-screen">
        <div className="py-16 lg:py-0 px-2 lg:px-8 flex flex-col items-center">
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
          <a href="http://" target="_blank" rel="noreferrer" className="mt-5 button_border_animation_end_to_start text-secondary after:bg-primary text-center">LEARN MORE</a>
        </div>
      </div>
      <div className="relative h-96 lg:h-full">
        <Image src="https://i.ibb.co/tLQqfhm/home-view-full-menu3.jpg" objectFit="cover" objectPosition="center" alt="" layout="fill" />
      </div>
      <div className="relative h-96 lg:h-full">
        <Image src="https://i.ibb.co/748WP84/home-view-full-menu4.jpg" objectFit="cover" objectPosition="center" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default ViewFullMenus;
