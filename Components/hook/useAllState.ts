import { useState } from 'react';

export const useCartView = () => {
    const [cartView, setCartView] = useState("grid-view");
    return{cartView, setCartView}
};

export const useMenuCategory = () =>{
    const [menuCategory, setMenuCategory] = useState("");
    return{menuCategory, setMenuCategory}
}

export const useFavoriteIcon = () =>{
    const [favorite, setFavorite] = useState(false);
    return {favorite, setFavorite};
}

export const useSearchComponent = () =>{
    const [searchComponent, setSearchComponent] = useState(false);
    return {searchComponent, setSearchComponent}
}