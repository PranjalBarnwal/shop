import Navbar from './components/navbar/Navbar';
import './App.css';
import About from './components/about/About';
function App() {
  return (
    <div className="main">
      {/* try z-index on nav and abput using div */}
     <Navbar/>
     {/* <About/> */}
    </div>
  );
}

export default App;
