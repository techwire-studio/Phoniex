// src/components/AddProduct.js
import React, { useState } from "react";
import { createProduct } from "../src/services/productService";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert price and stock to integers
    const productData = {
      ...product,
      price: parseInt(product.price, 10), // Convert to number
      stock: parseInt(product.stock, 10), // Convert to number
    };
  
    console.log("Product data being sent:", productData); // Log the product data here
    try {
      const newProduct = await createProduct(productData);
      console.log("Product added:", newProduct);
      setProduct({
        name: "",
        price: "",
        stock: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Product Stock"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
