const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HQqgaLeu2DHClsQRQheketrNI7iR1d9lUWez1o12QnUjZN7yHVS6upyekEuJwAYBZwDOyOAAqOr5DahRQ9Qacte00lvOSZR0k');
//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello, World'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //sub units of currency
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//Listen command
exports.api = functions.https.onRequest(app);

//Exampl endpoint
//http://localhost:5001/clone-1e5df/us-central1/api
//firebase emulators:start