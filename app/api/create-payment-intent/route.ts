import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PRICES: Record<string, number> = {
  launch: 50000, // $500
  scale: 250000, // $2,500
  "consulting-5": 300000, // $3,000
  "consulting-10": 550000, // $5,500
  "consulting-20": 1000000, // $10,000
};

export async function POST(request: Request) {
  try {
    const { plan, hours } = await request.json();

    const key =
      plan === "consulting" && hours ? `consulting-${hours}` : plan;
    const amount = PRICES[key];

    if (!amount) {
      return NextResponse.json(
        { error: "Invalid plan or hours" },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      metadata: { plan, hours: hours?.toString() ?? "" },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("PaymentIntent error:", err);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
