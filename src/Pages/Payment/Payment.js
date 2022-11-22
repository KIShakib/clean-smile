import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import paymentImage from "../../assets/images/checkout-bg.jpg";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);


const Payment = () => {
    const bookingInfo = useLoaderData();
    const { _id, date, email, patientName, phone, price, slot, treatmentName } = bookingInfo;
    return (
        <div className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br w-full'>
            <div className="flex flex-col items-center justify-center relative lg:w-1/3">

                <div
                    id="partnerCard"
                    className="bg-[#1c1c1c] text-gray-50 overflow-hidden w-full rounded-md p-2 min-h-[500px] flex flex-col"
                >
                    <div>
                        <h3 className="text-center py-4 text-xl">
                            Payment
                        </h3>
                    </div>

                    <div>
                        <img className='h-72 w-full' src={paymentImage} alt="PaymentImage" />
                    </div>
                    <div className="grid grid-cols-2 px-8 py-2">
                        <h4>
                            {patientName}
                        </h4>
                        <p>{email}</p>
                    </div>
                    <div className='mt-2 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-4 text-gray-900'>
                        <p className='text-center text-lg'>Payment Information</p>
                        <div className='text-center'>
                            <h4>{treatmentName}</h4>
                            <h4>{slot}   {date}</h4>
                            <h4>Total Pay : {price}</h4>
                        </div>
                    </div>
                    <div className='w-full my-4 p-4 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                bookingInfo={bookingInfo}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;