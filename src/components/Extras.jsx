import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('your-publishable-key-here');

const express = require('express');
const Stripe = require('stripe');
const app = express();
const stripe = Stripe('your-secret-key');

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body; // Amount from your frontend (in cents)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Donation',
        },
        unit_amount: amount,
      },
      quantity: 1,
    }],
    success_url: 'https://yourwebsite.com/thank-you',
    cancel_url: 'https://yourwebsite.com/canceled',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));