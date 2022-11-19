import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ContactUs from "./components/contact/ContactUs";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="main">
      {/* try z-index on nav and abput using div */}
      <Navbar />
      {/* <Home/> */}
      {/* <About/> */}
      {/* <ContactUs/> */}
      <Products />
    </div>
  );
}

export default App;
