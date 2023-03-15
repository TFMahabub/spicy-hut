import SectionTitle from '@/Components/reusedComponents/SectionTitle';
import { useState } from 'react';
import CartParent from './CartParent';

const MenuIndex = () => {
    const [menuCategory, setMenuCategory] = useState("")
    return (
        <div className='container section_gap'>
            <div className='section_gap text-center'>
                <SectionTitle topText="Our Menu" bottomText="Enjoy Your Food" topTextCenter={true} leftLine={true} rightLine={true} />
            </div>
            <div className='mt-6'>
                <div className='flex items-center justify-center gap-3'>
                    <button onClick={() => setMenuCategory("item")} className='menuItem_button_fill'>item</button>
                    <button onClick={() => setMenuCategory("item")} className='menuItem_button_fill'>item</button>
                    <button onClick={() => setMenuCategory("item")} className='menuItem_button_outLine'>item</button>
                </div>
            </div>
            <CartParent />
        </div>
    );
};

export default MenuIndex;