
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res) {
  const sessionId = req.query.session_id
                            //listLineItems gives ordered products of sessionId
  const session = await stripe.checkout.sessions.listLineItems(sessionId);

  res.status(200).json({
    session,
  });
}