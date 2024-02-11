import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { data_for_products } from "../../data";
import Product from "../../Components/ProductCard/Product";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <Products_cards />
      <Footer />
    </div>
  );
};

const Products_cards = () => {
  return (
    <div>
      <div>Products </div>
      <div className="flex gap-15 m-5 flex-wrap ">
        {data_for_products.map((op) => {
          return <Product image={op.image} name={op.name} price={op.price} />;
        })}
      </div>
    </div>
  );
};

export default Products;
