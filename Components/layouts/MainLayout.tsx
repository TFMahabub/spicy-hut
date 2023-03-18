import { useState } from "react";
import { useFavoriteIcon } from "../hook/useAllState";
import SearchModalIndex from "../modal/SearchModal/SearchModalIndex";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchComponent, setSearchComponent] = useState(false);
  const { favorite } = useFavoriteIcon()
  // const { searchComponent } = useSearchComponent();
  // console.log(favorite)
  // const searchComponent = false;
  return (
    <div className="relative">
      <Navbar setSearchComponent={setSearchComponent} />
      {children}
      <Footer />
      {
        searchComponent &&
        <SearchModalIndex setSearchComponent={setSearchComponent} />
      }
    </div>
  );
};

export default MainLayout;
