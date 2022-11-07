import stripecheckout from "../pages/api/stripe-checkout";

export const usestripe = async () => {
  const stripe = await fetch("/api/stripe-checkout", {
    method: "POST",
  });
  const res = await stripe.json();
};
