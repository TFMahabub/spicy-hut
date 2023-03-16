import MenuCartGridView from '@/Components/Cart/MenuCartGridView';
import MenuCartListView from '@/Components/Cart/MenuCartListView';
import { useCartView } from '@/Components/hook/useAllState';
import GridView from '@/Components/Icons/GridView';
import ListView from '@/Components/Icons/ListView';

const CartParent = () => {
    const { cartView, setCartView } = useCartView();
    console.log(cartView)
    return (
        <>
            <div className='mt-16 flex items-center md:relative text-lg gap-4'>
                <div className='flex flex-col md:flex-row md:items-center gap-4 md:absolute bg-bodyBackground pr-6'>
                    <span onClick={() => setCartView("grid-view")} className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "grid-view" ? "text-primary" : "text-secondary"}`}><GridView width="1.2rem" bg_color={`${cartView === "grid-view" ? "#dd5903" : "#fff"}`} />Grid View</span>
                    <span onClick={() => setCartView("list-view")} className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "list-view" ? "text-primary" : "text-secondary"}`}><ListView width="1.4rem" bg_color={`${cartView === "list-view" ? "#dd5903" : "#fff"}`} />List View</span>
                </div>
                <hr className='hidden md:block text-secondary/60 w-full' />
            </div>
            <div className={`mt-10 grid grid-cols-1 ${cartView === "grid-view" && "md:grid-cols-2 lg:grid-cols-4"} ${cartView === "list-view" && "md:grid-cols-1 lg:grid-cols-2"} gap-5`}>
                {cartView === "grid-view" &&
                    [...Array(10)].map((_, i) => <MenuCartGridView key={i} />)
                }
                {cartView === "list-view" &&
                    [...Array(10)].map((_, i) => <MenuCartListView key={i} />)
                }
            </div>
        </>
    );
};

export default CartParent;