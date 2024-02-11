import React from "react";
import Contact from "../../Components/Contact/Contact";
import Navbar from "../../Components/Navbar/Navbar";
import Social from "../../Components/Social/Social";
import { IndianComapniesdata } from "../../data";
import Footer from "../../Components/Footer/Footer";
import Carousal from "../../Components/Carousal/Carousal";


const Community = () => {
  return (
    <div>
      <Navbar />
          <Contact />
          <IndianComapnies />
          <Carousal />
          <Footer />
    </div>
  );
};


const IndianComapnies = () => {
    return (
        <div>
            <h1>Indian Comapnies adapting Green Energy</h1>
            <div>
                {
                    IndianComapniesdata.map((indcompany) => {
                        return (
                            <Social key={indcompany.id}  text={indcompany.text} text2={indcompany.text2} image={indcompany.image} image2={indcompany.image2}/>
                      )
                  })
                }
            </div>
        </div>
    )
}

export default Community;
