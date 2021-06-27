const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const stripe = require("stripe")(
  "sk_test_51J4hjUSCgBO5ICaFZMR63d1cfI8WP0Q0RNZwjcfnC65XsjAVxqW1EBEQRfnkCU47PySHk5yFQWWv9TsOM1K5alp0000KlNFSvi"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved Boom!! for this amount>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  //Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-4b8d7/us-central1/api
