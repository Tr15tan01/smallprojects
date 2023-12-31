// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ErrorPage,
  SharedLayout,
  SingleProduct,
  Persons,
  Faq,
  Jobs,
  Colors,
  Jokes,
  Query,
  Unsplash,
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
          <Route path="jobs" element={<Jobs />} />
          <Route path="persons" element={<Persons />} />
          <Route path="faq" element={<Faq />} />
          <Route path="colors" element={<Colors />} />
          <Route path="jokes" element={<Jokes />} />
          <Route path="query" element={<Query />} />
          <Route path="unsplash" element={<Unsplash />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
