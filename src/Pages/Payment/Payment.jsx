import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutFrom";

// TODO: add publishable key
const stripePromise = loadStripe('pk_test_51Oe7BxBFKVxdQIZ0stxU2e5n5EOaP1manIMB8H8ju0I5mpRttFnfQPOOsc9VfORjYmOi5PacjyyWCsWMpSSQkc5B00Li8wRA3p');
const Payment = () => {
    return (
        <div>
            <div className="px-48 py-12 text-black">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;