import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { useAPI } from './Context/Context';

function SponsorPage() {

  // This is only a test page, I am already tired -RM

  // Load your publishable key from the environment variables
  const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe('publishableKey');

  // Destructure the API functions inside the component
  const { createOneTimePaymentSession, createSubscriptionSession } = useAPI();

  const [key, setKey] = useState('monthly');

  // The button component to handle Stripe payment
  const SponsorButton = ({ animalId, amount, type }) => {
    const handleClick = async () => {
      const stripe = await stripePromise;

      const endpoint = type === 'one-time' ? '/create-checkout-session' : '/create-subscription-session';

      try {
        const response = await axios.post(endpoint, {
          animal_id: animalId,
          sponsorship_amount: amount,
          currency: 'eur' // Assuming you want EUR as your currency
        });

        const sessionId = response.data.id;

        // Redirect to Stripe Checkout
        const { error } = await stripe.redirectToCheckout({
          sessionId: sessionId,
        });

        if (error) {
          console.error('Stripe error:', error);
        }
      } catch (error) {
        console.error('Error creating Stripe session:', error);
      }
    };

    return (
      <button onClick={handleClick}>
        {type === 'one-time' ? 'Sponsor Once' : 'Sponsor Monthly'}
      </button>
    );
  };

  return (
    <Tabs
      style={{ justifyContent: "center", marginTop: "2rem" }}
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="monthly" title="Monthly">
        <div style={{ padding: '1rem' }}>
          <h3>Monthly subscription</h3>
          <p>Support this animal with a monthly donation.</p>
          <SponsorButton animalId="123" amount="10.00" type="monthly" />
        </div>
      </Tab>
      <Tab eventKey="onetime" title="One-time">
        <div style={{ padding: '1rem' }}>
          <h3>One-time payment</h3>
          <p>Support this animal with a one-time donation.</p>
          <SponsorButton animalId="123" amount="50.00" type="one-time" />
        </div>
      </Tab>
    </Tabs>
  );
}

export default SponsorPage;
