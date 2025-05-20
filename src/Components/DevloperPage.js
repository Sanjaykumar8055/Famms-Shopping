import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

const DevloperPage = () => {
  const formStyle = {
    height: '90vh',
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const submitStyle = {
    ...inputStyle,
    backgroundColor: '#4CAF50',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'bold',
  };

  const [category, setCategory] = useState("men");
  const [name, setName] = useState('');
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = {
        name,
        price: parseFloat(price),
        image:image,
      };

      await addDoc(collection(db, category.toLowerCase()), product);

      alert("Product added successfully!");

      setCategory("men");
      setName("");
      setPrice("");
      setImage("");

    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <select style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="child">Child</option>
        <option value="HomeDeta">Home</option>
      </select>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter Product Name"
        style={inputStyle}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="price"
        value={price}
        placeholder="Enter Product Price"
        style={inputStyle}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        name="image"
         placeholder="Enter Product Image URL"
        style={inputStyle}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Submit" style={submitStyle} />
    </form>
  );
};

export default DevloperPage;
