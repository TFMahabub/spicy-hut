import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
