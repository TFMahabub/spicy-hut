import GridView from "@/Components/Icons/GridView";
import ListView from "@/Components/Icons/ListView";
import { useEffect } from "react";

interface PropsType {
    setCartView: (pr: string) => void;
    cartView: string;
}

const CartTopHeader = ({ setCartView, cartView }: PropsType) => {

    const handleSetView = (view: string): void => {
        localStorage.setItem("menuCardViews", JSON.stringify(view))
        const parsJSON = JSON.parse(localStorage.getItem("menuCardViews") || "")
        setCartView(parsJSON)
    }
    useEffect(() => {
        const parseData = JSON.parse(localStorage.getItem("menuCardViews") || "")
        setCartView(parseData)
    }, [])
    return (
        <div className='mt-16 flex items-center md:relative text-lg gap-4'>
            <div className='flex flex-col md:flex-row md:items-center gap-4 md:absolute bg-bodyBackground pr-6'>
                <span
                    onClick={() => handleSetView("grid-view")}
                    className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "grid-view" ? "text-primary" : "text-secondary"}`}
                >
                    <GridView width="1.2rem" bg_color={`${cartView === "grid-view" ? "#dd5903" : "#fff"}`}
                    />
                    Grid View
                </span>
                <span
                    onClick={() => handleSetView("list-view")}
                    className={`flex items-center text-base gap-2 cursor-pointer ${cartView === "list-view" ? "text-primary" : "text-secondary"}`}
                >
                    <ListView width="1.4rem" bg_color={`${cartView === "list-view" ? "#dd5903" : "#fff"}`}
                    />
                    List View
                </span>
            </div>
            <hr className='hidden md:block text-secondary/60 w-full' />
        </div>
    );
};

export default CartTopHeader;