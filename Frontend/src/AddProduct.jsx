import React, { useState } from "react";

export const AddNewProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // Send lowercase keys to match backend
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await fetch("http://localhost:5000/PostedProduct", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Product added successfully");
        setTitle("");
        setImage(null);
        setDescription("");
        setPrice("");
        document.getElementById("image").value = "";
        console.log(data);
      } else {
        setMessage("❌ Upload failed: " + data.error);
        console.error(data);
      }
    } catch (err) {
      setMessage("❌ Upload error");
      console.error("Upload error:", err);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h1>Add New Product</h1>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br /><br />

      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <br /><br />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br /><br />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <br /><br />

      <button type="submit">Add Product</button>
      <p>{message}</p>
    </form>

 
  );
};
