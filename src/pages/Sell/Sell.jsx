import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    companyName: '',
    companyUrl: '',
    proofOfCompany: '',
    productImage: null,
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-green-100 rounded-md text-center">
      <label className="block mb-4">
        Product Name:
        <input type="text" name="productName" value={formData.productName} onChange={handleInputChange} className="w-full p-2 rounded-md border mt-2" />
      </label>

      <label className="block mb-4">
        Company Name:
        <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full p-2 rounded-md border mt-2" />
      </label>

      <label className="block mb-4">
        Company URL:
        <input type="text" name="companyUrl" value={formData.companyUrl} onChange={handleInputChange} className="w-full p-2 rounded-md border mt-2" />
      </label>

      <label className="block mb-4">
        Proof of Company:
        <input type="text" name="proofOfCompany" value={formData.proofOfCompany} onChange={handleInputChange} className="w-full p-2 rounded-md border mt-2" />
      </label>

      <label className="block mb-4">
        Product Image:
        <input type="file" name="productImage" onChange={handleFileChange} className="w-full mt-2" />
      </label>

      <label className="block mb-4">
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleInputChange} className="w-full p-2 rounded-md border mt-2" />
      </label>

      <button type="submit" className="bg-green-500 text-white p-4 rounded-md w-full mt-4">Submit</button>
    </form>
  );
};

export default ProductForm;
