import React from "react";
import "../Style/Home.scss";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
        alt="amazon homeImage"
        className="home__image"
      />
      <div className="home__products">
        
        <Product
          title={
            "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
          }
          id={123465}
          price={11.96}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          }
        />
        <Product
          title={
                "Hamilton Beach Wave Crusher Blender with 40oz Jar, 3-Cup Vegetable Chopper, and Portable Blend-In Travel Jar for Shakes and Smoothies"
        }
          id={56521}
          price={59.99}
          rating={4}
          image={
                "https://images-na.ssl-images-amazon.com/images/I/713JWyAEtjL._AC_SL1500_.jpg"
        }
        />
      </div>
      <div className="home__products">
      <Product
          title={
            "Rowenta Professional DW5280 1725-Watts Steam Iron with Stainless Steel Soleplate, Blue"
          }
          id={465952}
          price={55.88}
          rating={3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71vB7k3qsgL._AC_SL1500_.jpg"

        }
        />
        <Product
          title={
            "Rolex Daydate 40MM Platinum President 228206 Ice Blue Motif Dial & Smooth Bezel (Certified Pre-Owned)"
          }
          id={7656468}
          price={63200}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/510uMCTTikL._AC_.jpg"
          }
        />
        <Product
          title={
            "Apple MacBook Pro With Touch Bar Intel Core i5, 13-inch, 8GB RAM, 256GB Storage Space Gray "
          }
          id={862615}
          price={1299}
          rating={4}
          image={
                "https://images-na.ssl-images-amazon.com/images/I/71i49M4hv2L._AC_SL1500_.jpg"
        }
        />
      </div>
      <div className="home__products">
        <Product
          title={
            "LG 27GL650F-B 27 Inch Full HD Ultragear G-Sync Compatible Gaming Monitor with 144Hz Refresh Rate and HDR 10 - Black "
          }
          id={951545}
          price={246.99}
          rating={5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71ZFFvrGaAL._AC_SL1500_.jpg"
          }
        />
      </div>
    </div>
  );
}

export default Home;
