import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123135445"
            title="Casio G-Shock Analog-Digital Black Dial Men's Watch - GG-1000-1A5DR (G661)"
            price={14395.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71hgZEw52gL._UL1100_.jpg"
            rating={4}
          />
          <Product
            id="56546548"
            title="Casio Enticer Black Dial Men's Watch - A832/A1645"
            price={4945.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81nfIIgvFHL._UL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="56456564"
            title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
            price={39999.0}
            image="https://images-eu.ssl-images-amazon.com/images/I/41733yAnlzL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
          <Product
            id="21311364"
            title="iQOO 7 5G |Upto 6 Months NCEMI| 3GB Extended RAM"
            price={31990.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg"
            rating={4}
          />
          <Product
            id="12586548"
            title="OPPO A31  with No Cost EMI/Additional Exchange Offers"
            price={10490.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71AHtKejSlL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="54564215"
            title="OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black) (2021 Model)"
            price={47999.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61eTK1VEP0S._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
