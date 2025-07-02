import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';


function About() {


    const Goal = [
        {
            topic: "Foster Interdisciplinary Research",
            content: "We encourage collaborative research that spans computing, psychology, engineering, and design, enabling diverse perspectives to tackle challenges in HCI and drive innovative solutions for real-world problems through integrated thinking.",
        },
        {
            topic: "Bridge Academia and Industry",
            content: "The conference provides a dynamic platform for connecting academic researchers with industry leaders, enabling the translation of theoretical insights into practical applications that shape future technologies and solve pressing human-computer interaction issues.",
        },

        {
            topic: "Advance Human-Centered Design",
            content: "We prioritize research that focuses on user needs, emotions, and behaviors, aiming to create intuitive, accessible, and meaningful digital experiences that are effective across various demographics, cultures, and usage contexts.",
        },
        {
            topic: "Promote Inclusive Technology",
            content: "This conference emphasizes designing digital systems that are accessible and equitable for all users, including marginalized communities and individuals with disabilities, ensuring broader participation and technological empowerment through inclusive innovation.",
        },
        {
            topic: "Encourage Ethical Innovation",
            content: "We promote the responsible development of technologies, addressing concerns like bias, privacy, security, and sustainability to ensure HCI solutions remain fair, transparent, and aligned with human values and societal needs.",
        },
        {
            topic: "Enhance User Experience Globally",
            content: "Our goal is to explore culturally responsive and context-aware approaches to interaction design, ensuring technologies provide a satisfying, relevant, and impactful experience for users across the globe.",
        },
    ]


    return (
        <div>
            <div className="lg:h-90 h-70  relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">About Us</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>About Us</h2>
                    </div>
                </div>
            </div>

            <div className="bg-[#E2EFE1] py-15 px-4">
                <div className="max-w-[1500px] mx-auto bg-white  rounded-xl p-6 ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center  mt-5">About Our Conference</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2  lg:mt-7 mt-5 2xl:gap-15 xl:gap-10 lg:gap-10 gap-5 place-items-center max-w-[1400px] mx-auto mb-5">
                        <div className="max-w-[600px] w-fit  " ><img src="/images/aboutus.jpg" alt="image3" className="border-6 border-[#2AA11F] rounded-[15px]" loading="lazy" /></div>

                        <div className=" space-y-5">
                            <p className=" text-[16px] leading-[30px] text-justify"><span className="inter-bold ">The International Conference on Human-Computer Interaction and Emerging Technologies</span> <span className="inter-regular opacity-85">is a global platform for innovation and collaboration. It brings together researchers, industry experts, and academicians to explore how technology impacts human interaction. The conference focuses on emerging trends in HCI, user experience, and digital transformation. It promotes the exchange of ideas, collaborative research, and practical solutions. </span></p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The conference encourages interdisciplinary collaboration across fields such as computer science, design, psychology, and artificial intelligence. It supports knowledge sharing and integrated approaches to solve real-world challenges in HCI. By uniting diverse perspectives, we promote inclusive, accessible, and adaptive digital solutions.</p>
                            <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">Through keynote talks, peer-reviewed papers, panels, and workshops, the conference ensures high-quality content and global engagement. Attendees connect with experts, institutions, and industry leaders to exchange impactful ideas. Each session is designed to inspire progress and practical application. We are committed to shaping a future where technology meets human needs effectively. </p>

                        </div>

                    </div>
                </div>
            </div>


            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 mt-10 overflow-hidden">
                <div className="   ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center  ">Our Goal</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 mt-10 h-full mb-10">
                        {Goal.map((item, index) => {
                          
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

            <div className="pb-15  max-w-[1400px] mx-auto mt-10 px-4 2xl:px-0">
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

export default About