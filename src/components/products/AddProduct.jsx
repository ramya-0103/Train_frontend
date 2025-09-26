import React from 'react';

const AddProduct = () => {
  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <input type="text" placeholder="Product Name" />
        <input type="number" placeholder="Price" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
