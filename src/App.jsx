import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./common/header/Header";
import Home from "./pages/Home";
import { useEffect } from "react";
import { Footer } from "./common/header/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./pages/Store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-gray-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}></Route>
          {/* <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />}></Route>
          <Route path="/product_item/:id" element={<ProductItem />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/check-product" element={<CheckProductList />}></Route>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/cart/:productId" element={<Cart />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/news-component" element={<NewsComponent />}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
