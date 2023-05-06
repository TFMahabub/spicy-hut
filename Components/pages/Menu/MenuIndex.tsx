import SectionTitle from '@/Components/reusedComponents/SectionTitle';
import { setMenuCategories } from '@/Redux/menuPageSlice/menuPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartParent from './CartParent';

const MenuIndex = () => {
    //redux--------------------------
    const { menusCategories } = useSelector((state: any) => state.menuPageSlice)
    const dispatch = useDispatch();

    const menuItems = [
        { name: "all", value: "all" },
        { name: "global", value: "global" },
        { name: "appetizer", value: "appetizer" },
        { name: "nigri sushi", value: "nigri sushi" },
        { name: "popular sashimi", value: "popular sashimi" },
        { name: "selected sake", value: "selected sake" },
        { name: "specials", value: "specials" }
    ]
    return (
        <div className='container section_gap'>
            <div className='section_gap text-center'>
                <SectionTitle topText="Our Menu" bottomText="Enjoy Your Food" topTextCenter={true} leftLine={true} rightLine={true} />
            </div>
            <div className='mt-10'>
                <div className='flex flex-col flex-wrap md:flex-row md:items-center md:justify-center gap-3'>
                    {
                        menuItems?.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => dispatch(setMenuCategories(item?.value))} className={`${menusCategories === item?.value ? "menuItem_button_fill" : "menuItem_button_outLine"}  duration-300 capitalize`}>
                                {item?.name}
                            </button>
                        ))
                    }
                </div>
            </div>
            <CartParent />
        </div>
    );
};

export default MenuIndex;