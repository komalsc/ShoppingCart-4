import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { About} from "./pages/About";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";
import { useEffect, useState } from "react";


function App() {


  const[matches, setMatches]=useState(
    window.matchMedia("(min-width: 768px)").matches
  )

useEffect(()=>{
  window.matchMedia("(min-width: 768px)").addEventListener('change',e=>setMatches(e.matches))
},[])




  return (
    <div className="App">

      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />


         




          </Routes>
        </Router>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;
