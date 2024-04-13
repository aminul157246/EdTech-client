import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutFrom = () => {


    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    // const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    const [carts, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/carts?email=${user?.email}`)
            .then(res => {
                setCart(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user.email]);   

    const totalPrice = carts.reduce((acc, item) => acc + item?.cartItem?.price, 0);


    useEffect(() => {
        if (totalPrice > 0) {
            axios.post('http://localhost:3000/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                }) 
        }

    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to 
                    status: 'pending'
                }



                const res = await axios.post('http://localhost:3000/payments', payment);
                console.log('payment saved', res.data);
                // refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successful",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    // navigate('/PaymentHistory')
                }

            }
        }

    }





    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-12">Total Price  : {totalPrice} $ </h2>

            <form onSubmit={handleSubmit} >
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '18px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>

        </div>
    );
};

export default CheckoutFrom;