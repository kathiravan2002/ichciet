import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaDatabase, FaHandPointRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoArrowRedoSharp, IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function Conferencetracks() {


    const data = [
        {
            icon: <FaDatabase />,
            title: "Human-Computer Interaction Design",
            content: "Focuses on improving how users interact with digital systems through user-centered design, interaction models, usability techniques, and interface development that support intuitive, efficient, and engaging human-computer experiences."
        },
        {
            icon: <FaDatabase />,
            title: "User Experience (UX) and Usability",
            content: "Explores design strategies that enhance usability, accessibility, and emotional impact of digital products. Emphasizes user research, prototyping, and testing to ensure systems are effective, efficient, and satisfying for all users."
        },
        {
            icon: <FaDatabase />,
            title: "Artificial Intelligence and Intelligent Interfaces",
            content: "Examines AI-powered systems that personalize and adapt interactions. Covers natural language processing, intelligent agents, recommendation engines, and predictive interfaces that enhance decision-making and user support in digital environments."
        },
        {
            icon: <FaDatabase />,
            title: "Virtual, Augmented, and Mixed Reality",
            content: "Showcases immersive technologies that merge physical and digital worlds. Includes VR, AR, and XR research applied to education, training, healthcare, and entertainment through spatial computing and sensory interaction."
        },
        {
            icon: <FaDatabase />,
            title: "Ubiquitous and Wearable Computing",
            content: "Focuses on computing beyond the desktop. Explores smartwatches, sensors, and ambient interfaces that support context-aware interaction and real-time feedback in healthcare, fitness, smart homes, and mobile environments."
        },
        {
            icon: <FaDatabase />,
            title: "Assistive and Inclusive Technologies",
            content: "Highlights technologies designed for users with disabilities. Emphasizes accessibility, universal design, and assistive interfaces that promote digital equity and inclusion across diverse abilities and user groups."
        },
        {
            icon: <FaDatabase />,
            title: "Ethics, Privacy, and Trust in Technology",
            content: "Addresses responsible design of digital systems by examining data privacy, algorithmic bias, transparency, and trust. Encourages ethical frameworks for building fair, accountable, and secure interactive technologies."
        },
        {
            icon: <FaDatabase />,
            title: "Multimodal and Natural Interaction",
            content: "Investigates interfaces that combine voice, gesture, touch, and gaze for more natural communication. Supports adaptive, hands-free, and immersive interaction experiences across various devices and environments."
        },
    ]
    return (
        <div>

            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Conference Tracks</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Conference Tracks</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold  text-[#2AA11F] text-center lg:mt-15 mt-10">Conference Tracks</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The conference tracks of<span className="inter-bold ">the International Conference on Human-Computer Interaction and Emerging Technologies</span>are carefully designed to reflect the latest advancements and interdisciplinary trends in the field. Each track offers a focused platform for researchers, practitioners, and industry experts to present original work, share insights, and engage in meaningful discussions on specific domains such as user experience, artificial intelligence, virtual reality, assistive technologies, and more. By organizing the program into thematic tracks, the conference ensures structured knowledge exchange and encourages collaboration across diverse areas of human-centered computing and emerging digital innovations.</p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 mt-10 overflow-hidden">
                <div className="   ">
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mt-10 h-full mb-10">
                        {data.map((item, index) => {
                          
                            return (
                                <div key={index}  className="">
                                    <div className=" rounded-[15px]  h-full  bg-[#f0f5f0] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                        <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-white bg-[#2AA11F] rounded-t-[15px] py-2 text-center">
                                            {item.title}
                                        </h2>
                                        <div className="flex gap-3 mt-2 text-justify py-2 px-4">
                                            <img
                                                src="/images/Pain Point.png"
                                                alt="img"
                                                className="scale-x-[-1] w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] mt-3"
                                            />
                                            <p className="inter-regular opacity-85 text-[16px] leading-[30px]">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
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

export default Conferencetracks