import React, { useState, useEffect } from 'react';
import '../App.css';

const Form = (props) => {
    // console.log(props);
    const [inputName, setInputName] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [inputNumber, setInputNumber] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [error, setError] = useState('');
    const [DataStore, setDataStore] = useState(props.data);
    console.log(DataStore);



    const validateAndSendData = () => {
        if (!inputName || !inputQuantity || !inputNumber || !inputDescription) {
            setError('Please fill out all required fields.');
            return;
        }

        const dataArr = {
            itemName: inputName,
            itemQuantity: inputQuantity,
            Price: inputNumber,
            Description: inputDescription,
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHMGq52Drb0DcsLiTYgbUa9-NVw8XwtvhorQ&s"
        };

        let oldData = [...DataStore];
        oldData.push(dataArr);
        setDataStore(oldData)
        console.log(oldData);

        // setInputName('');
        // setInputQuantity('');
        // setInputNumber('');
        // setInputDescription('');
        // setError('');

        props.addToCartHandler(oldData);
    };

    return (
        <div className='form'>
            <div className="input-container">
                <div className='itemName'>
                    <input type='text' value={inputName} onChange={e => setInputName(e.target.value)} placeholder='Enter Item Name' />
                </div>
                <div className='itemName'>
                    <input type='number' value={inputQuantity} onChange={e => setInputQuantity(e.target.value)} placeholder='Enter Quantity' />
                </div>
                <div className='itemName'>
                    <input type='number' value={inputNumber} onChange={e => setInputNumber(e.target.value)} placeholder='Enter Price' />
                </div>
                <div className='itemName'>
                    <input type='text' value={inputDescription} onChange={e => setInputDescription(e.target.value)} placeholder='Description For Item' />
                </div>
                <div className='itemName'>
                    <input type='file' placeholder='Upload Image' />
                </div>
                {error && <p className="error">{error}</p>}
                <button
                    onClick={() => {
                        validateAndSendData();
                    }}
                >Submit</button>
            </div>
        </div>
    );
};


export default Form;
