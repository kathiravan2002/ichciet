import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BsCalendar4Range, BsFillClockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';


function Home() {

    const gridItems = [

        {
            Date: "July 20,2025",
            Title: "Paper Submission Deadline  Final Extension"
        },
        {
            Date: "August 20,2025",
            Title: "Author Acceptance Notification Description"
        },
        {
            Date: "September 10,2025",
            Title: "Final Manuscript Submission Guidelines"
        },

    ]




    const speaker = [
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },
        {
            name: "A.Aravind Kumar ME.Phd",
            position: "Research Analayst"
        },


    ]



    return (
        <div >
            <div className="relative  2xl:h-screen bg-cover bg-center " style={{ backgroundImage: "url('/images/herohome.jpg')" }}>

                <div className="absolute inset-0 bg-[#000000] opacity-80"></div>
                <div className="flex 2xl:gap-15 gap-5 lg:flex-row flex-col-reverse justify-start items-center h-full max-w-[1400px] mx-auto py-20 2xl:pt-20 xl:pt-35 lg:pt-35 md:pt-40 pt-35 ">
                    <div className="flex-[50] relative z-10  flex flex-col 2xl:space-y-8 xl:space-y-5 lg:space-y-5 space-y-5 justify-center  max-w-[900px] px-5 md:px-10 lg:px-5   ">
                        <div className="flex md:flex-row flex-row md:justify-between justify-between items-center gap-5 lg:gap-0 max-w-[500px]">
                            <div className="flex  gap-4 "><BsCalendar4Range className='text-[#2AA11F] flex shrink-0 text-[20px] md:text-[28px] mt-0.5' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[18px]">Sep 28-30, 2025</h2></div>
                            <div className="flex  gap-3 "><IoLocationSharp className='text-[#2AA11F] flex shrink-0 text-[20px] md:text-[28px] mt-0.5' /> <h2 className="text-white namdhinggo-extrabold md:text-[24px] text-[18px]">Beijing, China</h2></div>
                        </div>
                        <h1 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] md:text-[28px] text-[25px] namdhinggo-extrabold text-[#2AA11F] lg:text-start text-start">International Conference on Human-Computer Interaction and Emerging Technologies</h1>
                        <p className="text-[16px] md:text-[18px] leading-[30px] text-justify inter-regular text-white">The conference brings together researchers and experts to explore the intersection of human-centered design and emerging technologies. It provides a platform to share innovative research, practical solutions, and future trends in human-computer interaction.</p>

                        <Link to="/paper-submission">
                            <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex lg:justify-start  justify-center ">
                                <button className="cursor-pointer flex items-center gap-4 px-4   bg-[#2AA11F] text-white   lg:py-1 py-2 rounded-lg transition-all duration-300 ">
                                    Register Now <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                </button>
                            </div>
                        </Link>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-3 px-3  gap-0  border-4 border-[#2AA11F] rounded-xl  bg-white ">
                            {gridItems.map((item, index) => (
                                <div key={index} className={`py-2 px-5 flex flex-col items-center justify-center ${index !== 0 ? 'sm:border-l-4 sm:mt-4 sm:mb-4 mt-0 mb-0 border-[#2AA11F] ' : ''}`}>
                                    <div className="">
                                        <h2 className="namdhinggo-extrabold text-[#2AA11F] text-center  text-[20px]">{item.Date}</h2>
                                        <p className="namdhinggo-extrabold text-[#000000]  md:text-center text-center  text-[18px] sm:mt-5 md:mt-5 lg:mt-5 mt-2"> {item.Title}</p>

                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="relative max-w-[565px] px-4  ">
                        <img src="/images/herohome3.png" alt="img" className="" />
                    </div>
                </div>

            </div>

            <div className="bg-[#E2EFE1] py-15 px-4">
                <div className="max-w-[1500px] mx-auto bg-white  rounded-xl p-6">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center mt-5 ">About the Conference</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center max-w-[1400px] mx-auto">
                        <div className=" max-w-[600px] w-fit"><img src="/images/abouthome.jpg" alt="image3" className=" border-6 border-[#2AA11F] rounded-[15px]" loading="lazy" /></div>
                        <div className="">
                            <p className=" text-[16px] leading-[30px] text-justify"><span className="inter-bold ">The International Conference on Human-Computer Interaction and Emerging Technologies</span> <span className="inter-regular opacity-85">is a global platform dedicated to fostering innovation, research, and collaboration at the intersection of technology and human experience. Our goal is to bring together scholars, professionals, and industry leaders to exchange knowledge, showcase advancements, and inspire new ideas in the fields of HCI, user experience, and emerging digital technologies. Through high-quality sessions and interdisciplinary engagement, we aim to drive progress in designing more intuitive, accessible, and impactful technologies for the future.</span></p>
                            <div className="mt-5 space-y-3 text-justify">
                                <div className="">
                                    <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold"> Global Platform for Innovation</h2>
                                    <div className="flex gap-3 mt-2">
                                        <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " />
                                        <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Unites global experts to explore advancements in human-computer interaction and emerging technologies across academic and industrial domains.</p></div>
                                </div>
                                <div className="">
                                    <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Academic-Industry Bridge</h2>
                                    <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1] w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Strengthens collaboration between academia and industry to translate innovative research into impactful, real-world technological solutions.</p></div>
                                </div>
                                <div className="">
                                    <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Emerging Technology Focus</h2>
                                    <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1] w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px] ">Covers AI, AR/VR, wearable tech, and smart systems transforming how humans interact with digital environments and interfaces.</p></div>
                                </div>
                            </div>
                            <Link to="/about">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex justify-end  mt-5 ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4  text-[#2AA11F] bg-white  py-1  transition duration-300  ">
                                        Read More <FaArrowRightLong className=" mt-0.5 text-[25px] " />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 lg:mt-15 mt-10">
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center ">Our Mission</h2>
                <p className=" text-[16px] leading-[30px] text-justify mt-5 inter-regular opacity-85">Our mission is to advance the field of human-computer interaction through the promotion of innovative research and emerging technologies. We aim to foster collaboration among academia, industry, and professionals worldwide, encouraging the exchange of ideas that enhance usability, accessibility, and user experience. The conference is committed to showcasing cutting-edge developments that impact society and digital interaction. By connecting global thought leaders, we support meaningful dialogue and interdisciplinary growth, striving to shape a future where technology seamlessly integrates with human needs and values.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center">
                    <div className="max-w-[500px] w-fit lg:hidden block " ><img src="/images/scopehome.jpg" alt="image3" className=" border-6 border-[#2AA11F] rounded-[15px] " loading="lazy" /></div>

                    <div className="">
                        <div className="mt-5 space-y-3 text-justify">
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Human-Centered Design </h2>
                                <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Explores principles and practices that place users at the center of technology design, ensuring intuitive, accessible, and meaningful interactions across digital systems.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">User Experience (UX) and Usability </h2>
                                <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Focuses on improving system usability, satisfaction, and engagement through methods like user testing, behavior analysis, and interface evaluation.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Artificial Intelligence in HCI </h2>
                                <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Covers the integration of AI technologies such as machine learning, natural language processing, and adaptive interfaces to enhance user interaction and personalization.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Accessibility and Inclusive Design </h2>
                                <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Addresses the creation of systems that are usable by people with diverse abilities, promoting equal access through assistive technologies and inclusive UX principles.</p></div>
                            </div>
                            <div className="">
                                <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold">Cognitive and Affective Computing </h2>
                                <div className="flex gap-3 mt-2"> <img src="/images/Pain Point.png" alt="img" className="scale-x-[-1]  w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3 " /> <p className="inter-regular opacity-85 text-[16px] leading-[30px]">Explores how systems can sense, interpret, and respond to human emotions, cognition, and psychological states to enhance engagement and support.</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[600px] w-fit"><img src="/images/scopehome.jpg" alt="image3" className=" border-6 border-[#2AA11F] rounded-[15px]  hidden lg:block" loading="lazy" /></div>

                </div>
            </div>



            <div className=" mt-15">
                <div className="bg-[#E2EFE1]" >
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center pt-10">Our Featured Speakers</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 lg:mt-7 mt-5 place-items-center max-w-[1400px] mx-auto ">
                        {speaker.map((item, index) => (
                            <div key={index} className=" ">
                                <div className="">
                                    <div className="flex  justify-center ">
                                        <img src="/images/cnhuman13.png" alt="image" className="  w-[350px]  " loading='lazy' />
                                    </div>
                                    <div className=" flex flex-col justify-center items-center text-white bg-[#2AA11F] rounded-[10px]    py-7 mb-10">
                                        <p className="namdhinggo-extrabold  lg:text-[24px] text-[24px]   ">{item.name}</p>
                                        <p className="namdhinggo-medium  lg:text-[20px] text-[20px] ">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                
                {/* <div className="lg:mt-15 mt-10 flex items-center relative ">
                    <div className="max-w-[400px] hidden lg:block"><img src="/images/register.jpg" alt="registerpage" className=" rounded-[15px] border-6 border-[#2AA11F]" /></div>
                    <div className=" relative lg:right-22 "  >
                        <div className=" bg-white border-6 border-[#2AA11F] rounded-[15px] text-center space-y-5 px-6 p-5 ">
                            <p className="namdhinggo-extrabold 2xl:text-[32px] xl:text-[28px] lg:text-[24px] text-[20px] text-[#2AA11F]">Ready to Join the Innovation ?</p>
                            <p className="inter-medium text-[16px] text-text-[#2AA11F] text-justify md:text-center max-w-[1000px] mx-auto text-[#2AA11F]">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-0 space-y-5  justify-center items-start sm:items-center lg:items-start">
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-[#2AA11F]' /><p className="namdhinggo-extrabold text-[20px] text-[#2AA11F]">Beijing, China</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-[#2AA11F] ' /><p className="namdhinggo-extrabold text-[20px] text-[#2AA11F]">28th to 30th Sep, 2025</p></div>
                                <div className="flex gap-3"><BsFillClockFill className='text-[24px] text-[#2AA11F] ' /><p className="namdhinggo-extrabold text-[20px] text-[#2AA11F]">9:00 AM – 5:00 PM</p></div>
                            </div>
                            <Link to="/paper-submission">
                                <div className="namdhinggo-extrabold lg:text-[24px] text-[18px] flex   justify-center ">
                                    <button className="cursor-pointer flex items-center gap-4 px-4   bg-[#2AA11F] text-white   lg:py-1 py-2  rounded-lg transition-all duration-300 ">
                                        Register Now <FaArrowRightLong className=" mt-0.5 text-[25px]" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>


        </div>
    )
}

export default Home