import React from "react";
import "./Products.css";
import first from "../img/first.jpg";
import second from "../img/second.png";
import third from "../img/third.png";
import fourth from "../img/fourth.png";
import fifth from "../img/fifth.jpg";
import sixth from "../img/sixth.png";
import seventh from "../img/seventh.png";
import white from "../img/white.png";
const Products = () => {
  return (
    <div className="products-main">
      <marquee
        className="marq"
        behavior="up"
        direction="right"
        vspace="40px"
        scrollamount="15"
      >
        <img
          src={first}
          alt=""
          style={{ width: "250px", position: "relative", top: "-2.7rem" }}
          className="first products-img"
        />

        <img
          src={second}
          alt=""
          style={{ width: "250px" }}
          className="second products-img"
        />

        <img
          src={third}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fourth}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fifth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={sixth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={seventh}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />
        <img
          src={first}
          alt=""
          style={{ width: "250px", position: "relative", top: "-2.7rem" }}
          className="first products-img"
        />

        <img
          src={second}
          alt=""
          style={{ width: "250px" }}
          className="second products-img"
        />

        <img
          src={third}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fourth}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fifth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={sixth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={seventh}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />
        <img
          src={first}
          alt=""
          style={{ width: "250px", position: "relative", top: "-2.7rem" }}
          className="first products-img"
        />

        <img
          src={second}
          alt=""
          style={{ width: "250px" }}
          className="second products-img"
        />

        <img
          src={third}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fourth}
          alt=""
          style={{ width: "150px" }}
          className="products-img"
        />

        <img
          src={fifth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={sixth}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />

        <img
          src={seventh}
          alt=""
          style={{ width: "250px" }}
          className="products-img"
        />
      </marquee>
      <h3 style={{ margin: "20px", backgroundColor: "#32f588" }}>
        OUR PRODUCTS
      </h3>
      <section className="products">
        <div className="product-boxes">
          <div className="manual">
            <img src="" alt="" />
            <button>DOWNLOAD CATALOGUE</button>
          </div>
          <h3>Product-Name</h3>
        </div>
        <div className="product-boxes">
          <div>
            <img src="" alt="" />
            <button>DOWNLOAD CATALOGUE</button>
          </div>{" "}
          <h3>Product-Name</h3>
        </div>
        <div className="product-boxes">
          <div>
            <img src="" alt="" />
            <button>DOWNLOAD CATALOGUE</button>
          </div>{" "}
          <h3>Product-Name</h3>
        </div>
        <div className="product-boxes">
          <div>
            <img src="" alt="" />
            <button>DOWNLOAD CATALOGUE</button>
          </div>{" "}
          <h3>Product-Name</h3>
        </div>
        <div className="product-boxes">
          <div>
            <img src="" alt="" />
            <button>DOWNLOAD CATALOGUE</button>
          </div>{" "}
          <h3>Product-Name</h3>
        </div>
      </section>
    </div>
  );
};

export default Products;
