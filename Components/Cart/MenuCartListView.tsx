import cardImage from "@/public/assats/selectedMenus.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

const MenuCartListView = () => {
    return (
        <div className='border-[1px] flex flex-col md:flex-row items-start border-secondary/30 hover:border-primary overflow-hidden rounded-lg text-secondary bg-[#000] group cursor-pointer'>
            <div className="flex-1">
                <Image src={cardImage} className="group-hover:scale-105 bg-cover duration-300 w-full" alt="" />
            </div>
            <div className="px-4 py-4 md:px-4 md:py-5 flex-1 h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg tracking-wide capitalize">this is cart</h3>
                        <div className="flex items-center gap-2">
                            <RiHeart3Fill className="text-primary text-lg" />
                            <RiHeart3Line className="text-lg" />
                        </div>
                    </div>
                    <hr className="w-full h-[1px] text-secondary/30 my-1" />
                    <p className="font-extralight tracking-wider text-secondary/80 leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga at, consectetur ex natus cum.</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <Link href={'/'}><button className="font-light tracking-wider hover:text-primary duration-500 flex items-center gap-[1px] hover:gap-1 rounded-lg underline underline-offset-4">Details</button></Link>
                    <button className="font-light tracking-wider duration-500 rounded-md py-[2px] px-3 bg-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCartListView;