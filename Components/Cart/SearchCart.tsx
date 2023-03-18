import Image from 'next/image';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { useFavoriteIcon } from '../hook/useAllState';

const SearchCart = () => {
    const { favorite, setFavorite } = useFavoriteIcon();
    return (
        <div className='border-[1px] border-secondary/30 hover:border-primary overflow-hidden rounded-lg text-secondary bg-[#000] group cursor-pointer'>
            <div className="relative">
                <Image src={'https://i.ibb.co/6mmrZ5D/Addictive-Cabbage.jpg'} className="group-hover:scale-105 duration-300" alt="menu image" height={500} width={500} priority />
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
            </div>
        </div>
    );
};

export default SearchCart;