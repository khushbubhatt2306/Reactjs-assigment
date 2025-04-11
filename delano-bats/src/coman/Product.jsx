import axios from "axios";
import React, { useEffect, useState } from "react";

function Product() {
  const [productlist, setproductlist] = useState([]);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = async () => {
    const res = await axios.get("http://localhost:3000/productlist");
    console.log(res.data);
    setproductlist(res.data);
  };

  return (
    <div className="product-section">
      <div className="container">
        <div className="row">
          <h2 className="product-section-title">STOCK LUMBER</h2>

          <div className="row g-4">
            {productlist &&
              productlist.map((product, index) => {
                const { id, title, img, price, cta } = product;
                return (
                  <div className="col-lg-3 col-md-6 col-12" key={index}>
                    <div className="product-card">
                      <a href="/product/-ogm" data-discover="true">
                        <img className="product-img" alt=" OGM" src={img} />
                      </a>
                      <h3 className="product-name">{title}</h3>
                      <p className="product-price">${price}</p>
                      <a
                        className="buy-btn"
                        href="/product/-ogm"
                        data-discover="true"
                      >
                        {cta}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="btn-part">
            <a className="shop-more-btn" href="/shop" data-discover="true">
              SHOP MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
