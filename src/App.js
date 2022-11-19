import Navbar from './components/navbar/Navbar';
import './App.css';
import ContactUs from './components/contact/ContactUs';
import About from './components/about/About';
import Home from "./components/home/Home"
import Products from './components/products/Products';
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="main">
    
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/products" element={<Products/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<ContactUs/>}></Route>
       <Route path="/locate" element={<ContactUs/>}></Route>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
