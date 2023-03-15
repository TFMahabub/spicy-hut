import { useMenuCategory } from '@/Components/hook/useAllState';
import SectionTitle from '@/Components/reusedComponents/SectionTitle';
import CartParent from './CartParent';

const MenuIndex = () => {
    const { menuCategory, setMenuCategory } = useMenuCategory();
    console.log(menuCategory);
    return (
        <div className='container section_gap'>
            <div className='section_gap text-center'>
                <SectionTitle topText="Our Menu" bottomText="Enjoy Your Food" topTextCenter={true} leftLine={true} rightLine={true} />
            </div>
            <div className='mt-10'>
                <div className='flex flex-col flex-wrap md:flex-row md:items-center md:justify-center gap-3'>
                    <button onClick={() => setMenuCategory("japanese-tapas")} className='menuItem_button_outLine'>Japanese Tapas</button>
                    <button onClick={() => setMenuCategory("popular-sashimi")} className='menuItem_button_outLine'>Popular Sashimi</button>
                    <button onClick={() => setMenuCategory("appetizer")} className='menuItem_button_fill'>Appetizer</button>
                    <button onClick={() => setMenuCategory("seasonal-specials")} className='menuItem_button_outLine'>Seasonal Specials</button>
                    <button onClick={() => setMenuCategory("nigiri-sushi")} className='menuItem_button_outLine'>Nigiri Sushi</button>
                    <button onClick={() => setMenuCategory("selected-sake")} className='menuItem_button_outLine'>Selected Sake</button>
                </div>
            </div>
            <CartParent />
        </div>
    );
};

export default MenuIndex;