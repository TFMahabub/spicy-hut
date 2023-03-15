import MenuCartGridView from '@/Components/Cart/MenuCartGridView';
import GridView from '@/Components/Icons/GridView';

const CartParent = () => {
    return (
        <>
            <div className='mt-16 flex items-center relative text-secondary text-lg gap-6 '>
                <span className='flex items-center gap-2'><GridView bg_color="#fff" />Grid View</span>
                <span className='flex items-center gap-2'><GridView bg_color="#fff" />Grid View</span>
                <hr className='text-primary w-full' />
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    [...Array(10)].map((_, i) => <MenuCartGridView key={i} />)
                }
            </div>
        </>
    );
};

export default CartParent;