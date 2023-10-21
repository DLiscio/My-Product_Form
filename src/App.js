import React, { useState } from 'react';
import './App.css';

function TextInput({ type = 'text', label }) {
    const [value, setValue] = useState('');
    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className='input-container'>
            <input type={type} value={value} onChange={handleChange} />
            <label className={value && 'filled'} htmlFor={value}>
                {label}
            </label>
        </div>
    );
}

export default function App() {
    const handleSubmit = () => {
        window.alert('Your Form Has Been Submitted');
    }

    const handleCancel = () => {
        window.location.reload(false);
    }

    return (
        <div className='App'>
            <h2> New Product </h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <TextInput id='name' label='Name' />
                <TextInput label='Price' />
                <TextInput label='Quantity' />
                <TextInput label='Description' />
                <TextInput label='Manufacturer' />

                <div className='button-container'>
                    <button type='submit'>Submit</button>
                    <button type='reset' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
