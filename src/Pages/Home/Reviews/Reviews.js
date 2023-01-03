import React from 'react';
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png"
import Review from './Review';
import quotation from "../../../assets/icons/quote.svg"
import useDynamicTitle from '../../../Hooks/useDynamicTitle';

const Reviews = () => {
    useDynamicTitle("Reviews");
    const reviews = [
        {
            _id: 1,
            name: 'David Solomon',
            img: people1,
            review: 'Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. Navid taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.',
            location: "Cox's Bazar",
            ratings: 5
        },
        {
            _id: 2,
            name: 'Samiha Adil',
            img: people2,
            review: 'Dr. Shadab gets it. From his excellent treatment, curiosity, investigative mind and ability to connect, you know where you stand immediately and what next steps look like. Attention doctors if you want a masterclass in watching a doctor bring medical knowledge and build rapport so that message is heard by patient and therefore delivered watch this guy.',
            location: 'Mymensingh',
            ratings: 5
        },
        {
            _id: 3,
            name: 'GradMaa',
            img: people3,
            review: 'Such a great office and doctor. The wait times are relatively short (usually 15 minutes maximum). The doctor and nurse practitioner are so understanding. We’ve never had an issue with either of them. Office staff is great too – very friendly and professional!',
            location: "Gradpaa's House",
            ratings: 4
        },
    ]

    return (
        <div className='lg:px-10 my-40'>
            <div className='flex justify-between px-5'>
                <div className='my-10'>
                    <p className='text-secondary font-bold'>Testimonial</p>
                    <h3 className='text-3xl font-semibold'>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-40' src={quotation} alt="" />
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map((patientReview, idx) => <Review key={idx} patientReview={patientReview}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;