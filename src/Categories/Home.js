import React from "react";
import LoadingScreen from '../Components/LoadingScreen';
import { useState } from "react";
import Item from "../Components/Item";


const Home = ({ items, fetchProductByBrand, fetchProductByCategory,isLoading}) => {
    const [brandMenu, setBrandMenu] = useState(false);
    const handleBrand = () => {
      setBrandMenu(!brandMenu);
    };
    const [categoryMenu, setCategoryMenu] = useState(false);
    const handleCategory = () => {
      setCategoryMenu(!categoryMenu);
    };
  return (
    <nav class="bg-white px-2 sm:px-52 py-2.5 rounded ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      
        <a href="#" class="flex items-center">
          <button  onClick={() => fetchProductByCategory("all")} class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Shops
          </button>
        </a>

        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        
      
         
          <li class=" py-2 pr-4 pl-3 text-gray-700   border-gray-100 ">
            
           
            <button  className="bg-sky-500 text-xl text-white font-medium px-6 py-1 hover:bg-sky-700  rounded-xl"onClick={() => handleCategory()}>
              Categories
            </button>
           
            {categoryMenu && (
            <div className="pt-6" id="">
              <div className="space-y-6">
                <div className="flex items-center">
                  
                <button   onClick={() =>fetchProductByCategory("smartphones")
                    } >SmartPhones</button>
                
                </div>

                <div className="flex items-center">
                    
                <button   onClick={() =>fetchProductByCategory("laptops")
                    } >Laptops</button>
                </div>

                <div className="flex items-center">
                   
                <button   onClick={() =>fetchProductByCategory("fragrances")
                    } >Fragrances</button>
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByCategory("skincare")
                    } >SkinCare</button>
                  
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByCategory("home-decoration")
                    } >Home-decoration</button>
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByCategory("groceries")
                    } >Groceries</button>
                </div>
                
              </div>
              
            </div>
              
          )}
           </li>
          <li class=" py-2 pr-4 pl-3 text-gray-700   border-gray-100 ">
            
           
            <button  className="bg-sky-500 text-xl text-white font-medium px-6 py-1 hover:bg-sky-700  rounded-xl"onClick={() => handleBrand()}>
              Brands
            </button>
           
            {brandMenu && (
            <div className="pt-6" id="">
              <div className="space-y-6">
                <div className="flex items-center">
                  
                <button   onClick={() =>fetchProductByBrand("APPle")
                    } >Apple</button>
                
                </div>

                <div className="flex items-center">
                    
                <button   onClick={() =>fetchProductByBrand("Samsung")
                    } >Samsung</button>
                </div>

                <div className="flex items-center">
                   
                <button   onClick={() =>fetchProductByBrand("Huawei")
                    } >Huawei</button>
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByBrand("OPPO")
                    } >OPPO</button>
                  
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByBrand("Microsoft Surface")
                    } >Microsoft</button>
                </div>
                <div className="flex items-center">
                <button   onClick={() =>fetchProductByBrand("HP Pavilion")
                    } >HP Pavilion</button>
                </div>
                
              </div>
              
            </div>
              
          )}
           </li>
        </ul>
      </div>

      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 place-items-center px-4 py-3 mt-8 relative z-[5]">
        {items &&
          items.map(
            (item) =>  (<Item key={item.id} item={item} />)
          )}
      </div>
      <LoadingScreen  showLoading={isLoading}/>
    </nav>
  );
};

export default Home;