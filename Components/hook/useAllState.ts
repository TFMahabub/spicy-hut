import { useState } from 'react';

export const useCartView = () => {
    const [cartView, setCartView] = useState("grid-view");
    return{cartView, setCartView}
};

export const useMenuCategory = () =>{
    const [menuCategory, setMenuCategory] = useState("");
    return{menuCategory, setMenuCategory}
}
