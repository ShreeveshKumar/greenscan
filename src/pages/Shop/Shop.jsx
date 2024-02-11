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
    <div className="text-center">
      <div>Become a Seller</div>
      <div>
        <img src="" alt="" />
      </div>
      <button type="submit" onClick={() => navigate("/Sell")}>
        Submit
      </button>
    </div>
  );
};

const SellerCard = () => {
  return (
    <div className="text-center">
      <div>2 steps away from becoming a Seller</div>
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
