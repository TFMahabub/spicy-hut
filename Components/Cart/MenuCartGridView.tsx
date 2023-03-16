import cardImage from "@/public/assats/selectedMenus.jpg";
import Image from "next/image";
import Link from "next/link";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { useFavoriteIcon } from "../hook/useAllState";

const MenuCartGridView = () => {
    const { favorite, setFavorite } = useFavoriteIcon();
    return (
        <div className='border-[1px] border-secondary/30 hover:border-primary overflow-hidden rounded-lg text-secondary bg-[#000] group cursor-pointer'>
            <div>
                <Image src={cardImage} className="group-hover:scale-105 duration-300" alt="" />
            </div>
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg tracking-wide capitalize">this is cart</h3>
                    <div className="flex items-center gap-2">
                        {
                            favorite ?
                                <RiHeart3Fill onClick={() => setFavorite(!favorite)} className="text-primary text-lg" />
                                :
                                <RiHeart3Line onClick={() => setFavorite(!favorite)} className="text-lg" />
                        }
                    </div>
                </div>
                <hr className="w-full h-[1px] text-secondary/30 my-1" />
                <p className="font-extralight tracking-wider text-secondary/80 leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos fuga at, consectetur ex natus cum.</p>
                <div className="mt-4 flex items-center justify-between">
                    <Link href={'/'}><button className="font-light tracking-wider hover:text-primary duration-500 flex items-center gap-[1px] hover:gap-1 rounded-lg underline underline-offset-4">Details</button></Link>
                    <button className="font-light tracking-wider duration-500 rounded-md py-[2px] px-3 bg-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCartGridView;