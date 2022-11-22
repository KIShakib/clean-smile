import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SmallSpinner from '../../Shared/SmallSpinner/SmallSpinner';

const CheckoutForm = ({ bookingInfo }) => {
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("")
    const [cardError, setCardError] = useState('');
    const { _id, date, email, patientName, phone, price, slot, treatmentName } = bookingInfo;

    const navigate = useNavigate();


    const stripe = useStripe();
    const elements = useElements();


    useEffect(() => {
        fetch("https://doctors-portal-server-nine.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [price]);

    const handleSubmit = async e => {
        setLoading(true);
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
            setLoading(false)
        } else {
            setCardError("");
        }


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    }
                }
            }
        );

        if (confirmError) {
            console.log(confirmError.message);
            setCardError(confirmError.message);
            setLoading(false)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                bookingId: _id,
                email,
                price,
                transactionId: paymentIntent.id,

            }

            fetch("https://doctors-portal-server-nine.vercel.app/payment", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess("Success");
                        setTransactionId(paymentIntent.id);
                        toast.success("Transaction Complete");
                        setLoading(false);
                        navigate("/dashboard/myappointment")
                    }
                });
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#000000',
                            '::placeholder': {
                                color: '#000000',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-1 rounded mt-8'
                type="submit" disabled={!stripe || !clientSecret}>
                {
                    loading
                        ? <SmallSpinner></SmallSpinner>
                        : "Pay"
                }
            </button>
            <p className='text-red-800'>{cardError}</p>
            <div>
                {
                    transactionId && <p className='text-green-600 font-semibold'>Transaction ID : <span className='text-red-600 font-bold uppercase'>{transactionId}</span></p>
                }
                {
                    success && <p className='text-green-600 font-semibold'>Status: {success}</p>
                }
            </div>
        </form>
    );
};

export default CheckoutForm;