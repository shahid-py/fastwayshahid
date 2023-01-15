
import React, { useState, useEffect } from "react";
import axios from "./utils/Api";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

//categories
import Home from "./Categories/Home";


const App = () => {


  //loader
const[showLoading,setShowLoading]=useState(false)

  const [items, setProducts] = useState([]);
  const [backup, setBackUp] = useState([]);

  const[isLoading,setIsLoading] = useState(true)
  
 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
     axios
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
        setBackUp(res.data.products);
        setIsLoading(false)
        setShowLoading(false) 
    })
    
    
  };
  const fetchProductByCategory = (category) => {
    if (category === "all") {
      setProducts(backup);
    } else {
      setProducts(backup.filter((item) => item.category === category));
    }
  };
  const fetchProductByBrand = (brand) => {
    if (brand === "all") {
      setProducts(backup);
    } else {
      setProducts(backup.filter((item) => item.brand === brand));
    }
  };



  return (
    <div>
      <Navbar />
      <Hero />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              isLoading={isLoading} 
              fetchProductByCategory={fetchProductByCategory}
              fetchProductByBrand={fetchProductByBrand}
              fetchProducts={fetchProducts}
              showLoading={showLoading} 
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
