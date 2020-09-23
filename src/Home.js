import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

          <div className="home__row">
            <Product
              id="90829333"
              title="Apple iPhone 11 128GB"
              price={829.99}
              rating={4}
              image="https://i5.walmartimages.com/asr/cb9bbdff-7bec-4300-89d1-14edc2f4ffe7_1.b99c9405351fc17893f4de78c90edf35.jpeg"
            />
            <Product
              id="90829334"
              title="Apple iPhone XS Max 256GB"
              price={1497.98}
              rating={5}
              image="https://i.ebayimg.com/images/g/Mn8AAOSwHt9d1Hn4/s-l1600.png"
            />
            <Product
              id="90829335"
              title="Samsung Galaxy Note20 Ultra 5G "
              price={899.98}
              rating={4}
              image="https://static.bhphoto.com/images/images500x500/samsung_sm_n986uznaxaa_galaxy_note_20_ultra_1596642373_1578334.jpg"
            />
            <Product
              id="90829336"
              title="Samsung Galaxy S20 5G"
              price={549.99}
              rating={3}
              image="https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S20-5G/Cosmic-Gray/Samsung-Galaxy-S20-5G-Cosmic-Gray-frontimage.png"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            <Product
              id="90829337"
              title="LG 55'' Curved 4K UHD Smart LED TV"
              price={979.49}
              rating={3}
              image="https://i.roamcdn.net/hz/qe/listing-thumb-543w/9303006669d27169dd97a29872cd16f5/-/horizon-files-prod/qe/picture/qxwnevj/8da058b55ab881a194d3b04bd713e2b9335a17c0.jpeg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home;
