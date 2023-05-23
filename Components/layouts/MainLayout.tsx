import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import SearchModalIndex from "../modal/SearchModal/SearchModalIndex";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  // redux-------------------------
  const { searchOpenClose } = useSelector((state: any) => state.navbarSlice)
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      <AnimatePresence>
        {
          searchOpenClose &&
          <SearchModalIndex />
        }
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
