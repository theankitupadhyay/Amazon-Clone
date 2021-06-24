const functions = require("firebase-functions");

const express = require("express");

const cars = require("cars");

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

app.get("/", (request, response) => res.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);
