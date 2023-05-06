import MenuCartGridView from '@/Components/Cart/MenuCartGridView';
import MenuCartListView from '@/Components/Cart/MenuCartListView';
import { useGetMenuItemsQuery } from '@/Redux/api/apiSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartTopHeader from './CartTopHeader';
import { MenuCardType } from './MenuTypeScript/MenuTypeScript';

const CartParent = () => {
    // redux----------------------------------------
    const { menusCategories } = useSelector((state: any) => state.menuPageSlice)
    const { data: menuItems, isLoading, isError } = useGetMenuItemsQuery("")

    //distructureing menus card-------------------
    // const { categories, comments, createdBy, description, image, modifiedAt, myfevorite, publishedAt, tags, title, _id } = menuItems;


    //state----------------------------------------
    const [cartView, setCartView] = useState("");

    //filtering by category-------------------------
    const globalsItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("global")
    ))
    const appetizerItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("appetizer")
    ))
    const nigriSushiItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("nigri sushi")
    ))
    const popularSashimiItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("popular Sashimi")
    ))
    const selectedSakeItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("selected sake")
    ))
    const specialItems = menuItems?.filter((item: MenuCardType) => (
        item?.categories.includes("specials")
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
                menuItems.map((item: MenuCardType) => <MenuCartGridView key={item._id} item={item} />)
            }
            {cartView === "list-view" &&
                menuItems.map((item: MenuCardType) => <MenuCartListView key={item._id} item={item} />)
            }
        </div>
    }
    return (
        <>
            <CartTopHeader
                setCartView={setCartView}
                cartView={cartView}
            />
            {menuItemContent}
        </>
    );
};

export default CartParent;