import Navbar from "../shared/navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-[1488px] mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
