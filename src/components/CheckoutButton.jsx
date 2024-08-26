import React, { useState } from 'react';
import axios from 'axios';

const CheckoutButton = () => {
    // State to hold the amount
    const [amount, setAmount] = useState('');

    const handleCheckout = async () => {
        try {
            // Validate the amount or convert it to the proper format if necessary
            const validAmount = parseInt(amount, 10);
            if (isNaN(validAmount) || validAmount <= 0) {
                alert('Please enter a valid amount.');
                return;
            }
            //going to edit  link to public http://localhost:3000
            const response = await axios.post('https://961mfdzq-3000.uks1.devtunnels.ms/create-checkout-session', {
                amount: validAmount  // Sending amount to the backend
            });
            console.log("I am data in button checkout", response.data.url);
            window.location.href = response.data.url; // Redirect to Stripe's hosted checkout page
        } catch (error) {
            console.error('Error:', error);
            alert('There was an issue with your checkout.');
        }
    };

    return (
        <div>
            <input
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={handleCheckout}>Go to Checkout</button>
        </div>
    );
}

export default CheckoutButton;
