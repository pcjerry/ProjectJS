import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51IZYw4JB3PZCBovITf68gJnMZ32lCDoSgZEsY29Qv5YvMqdMKUOUyRR6OtQwXxHyJzTRerChSFWHWQmD4nbnq7un006BeMa5zD");
    }
    return stripePromise;
};

export default getStripe;