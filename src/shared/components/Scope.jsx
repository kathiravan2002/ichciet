import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Scope() {

    const Scope = [
        {
            topic: "Human-Computer Interaction",
            content: "Focuses on improving how humans interact with digital systems by developing intuitive interfaces, enhancing usability, and studying behavioral patterns that inform interactive technology across various devices, platforms, and environments.",
        },
        {
            topic: "User Experience (UX) Design",
            content: "Explores how users perceive, feel, and engage with technology through structured design methods, usability testing, and accessibility practices to create seamless, efficient, and enjoyable digital experiences for all user types.",
        },

        {
            topic: "Artificial Intelligence in Interaction",
            content: "Investigates AI-powered systems that adapt interfaces based on user behavior, including natural language processing, personalization algorithms, and machine learning tools to enhance smart, predictive, and responsive human-computer interactions.",
        },
        {
            topic: "Virtual and Augmented Reality",
            content: "Examines immersive digital environments using VR/AR to transform education, simulation, healthcare, and entertainment through 3D spatial interaction, motion tracking, and real-time sensory feedback technologies.",
        },
        {
            topic: "Accessibility and Inclusive Design",
            content: "Promotes the creation of inclusive systems by addressing the needs of users with disabilities through assistive technologies, universal design principles, and equitable digital access across all platforms.",
        },
        {
            topic: "Ethics and Responsible Innovation",
            content: "Addresses issues like bias, privacy, transparency, and societal impact in emerging technologies, emphasizing responsible design and development aligned with human rights and ethical standards.",
        },
    ]

    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Our Scope</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Our Scope</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#E2EFE1] py-15 px-4">
                <div className="max-w-[1500px] mx-auto bg-white  rounded-xl p-6 ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center  mt-5">Scope Of Our Conference</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center max-w-[1400px] mx-auto mb-5">
                        <div className="max-w-[600px] w-fit  " ><img src="/images/scope.jpg" alt="image3" className="border-6 border-[#2AA11F] rounded-[15px]" loading="lazy" /></div>

                        <div className=" space-y-5">
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The scope of this conference spans a broad and interdisciplinary field that examines how humans interact with digital systems and intelligent technologies. We aim to explore the latest advances in user experience design, interaction paradigms, and emerging tools that shape the future of human-computer interfaces. From theoretical models to practical applications, the conference welcomes a diverse range of contributions that reflect evolving human needs and technological possibilities.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">This platform invites researchers, developers, designers, and policymakers to present work across key domains such as artificial intelligence, augmented and virtual reality, accessibility, wearable computing, and affective computing. Emphasis is placed on human-centered innovation, usability, and responsible design practices. </p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">By encouraging interdisciplinary dialogue, the conference fosters knowledge sharing across academic, industry, and government sectors. We support both foundational research and experimental systems that improve how people engage with intelligent technologies in education, healthcare, business, communication, and daily life. This broad scope ensures relevance and impact across disciplines and industries.</p>

                        </div>

                    </div>
                </div>
            </div>


            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 mt-10 overflow-hidden">
                <div className="   ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center  ">Key Areas Of Focus</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mt-10 h-full mb-10">
                        {Scope.map((item, index) => {
                          
                            return (
                                <div key={index}  className="">
                                    <div className=" rounded-[15px]  h-full  bg-[#f0f5f0] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                        <h2 className="lg:text-[24px] text-[20px] namdhinggo-extrabold text-white bg-[#2AA11F] rounded-t-[15px] py-2 text-center">
                                            {item.topic}
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

export default Scope