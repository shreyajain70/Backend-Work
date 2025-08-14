import React, { useEffect, useState } from "react";

export function Home() {
  const [products, setProducts] = useState([]);

  // Load products from backend
  useEffect(() => {
    fetch("http://localhost:5000/PostedProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed fetching products:", err));
  }, []);

  // Ensure Razorpay script is loaded
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle payment
  const handleBuy = async (product) => {
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        alert("Failed to load Razorpay SDK");
        return;
      }

      // Convert price to paise (integer)
      const amountInPaise = parseInt(product.Price, 10) * 100;

      // Create order from backend
      const orderRes = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise }),
      });

      if (!orderRes.ok) {
        throw new Error(`Order API failed with status ${orderRes.status}`);
      }

      const orderData = await orderRes.json();
      if (!orderData.id) throw new Error("Order creation failed");

      const options = {
        key: "rzp_test_R5AAl5ZdPJ2r4d", // test key
        amount: orderData.amount,
        currency: orderData.currency,
        name: "My Shop",
        description: product.Title,
        image: product.image.startsWith("http") ? product.image : undefined,
        order_id: orderData.id,
        handler: (response) => {
          alert(`✅ Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert(`❌ Payment Failed! ${err.message}`);
    }
  };

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
              <button
                className="buy-btn"
                onClick={() => handleBuy(item)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
