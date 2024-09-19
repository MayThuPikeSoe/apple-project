import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import { Footer } from "../common/header/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
