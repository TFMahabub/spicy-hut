import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import useCheck from "../hook/useCheck";
import SearchModalIndex from "../modal/SearchModal/SearchModalIndex";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchComponent, setSearchComponent] = useState(false);
  const { check } = useCheck();
  // const { searchComponent } = useSearchComponent();
  // console.log(check)
  // const searchComponent = false;
  return (
    <div className="relative">
      <Navbar setSearchComponent={setSearchComponent} />
      {children}
      <Footer />
      <AnimatePresence>

        {
          searchComponent &&
          <SearchModalIndex setSearchComponent={setSearchComponent} />
        }
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
