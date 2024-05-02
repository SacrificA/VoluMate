import express from "express";
import Stripe from "stripe";

const app = express();
const port = 5500;
const PUBLISHABLE_KEY =
  "pk_test_51PABK604MubCHuYuYx4aXQvAGo15cC23feDiLNXS5jQsaofjuy2xlUxm0hFvCrKGNoJL5pJLE1UgVyYbXhCh9B1200yWow59rP";
const SECRET_KEY =
  "sk_test_51PABK604MubCHuYuXhOXpbN8yZGHgSeIBATjIdnk18NHL0BPrn4baeTEeDnTsNkuyKoEGMX9jVDZiEWul65HRR2e00DJXnTbIF";

const stripe = Stripe(SECRET_KEY, { apiVersion: "2024-04-10" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.PaymentIntents.create({
      amount: 1099,
      currency: "usd",
      payment_method_types: ["card"],
    });
    const clientSecret = paymentIntent.clientSecret;
    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
