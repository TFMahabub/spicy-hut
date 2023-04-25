import MenuCartGridView from '@/Components/Cart/MenuCartGridView';
import MenuCartListView from '@/Components/Cart/MenuCartListView';
import { useCartView, useMenuCategory } from '@/Components/hook/useAllState';
import GridView from '@/Components/Icons/GridView';
import ListView from '@/Components/Icons/ListView';
import { useGetMenuItemsQuery } from '@/Redux/api/apiSlice';

const CartParent = () => {
    // redux----------------------------------------
    // const {} = useSelector((state:any)=>)
    const { data: menuItems, isLoading, isError } = useGetMenuItemsQuery("name")


    const { cartView, setCartView } = useCartView();
    const { menuCategory } = useMenuCategory();
    // console.log(menuItems)

    //filtering by category-------------------------
    const globalsItems = menuItems?.filter((item: any) => (
        item?.categories === "global"
    ))
    const appetizerItems = menuItems?.filter((item: any) => (
        item?.categories === "appetizer"
    ))
    const nigriSushiItems = menuItems?.filter((item: any) => (
        item?.categories === "nigri sushi"
    ))
    const popularSashimiItems = menuItems?.filter((item: any) => (
        item?.categories === "popular Sashimi"
    ))
    const selectedSakeItems = menuItems?.filter((item: any) => (
        item?.categories === "selected sake"
    ))
    const specialItems = menuItems?.filter((item: any) => (
        item?.categories === "specials"
    ))

    //decide what to render-------------------------
    let menuItemContent;

    if (isLoading) {
        menuItemContent = <p className='text-secondary'>loading...</p>
    }
    if (!isLoading && isError) {
        menuItemContent = <p className='text-secondary'>there have some error!</p>
    }
    if (!isLoading && !isError && menuItems.length === 0) {
        menuItemContent = <p className='text-secondary'>Menu item is not found!</p>
    }
    if (!isLoading && !isError && menuItems.length > 0) {
        menuItemContent = <div className={`mt-10 grid grid-cols-1 ${cartView === "grid-view" && "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"} ${cartView === "list-view" && "md:grid-cols-1 lg:grid-cols-2"} gap-5`}>
            {cartView === "grid-view" &&
                menuItems.map((item: any) => <MenuCartGridView key={item._id} />)
            }
            {cartView === "list-view" &&
                [...Array(10)].map((_, i) => <MenuCartListView key={i} />)
            }
        </div>
    }
    return (
        <>
            <div className='mt-16 flex items-center md:relative text-lg gap-4'>
                <div className='flex flex-col md:flex-row md:items-center gap-4 md:absolute bg-bodyBackground pr-6'>
                    <span onClick={() => setCartView("grid-view")} className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "grid-view" ? "text-primary" : "text-secondary"}`}><GridView width="1.2rem" bg_color={`${cartView === "grid-view" ? "#dd5903" : "#fff"}`} />Grid View</span>
                    <span onClick={() => setCartView("list-view")} className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "list-view" ? "text-primary" : "text-secondary"}`}><ListView width="1.4rem" bg_color={`${cartView === "list-view" ? "#dd5903" : "#fff"}`} />List View</span>
                </div>
                <hr className='hidden md:block text-secondary/60 w-full' />
            </div>
            {menuItemContent}
        </>
    );
};

export default CartParent;