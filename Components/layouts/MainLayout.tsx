import { useSearchComponent } from "@/Components/hook/useAllState";
import SearchModalIndex from "../modal/SearchModal/SearchModalIndex";
import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { searchComponent } = useSearchComponent();
  console.log(searchComponent)
  // const searchComponent = false;
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      {
        searchComponent &&
        <SearchModalIndex />
      }
    </div>
  );
};

export default MainLayout;
