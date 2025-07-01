import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar} from 'react-icons/fa';
import { FaArrowRightLong, FaCalendarDays } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowRight, CreditCard } from 'lucide-react';

function Datesandbank() {
    // const dates = [
    //     {
    //         content1: " August 10, 2025",
    //         title: "Abstract Submission Deadline"
    //     },
    //     {
    //         content1: " August 10, 2025",
    //         title: "Full Paper Submission Deadline"
    //     },
    //     {
    //         content1: " September 15, 2025",
    //         title: "Notification of Acceptance"
    //     },
    //     {
    //         content1: " September 30, 2025",
    //         title: "Final Paper Submission"
    //     },
    //     {
    //         content1: " September 15, 2025",
    //         title: "Registration Deadline"
    //     },
    //     {
    //         content1: " October 24–26, 2025",
    //         title: "Conference Dates"
    //     },

    // ]

    // const bank = [
    //     {
    //         content1: " ICHCIET Conference",
    //         content2: " 123456789",
    //         content3: " China",
    //         content4: " TMBL03000045",
    //         content5: " 605060005",

    //     },]

    const dates = [
        {
            content1: "August 10, 2025",
            title: "Abstract Submission Deadline",
            icon: "📝"
        },
        {
            content1: "August 10, 2025",
            title: "Full Paper Submission Deadline",
            icon: "📄"
        },
        {
            content1: "September 15, 2025",
            title: "Notification of Acceptance",
            icon: "✅"
        },
        {
            content1: "September 30, 2025",
            title: "Final Paper Submission",
            icon: "📋"
        },
        {
            content1: "September 15, 2025",
            title: "Registration Deadline",
            icon: "🎟️"
        },
        {
            content1: "October 24–26, 2025",
            title: "Conference Dates",
            icon: "🎤"
        },
    ];

    const bank = {
        accountName: "ICHCIET Conference",
        accountNumber: "123456789",
        branch: "China",
        ifscCode: "TMBL03000045",
        micr: "605060005"
    };
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Important Dates & Bank Details</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Important Dates & Bank Details</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="px-4 2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center lg:mt-15 mt-10">Important Dates & Bank Details</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">This section provides participants with all essential information regarding the conference timeline and payment process. You will find key dates for paper submission, review notifications, registration deadlines, and final manuscript uploads clearly listed for easy reference. Additionally, the official bank account details for registration fee payment are provided to ensure smooth and secure transactions. All authors and attendees are advised to adhere to the deadlines and follow the payment instructions carefully to complete their registration successfully and on time.</p>
                </div>
            </div>


          
            <div className="py-16 px-6 bg-[#E2EFE1] lg:mt-15 mt-10 ">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center">
                            Key Dates Timeline
                        </h2>
                        <p className="mt-4 lg:text-[24px] text-[20px] inter-medium opacity-85">Mark your calendar for these important milestones</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dates.map((item, index) => (
                            <div key={index} className="group">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border border-gray-100">
                                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2AA11F] to-[#99dd92] rounded-full text-white text-2xl">
                                        {item.icon}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-[24px] namdhinggo-bold  mb-3 ">
                                            {item.title}
                                        </h3>
                                        <div className="flex items-center justify-center space-x-2">
                                            <Calendar className="text-[#2AA11F] text-[20px]" />
                                            <p className="text-[#2AA11F] inter-medium text-[20px] ">
                                                {item.content1}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bank Details */}
            <div className="lg:mt-15 mt-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className=" shadow-[0_0_8px_rgba(0,0,0,0.15)] rounded-xl p-8 lg:p-12 ">
                        <div className="text-center mb-12">
                            <CreditCard className="mx-auto w-16 h-16 text-[#2AA11F] mb-4" />
                            <h2 className="lg:text-[32px] text-[24px] text-[#2AA11F] namdhinggo-bold mb-4">
                                Payment Information
                            </h2>
                            <p className="inter-regular opacity-85 leading-relaxed max-w-3xl mx-auto text-justify">
                                Participants are requested to make their registration payment through the official bank account. 
                                Please include your full name and paper ID in the transaction reference for accurate verification.
                            </p>
                        </div>

                        <div className="flex justify-center ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2AA11F] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">AN</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#2AA11F] text-[24px] namdhinggo-bold">Account Name</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.accountName}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2AA11F] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">#</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#2AA11F] text-[24px] namdhinggo-bold">Account Number</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.accountNumber}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2AA11F] rounded-lg flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#2AA11F] text-[24px] namdhinggo-bold">Branch</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.branch}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2AA11F] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">IF</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#2AA11F] text-[24px] namdhinggo-bold">IFSC Code</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.ifscCode}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-[#2AA11F] rounded-lg flex items-center justify-center">
                                            <span className="text-white inter-bold">MI</span>
                                        </div>
                                        <div className='space-y-2'>
                                            <p className="text-[#2AA11F] text-[24px] namdhinggo-bold">MICR Code</p>
                                            <p className="opacity-85 inter-medium text-[18px]">{bank.micr}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-15  max-w-[1400px] mx-auto mt-15 px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center">Join Us at ICHCIET 2025</h2>
                <p className="md:text-[18px] text-[16px]  inter-semibold lg:text-center mt-5  opacity-85 text-justify">Experience groundbreaking research presentations and network with industry leaders</p>

                <div className="lg:mt-15 mt-10 flex items-center relative ">
                    <div className="max-w-[400px] hidden lg:block"><img src="/images/register.jpg" alt="registerpage" className=" rounded-[15px] border-6 border-[#2AA11F]" /></div>
                    <div className=" relative lg:right-22 "  >
                        <div className=" bg-[#2AA11F] rounded-[15px] text-center space-y-5 px-6 p-5 ">
                            <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-white">Ready to Join the Innovation ?</p>
                            <p className="inter-medium text-[16px] text-white text-justify md:text-center max-w-[1000px] mx-auto">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start">
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-white' /><p className="namdhinggo-extrabold text-[20px] text-white">Beijing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-white ' /><p className="namdhinggo-extrabold text-[20px] text-white">28th to 30th Sep, 2025</p></div>
                                <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-white ' /><p className="namdhinggo-extrabold text-[20px] text-white">9:00 AM – 5:00 PM</p></div>
                            </div>
                            <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex   justify-center ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-white text-[#2AA11F]   lg:py-1 py-2  rounded-lg transition-all duration-300 ">
                                        Register Now <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Datesandbank