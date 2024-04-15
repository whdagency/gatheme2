import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {tabAchat} from './constant/page'
import Banner from "./Banner/Banner";
import Tab from "./Tabs/Tab";
import MenuItems from "./MenuItems/MenuItems";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import Achat from "./Achat/Achat";
import Claims from "./Claims/Claims";

function App() {
  const [cartCount, setCartCount] = useState(tabAchat.length);
  return (
    <Router>
      <div className="h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Tab />
                <MenuItems cartCount={cartCount} setCartCount={setCartCount} />
                <Footer/>
              </>
            }
          />
          <Route path="/info" element={
            <>
            <Info />
            <Footer/>
            </>
          } />
           <Route path="/Achat" element={
            <>
            <Achat   cartCount={cartCount} setCartCount={setCartCount} />
            <Footer/>
            </>
          } />
           <Route path="/Claims" element={
            <>
            <Claims/>
            <Footer/>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
