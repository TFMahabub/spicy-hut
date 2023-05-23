import SearchCart from "@/Components/Cart/SearchCart";
import DownArrow from "@/Components/Icons/DownArrow";
import Search from "@/Components/Icons/Search";
import { setSearchOpenClose } from "@/Redux/navbarSlice/navbarSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const SearchModalIndex = () => {
    // redux-------------------------
    const { searchOpenClose } = useSelector((state: any) => state.navbarSlice)
    const dispatch = useDispatch();

    return (
        <motion.div
            // key={searchComponent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .2 }}
            className="fixed z-20 inset-0 bg-bodyBackground/60 overflow-y-scroll scrollNone">
            <motion.div
                // key={searchComponent}
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
                transition={{ duration: .4 }}
                className=" bg-bodyBackground mt-40 relative pb-4">
                <div className="container pt-8 space-y-8">
                    {/* <span
                        onClick={() => setSearchComponent((pre: any) => !pre)} className="hover:cursor-pointer absolute left-[50%] top-3"><DownArrow moreClass="mx-auto fill-bodyBackground bg-secondary/60 rounded-lg" /></span> */}
                    <span
                        onClick={() => dispatch(setSearchOpenClose())} className="hover:cursor-pointer absolute left-[50%] top-3"><DownArrow moreClass="w-[2.2rem] rounded-full hover:bg-secondary/10 h-[2.2rem] mx-auto fill-primary" /></span>
                    <div className="flex items-center gap-[2px] border-[1px] border-secondary rounded-full overflow-hidden py-[6px] px-[8px]">
                        <Search moreClass="fill-secondary/80" />
                        <label htmlFor=""></label>
                        <input type="text" name="" id="" placeholder="search text" className="bg-bodyBackground w-full ring-0 outline-none text-secondary/80 font-light tracking-wider placeholder:text-secondary/80 placeholder:font-light placeholder:tracking-wider placeholder:capitalize" />
                        {/* <input type="text" name="search" id="search" placeholder="search text" className="w-full py-1 bg-bodyBackground border-[1px] border-secondary/80 tracking-wider placeholder:text-secondary/80 placeholder:font-light px-4 rounded-full text-secondary/80 font-light" /> */}
                    </div>
                    {/* ------------------------content------------------------ */}
                    <div>
                        <div>
                            <h3 className="text-secondary/80 tracking-wide text-lg font-light">Search Result</h3>
                            <hr className="mt-1 h-[1px] text-secondary/80" />
                        </div>
                        <div className="mt-4 grid grid-cols-2 md:grid-col-4 lg:grid-cols-6 gap-4 overflow-y-auto">
                            {
                                [...Array(8)].map((_, i) => (
                                    <SearchCart key={i} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SearchModalIndex;