import Lottie from 'lottie-react'
import heroImage from "../../../assets/images/chair.png"
import heroBg from "../../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import doctorCare from "../../../assets/48627-doctor.json";

const AppointmentTop = ({ selectedDate, setSelectedDate }) => {

    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <div className='bg-cover bg-opacity-100 mt-10' style={{ backgroundImage: `url(${heroBg})` }}>
            <div className='flex justify-center my-10'>
                <button className="btn btn-primary rounded-sm border-none p-4 text-slate-600 font-semibold bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] mt-10">TAKE AN APPOINTMENT</button>
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-10 lg:gap-x-40">
                    {/* <img src={heroImage} className=" shadow-2xl w-full h-96" alt="Chair For Patients" /> */}
                    <Lottie animationData={doctorCare} loop={true} />
                    <div className='w-full bg-neutral text-white p-6 rounded'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={(selectedDate) => {
                                if (selectedDate) {
                                    setSelectedDate(selectedDate)
                                }
                            }}
                            footer={footer}
                            captionLayout="dropdown"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentTop;