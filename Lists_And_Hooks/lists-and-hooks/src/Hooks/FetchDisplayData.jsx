import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchDisplayData() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setproduct(res.data);
    } catch (error) {
      console.log("Axios error server error", error);
    }
  };
  return (
    <div>
      <h2>Fetch Data</h2>
      <div className="container">
        <div className="row">
          {product &&
            product.map((data, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={data.image}
                      className="card-img-top"
                      style={{ width: "200px", height: "300px" }}
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <h5 className="card-title">{data.price}</h5>
                      <p className="card-text">
                        {data.description.slice(0, 40)}
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default FetchDisplayData;
