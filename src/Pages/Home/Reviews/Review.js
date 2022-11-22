import React from 'react';
import Rating from 'react-rating';

const Review = ({ patientReview }) => {
    const { name, img, review, location, ratings } = patientReview;
    return (
        <div data-aos="flip-left" className="relative group hover:bg-secondary transition hover:z-[1] shadow-md rounded hover:shadow-2xl">
            <div className="w-full h-full relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90 flex flex-col justify-evenly">

                <div className="space-y-2">
                    <p className="text-sm text-gray-600 feature-description">{review}</p>
                </div>
                <div className="flex justify-between items-center group-hover:text-yellow-600">
                    <div>
                        <div className="avatar w-10">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt="Reviewer Img" />
                            </div>
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{location}</p>
                        </div>
                    </div>
                    <span className="-translate-x-4 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <Rating
                            placeholderRating={ratings}
                            readonly={true}
                            emptySymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-grey.png" className="icon" alt="/" />}
                            placeholderSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-red.png" className="icon" alt="/" />}
                            fullSymbol={<img src="https://raw.githubusercontent.com/dreyescat/react-rating/master/assets/images/star-yellow.png" className="icon" alt="/" />}
                        />
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Review;