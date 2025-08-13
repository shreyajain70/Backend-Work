import React, { useEffect, useState } from "react";


export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('test');
    fetch("http://localhost:5000/PostedProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed fetching products:", err));
  }, []);

  return (
    <div className="product-page">
      <h1 className="page-title">Our Products</h1>
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <div className="image-wrapper">
              <img
                src={item.image}
                alt={item.Title}
                className="product-image"
              />
            </div>
            <div className="product-info">
              <h2>{item.Title}</h2>
              <p>{item.Description}</p>
              <span className="price">₹{item.Price}</span>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
