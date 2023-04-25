import { useMenuCategory } from '@/Components/hook/useAllState';
import SectionTitle from '@/Components/reusedComponents/SectionTitle';
import CartParent from './CartParent';

const MenuIndex = () => {
    const { menuCategory, setMenuCategory } = useMenuCategory();
    // console.log(menuCategory);
    const menuItems = [
        { name: "All", value: "all" },
        { name: "Appetizer", value: "appetizer" },
        { name: "Nigiri Sushi", value: "nigiri-sushi" },
        { name: "Popular Sashimi", value: "popular-sashimi" },
        { name: "Selected Sake", value: "selected-sake" },
        { name: "Seasonal Specials", value: "seasonal-specials" },
        { name: "Special", value: "specials" },
    ]
    return (
        <div className='container section_gap'>
            <div className='section_gap text-center'>
                <SectionTitle topText="Our Menu" bottomText="Enjoy Your Food" topTextCenter={true} leftLine={true} rightLine={true} />
            </div>
            <div className='mt-10'>
                <div className='flex flex-col flex-wrap md:flex-row md:items-center md:justify-center gap-3'>
                    {
                        menuItems?.map((item, i) => (
                            <button key={i} onClick={() => setMenuCategory(item?.value)} className={`${menuCategory === item?.value ? "menuItem_button_fill" : "menuItem_button_outLine"}  duration-300`}>{item?.name}</button>
                        ))
                    }
                </div>
            </div>
            <CartParent />
        </div>
    );
};

export default MenuIndex;