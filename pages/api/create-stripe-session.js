const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { items } = req.body;

  console.log("Item => ", items);

  const redirectURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://stripe-checkout-next-js-demo.vercel.app";

  console.log("Redirect URL => ", redirectURL);

  // const transformedItem = {
  //   price_data: {
  //     currency: "usd",
  //     product_data: {
  //       name: item.name,
  //       images: [item.image],
  //     },
  //     unit_amount: item.price * 100,
  //   },
  //   description: item.description,
  //   quantity: item.quantity,
  // };

  // console.log("Transformed Data => ", transformedItem);
  const item_array = items.map((itm) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: itm.name,
        images: [itm?.image],
      },
      unit_amount: itm.price * 100,
    },
    quantity: itm.quantity,
  }));

  console.log("Items Array => ", item_array);

  const session = await stripe.checkout.sessions.create({
    // payment_method_types: ["card"],
    // line_items: [transformedItem],
    // mode: "payment",
    // success_url: redirectURL + "?status=success",
    // cancel_url: redirectURL + "?status=cancel",
    // metadata: {
    //   images: item.image,
    // },
    line_items: item_array,
    mode: "payment",
    success_url: `${redirectURL}/home?session_id={CHECKOUT_SESSION_ID}`,
    // success_url: redirectURL,
    cancel_url: `${redirectURL}/checkout-shipping`,
  });

  // console.log("Session => ", session);

  res.json({ id: session.id });
}

export default CreateStripeSession;
