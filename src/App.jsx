// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  About,
  Home,
  Products,
  ErrorPage,
  SharedLayout,
  SingleProduct,
} from "./pages";

function App() {
  // const [count, setCount] = useState(0);
  //If you want to nest some routes, then instead of self-closing first route tag, you just add </Route> at the end of nesting
  //And index page will be the default path
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
