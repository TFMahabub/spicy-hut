import SearchCart from "@/Components/Cart/SearchCart";
import DownArrow from "@/Components/Icons/DownArrow";
import Search from "@/Components/Icons/Search";

const SearchModalIndex = ({ setSearchComponent }: { setSearchComponent: any }) => {
    return (
        <div className="fixed z-20 inset-0 bg-bodyBackground/60 ">
            <div className=" bg-bodyBackground mt-40 relative">
                <div className="w-full absolute top-[-10px]">
                    <span onClick={() => setSearchComponent((pre: any) => !pre)} className="hover:cursor-pointer"><DownArrow fill_color="#000" width="1.6rem" more_class="mx-auto bg-[#fff]/60 rounded-full" /></span>
                </div>
                <div className="container pt-8 space-y-8">
                    <div className="relative">
                        <label htmlFor=""></label>
                        <input type="text" name="search" id="search" placeholder="search text" className="w-full py-1 bg-bodyBackground border-[1px] border-secondary/80 tracking-wider placeholder:text-secondary/80 placeholder:font-light px-4 rounded-full text-secondary/80 font-light" />
                        <Search bg_color="#fff" width="1.2rem" more_class="absolute my-auto right-0 inset-y-0  mr-3" />
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
            </div>
        </div>
    );
};

export default SearchModalIndex;