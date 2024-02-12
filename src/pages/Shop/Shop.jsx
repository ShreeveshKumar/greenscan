import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { steps_to_seller } from "../../data";
import Social from "../../Components/Social/Social";

const Shop = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <ShopSection />
      </div>
      <SellerCard />
      <Footer />
    </div>
  );
};

const ShopSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center m-5 ">
      <div className="text-xl font-bold ">Become a Seller Now! </div>
      <div>
        <img src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg" alt="" />
      </div>
      <button type="submit" onClick={() => navigate("/Shop/Sell")} className="bg-green-600 text-black p-2 rounded-md  ">
        Register now 
      </button>
    </div>
  );
};

const SellerCard = () => {
  return (
    <div className="text-center">
      <div className="text-xl font-bold ">2 steps away from becoming a Seller</div>
      <div>
        {steps_to_seller.map((poi, index) => (
          <Social
            key={index}
            text={poi.text}
            text2={poi.text2}
            image={poi.image1}
            image2={poi.image2}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
