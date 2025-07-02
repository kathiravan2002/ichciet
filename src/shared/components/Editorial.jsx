import React from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Editorial() {


    const Scope = [

        {
            topic: "Chief Editor – Strategic Editorial Oversight",
            content: "Leads the editorial team by setting review standards, coordinating publication schedules, and ensuring that all accepted papers meet the academic and ethical criteria of the conference proceedings.",
        },
        {
            topic: "Section Editors – Thematic Paper Supervision",
            content: "Oversee specific thematic areas or tracks of the conference. Manage reviewers, ensure timely evaluations, and make recommendations based on the quality, relevance, and originality of submitted research.",
        },
        {
            topic: "Review Editors – Peer Review Coordination",
            content: "Conduct rigorous, double-blind reviews of submitted manuscripts. Evaluate methodology, clarity, and contribution to the field, offering constructive feedback to improve the overall quality of academic content.",
        },
        {
            topic: "Proceedings Editor – Publication and Formatting",
            content: "Responsible for compiling, editing, and formatting the final versions of accepted papers. Ensures consistency, citation accuracy, and compliance with publication standards and indexing requirements.",
        },
        {
            topic: "Ethics and Compliance Advisor – Research Integrity Monitoring",
            content: "Monitors adherence to academic ethics, including plagiarism prevention and conflict of interest disclosures. Ensures all published work aligns with accepted scholarly and ethical practices.",
        },

    ]


    const editorial = [
        {
            name: "Guman Singh Chauhan",
            university: "Indian Institute of Management Bangalore",
            expertise: " John Tesla Inc",
            country: " Dallas,USA"
        },

        {
            name: "Rahul Jadon",
            university: "Indian Institute of Management Bangalore",
            expertise: " CarGurus Inc",
            country: " Massachusetts,USA"
        },
        {
            name: "Sreekar Peddi",
            university: "Indian Institute of Management Bangalore",
            expertise: "Tek Leaders",
            country: " Texas, USA"
        },
        // {
        //     name: "Pramod Begur Nagaraj",
        //     university: "Indian Institute of Management Bangalore",
        //     expertise: " Onapsis",
        //     country: " Texas,USA"
        // },


    ]
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-75 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Editorial Board</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Editorial Board</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center lg:mt-15 mt-10">Editorial Board </h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The Editorial Board of <span className="inter-bold ">the International Conference on Human-Computer Interaction and Emerging Technologies </span> <span className="inter-regular opacity-85"> comprises leading researchers and domain experts committed to maintaining the academic quality of the event. They oversee the peer review process, ensure the relevance and originality of submissions, and guide the selection of high-impact research for presentation and publication. Through their expertise and editorial oversight, the board upholds scholarly standards while fostering innovation and knowledge exchange in the fields of human-computer interaction and emerging technologies.</span></p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 2xl:px-0 mt-10 overflow-hidden">
                <div className="   ">
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center  ">Editorial Board Roles and Responsibilities</h2>
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

             <div className=" mt-15">
                <div className="bg-[#E2EFE1]" >
                    <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center pt-10">Meet Our Editorial Board Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-10 xl:gap-10 lg:gap-10 gap-5 lg:mt-7 mt-5 place-items-center max-w-[1400px] mx-auto ">
                        {editorial.map((item, index) => (
                            <div key={index} className=" ">
                                <div className="">
                                    <div className="flex  justify-center ">
                                        <img src="/images/cnhuman13.png" alt="image" className="  w-[350px]  " loading='lazy' />
                                    </div>
                                    <div className=" flex flex-col justify-center items-center text-white bg-[#2AA11F] rounded-[10px]    py-2 mb-10">
                                <p className="namdhinggo-extrabold text-[24px]">{item.name}</p>
                                <div className="flex justify-center gap-2">   <MdOutlineWorkOutline className='text-[24px] text-white mt-1' /><p className="text-[20px] namdhinggo-medium">{item.expertise}</p></div>
                                <div className="flex justify-center gap-2">  <IoLocationSharp className='text-[24px] text-white mt-1' /><p className="text-[20px] namdhinggo-medium">{item.country}</p></div>
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
            </div>



        </div>
    )
}

export default Editorial