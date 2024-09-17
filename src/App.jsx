import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./common/header/Header";
import Home from "./pages/Home";
import { useEffect } from "react";
import { Footer } from "./common/header/footer/Footer";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
