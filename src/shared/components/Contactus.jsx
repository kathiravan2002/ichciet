import React, { useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FaArrowRightLong } from 'react-icons/fa6';
import {  FileText,  Mail, Building,  Phone } from 'lucide-react';


function Contactus() {

    const [formData, setFormData] = useState({
        firstname: '',
        secondname: '',
        number: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleFileInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            const response = await fetch('http://192.168.29.71/ichciet/contactus.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();
            setStatus(result);

            if (response.ok) {
                toast.success("Message submitted successfully!");
                setFormData({
                    firstname: '',
                    secondname: '',
                    number: '',
                    email: '',
                    message: '',
                });
            } else {
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Contact Us</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Contact Us</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center lg:mt-15 mt-10">Contact Us</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">For any inquiries related to the International Conference on Human-Computer Interaction and Emerging Technologies, our team is here to assist you. Whether you have questions about paper submissions, registration, sponsorship, or general event details, feel free to reach out. We are committed to providing timely and helpful responses to ensure a smooth and informative experience for all participants.</p>
                </div>
            </div>
            <div className=" px-4 max-w-[1400px] mx-auto lg:mt-15 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px]">
                        <div className="  flex justify-center items-center">
                            <IoLocationSharp className="text-[#2AA11F] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#2AA11F] namdhinggo-extrabold lg:text-2xl text-xl">Location</h2>
                            <a href="" >
                                <p className="inter-medium text-base  opacity-85">
                                    Beijing, China
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px]">
                        <div className="flex justify-center items-center">
                            <FiPhoneCall className="text-[#2AA11F] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#2AA11F] namdhinggo-extrabold lg:text-2xl text-xl">Phone</h2>
                            <Link to="">
                                <p className="inter-medium text-base opacity-85">
                                    +91 8870212121
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-5 px-4 py-5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[25px] ">
                        <div className=" flex justify-center items-center">
                            <MdEmail className="text-[#2AA11F] text-[45px]" />
                        </div>
                        <div className="space-y-3 flex flex-col justify-center ">
                            <h2 className="text-[#2AA11F] namdhinggo-extrabold lg:text-2xl text-xl">Email</h2>
                            <Link to="" >
                                <p className="inter-medium text-base opacity-85 ">
                                    ichciet.conference@gmail.com
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex lg:flex-row flex-col-reverse max-w-[1400px] mx-auto px-4 2xl:px-0  mt-10">
               
                <div className=" flex-50   ">
                    <div className='bg-[#2AA11F]  lg:rounded-tr-[25px] lg:rounded-br-[25px] rounded-tr-[25px] rounded-br-[0px] lg:rounded-tl-[0px] lg:rounded-bl-[0px]  rounded-tl-[25px] rounded-bl-[0px]'>


                        <div className="max-w-[40rem]  mx-auto py-10 lg:px-10 px-6  flex flex-col   ">

                            <div className='space-y-5 '>
                                <p className="namdhinggo-extrabold text-[24px] text-white text-center mt-3">If you have any questions, please contact us!</p>
                            </div>


                            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 2xl:mt-10 xl:mt-5 lg:mt-10 mt-10 " >
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#2AA11F] border border-gray-200"
                                        placeholder="Enter Your First Name"
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="secondname"
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#2AA11F] border border-gray-200"
                                        placeholder="Enter Your Last Name "
                                        value={formData.secondname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <input
                                        type="email"
                                        name="email"
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#2AA11F] border border-gray-200"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleFileInputChange}

                                        required
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <input
                                        type="tel"
                                        name="number"
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px] focus:ring-2 focus:outline-none focus:ring-[#2AA11F] border border-gray-200"
                                        placeholder="Enter Your Phone Number"
                                        value={formData.number}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>

                                <div className="col-span-1 sm:col-span-2 md:col-span-2 flex flex-col">
                                    <textarea
                                        name="message"
                                        placeholder="Enter Message"
                                        rows="6"
                                        className="px-5 py-3 bg-gray-50 poppins-medium rounded-[10px]  focus:ring-2 focus:outline-none focus:ring-[#2AA11F] border border-gray-200 resize-y"
                                        value={formData.message}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                                <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                    <button className="cursor-pointer flex gap-4 px-4 bg-white hover:scale-95 hover:border-4 hover:border-[#2AA11F] border-white  border-4  text-[#2AA11F] p-2 rounded-lg transition-all duration-300 ">
                                        {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-1  gap-8 max-w-[1000px] mx-auto lg:mt-15 mt-10 ">


                {/* Form Section */}
                <div className="">
                    <div className="bg-white rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-[#2AA11F] to-[#197411] p-8 text-white text-center">
                            <p className="text-white poppins-medium text-[20px]">If you have any questions, please contact us!</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Paper Title */}
                            <div className="space-y-2">
                                <label className="block text-sm poppins-semibold text-gray-700">First Name</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 poppins-medium  border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300  placeholder-gray-500"
                                        placeholder="Enter Your First Name"
                                        value={formData.firstname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Institution Name */}
                            <div className="space-y-2">
                                <label className="block text-sm poppins-semibold text-gray-700">Second Name</label>
                                <div className="relative">
                                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                    <input
                                        type="text"
                                        name="secondname"
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                        placeholder="Enter Your Last Name "
                                        value={formData.secondname}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Author Name */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Phone number</label>
                                    <div className="relative">
                                        <Phone  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="number"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter Your Phone Number"
                                            value={formData.number}
                                            onChange={handleFileInputChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50  poppins-medium border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter Your Email"
                                            value={formData.email}
                                            onChange={handleFileInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            

                            {/* File Upload */}
                          
                            <div className="space-y-2 ">
                                <label className="block text-sm poppins-semibold text-gray-700">Enter Message</label>
                                <div className="relative ">
                                    <textarea 
                                    className="border-2  border-dashed border-[#2AA11F] poppins-medium rounded-2xl p-8  w-full  hover:border-[#2AA11F]  focus:outline-none transition-all duration-300 bg-gray-50  group cursor-pointer"
                                       
                                        name="message"
                                        placeholder="Enter Your Message"
                                        rows="6"
                                       
                                        value={formData.message}
                                        onChange={handleFileInputChange}
                                        required
                                    />
                                   
                               
                            </div>
                            </div>

                            {/* Submit Button */}
                            <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                <button className="cursor-pointer text-white px-4 bg-[#2AA11F] p-2 rounded-lg  ">
                                   {status === 'Sending...' ? 'Submitting...' : 'Send Message'}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="pb-15  max-w-[1400px] mx-auto mt-15 px-4 2xl:px-0">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center">Join Us at ICHCIET 2025</h2>
                <p className="md:text-[18px] text-[16px]  inter-semibold lg:text-center mt-5  opacity-85 text-justify">Experience groundbreaking research presentations and network with industry leaders</p>

                <div className="lg:mt-15 mt-10 flex items-center relative ">
                    <div className="max-w-[400px] hidden lg:block"><img src="/images/register.jpg" alt="registerpage" className=" rounded-[15px] border-6 border-[#2AA11F]" /></div>
                    <div className=" relative lg:right-22 "  >                            <div className=" bg-[#2AA11F] rounded-[15px] text-center space-y-5 px-6 p-5  py-5">                                    <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-white">Ready to Join the Innovation ?</p>
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

export default Contactus