import React, { useState } from 'react';

function ProductForm() {
    const [formData, setFormData]  = useState({
        productName: " ",
        productPrice: " ",
        productQuantity: " ",
        productDescription: " ",
        productManufacturer: " ",
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCancel = () => {
        setFormData({
            productName: '',
            price: '',
            quantity: '',
            description: '',
            manufacturer: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setFormData({
            productName: '',
            productPrice: '',
            productQuantity: '',
            productDescription: '',
            productManufacturer: '',
        });
    };


    return (
        <form onsubmit={handleSubmit(onSubmit)}>
            <label> Product Name: 
            <input type="text" name="productName" value={formData.productName} onChange={handleChange} />
            </label>
            <br />

            <label> productPrice:
            <input type="text" name="productPrice" value={formData.productPrice} onChange={handleChange} />
            </label >
            <br />

            <label> Product Quantity: 
            <input type="number" name="productQuantity" value={formData.productQuantity} onChange={handleChange} />
            </label >
            <br />

            <label> Product Description: 
            <textarea name="productDescription" value={formData.productDescription} onChange={handleChange} />
            </label >
            <br />

            <label> Product Manufacturer: 
            <input type="text" name="productManufacturer" value={formData.productManufacturer} onChange={handleChange} />
            </label >
            <br />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleCancel}> Cancel
            </button>

            </form>
        );
};

export default ProductForm;