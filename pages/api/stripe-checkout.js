const stripe = require("stripe")(process.env.STRIPEKEY);

export default async function stripecheckout(req, res) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1M1CxgLrQbwXtrIy8g5j8ShI",
        quantity: 1,
      },
    ],
    success_url: "http://localhost:4242/success",
    cancel_url: "http://localhost:4242/cancel",
  });
  res.redirect(303, session.url);
}
