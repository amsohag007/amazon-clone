import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id={11}
          title="This smart speaker now comes with a fabric design and improved speaker for better sound quality. Voice control your music: stream songs from Amazon"
          image="https://images2.drct2u.com/pdp_main_mobile_x2/products/yp/yp743/r01yp743501c.jpg"
          price={19.99}
          rating={5}
        />
        <Product
          id={12}
          title="LEVOIT H13 True HEPA Filter Air Purifiers for Allergies and Pets, Smokers, Smoke, Dust, Mold, and Pollen, Cleaner for Bedroom, Large Room with Optional Night Light, LV-H132, White"
          image="https://i.pinimg.com/originals/71/df/5f/71df5f6c9e63407184a704a5ce093d0a.png"
          price={87.79}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={12}
          title="LEVOIT H13 True HEPA Filter Air Purifiers for Allergies and Pets, Smokers, Smoke, Dust, Mold, and Pollen, Cleaner for Bedroom, Large Room with Optional Night Light, LV-H132, White"
          image="https://i.pinimg.com/originals/71/df/5f/71df5f6c9e63407184a704a5ce093d0a.png"
          price={87.79}
          rating={4}
        />
        <Product
          id={11}
          title="This smart speaker now comes with a fabric design and improved speaker for better sound quality. Voice control your music: stream songs from Amazon"
          image="https://images2.drct2u.com/pdp_main_mobile_x2/products/yp/yp743/r01yp743501c.jpg"
          price={19.99}
          rating={5}
        />
        <Product
          id={12}
          title="LEVOIT H13 True HEPA Filter Air Purifiers for Allergies and Pets, Smokers, Smoke, Dust, Mold, and Pollen, Cleaner for Bedroom, Large Room with Optional Night Light, LV-H132, White"
          image="https://i.pinimg.com/originals/71/df/5f/71df5f6c9e63407184a704a5ce093d0a.png"
          price={87.79}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={12}
          title="LEVOIT H13 True HEPA Filter Air Purifiers for Allergies and Pets, Smokers, Smoke, Dust, Mold, and Pollen, Cleaner for Bedroom, Large Room with Optional Night Light, LV-H132, White"
          image="https://i.pinimg.com/originals/71/df/5f/71df5f6c9e63407184a704a5ce093d0a.png"
          price={87.79}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
