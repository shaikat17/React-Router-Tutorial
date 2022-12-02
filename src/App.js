import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Error from "./Components/Error";



function App() {
  return (
    <BrowserRouter>
    <nav>Our Navbar</nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="*" element={<Error />} />
      </Routes>
      <footer>Our Footer</footer>
    </BrowserRouter>
  );
}

export default App;
