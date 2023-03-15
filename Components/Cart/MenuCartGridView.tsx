import cardImage from "@/public/assats/selectedMenus.jpg";
import Image from "next/image";

const MenuCartGridView = () => {
    return (
        <div className='border-[1px] border-secondary/30 shadow-secondary overflow-hidden rounded-lg text-secondary bg-[#000]'>
            <Image src={cardImage} className="" alt="" />
            <h3>this is cart</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quos.</p>
        </div>
    );
};

export default MenuCartGridView;