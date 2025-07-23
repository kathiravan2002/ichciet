import React, { useState } from 'react'
import { BsFillClockFill } from 'react-icons/bs';
import { FaCalendar, FaHandPointRight } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiPhoneCall, FiUploadCloud } from 'react-icons/fi'
import { GoArrowRight } from 'react-icons/go'
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Upload, FileText, Users, Mail, Building, CheckCircle, AlertCircle, Send } from 'lucide-react';

function Papersubmission() {

    const [fileName, setFileName] = useState('Choose Your File');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const response = await fetch('http://192.168.29.71/ichciet/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                // document.getElementById('Paper_File').value = '';
                toast.success("Paper submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    const submissionGuidelines = [
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Paper Title",
            description: "Provide a clear, concise title representing your research paper accurately.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Author Information",
            description: "Enter the full name of the first author as written.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Contact Details",
            description: "Provide a working email address for future updates and communication.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Building className="w-5 h-5" />,
            title: "Institution",
            description: "Mention the institution the first author is currently affiliated with.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Upload className="w-5 h-5" />,
            title: "File Upload",
            description: "Upload your paper in PDF or DOC format, under 5MB.",
            color: "from-indigo-500 to-purple-500"
        }
    ];

    const importantNotes = [
        {
            icon: <CheckCircle className="w-5 h-5 text-emerald-500" />,
            text: "Submitted papers must be original and not published elsewhere previously."
        },
        {
            icon: <AlertCircle className="w-5 h-5 text-red-500" />,
            text: "Plagiarism will lead to immediate rejection without any exceptions."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-blue-500" />,
            text: "Follow all formatting and submission guidelines strictly for consideration."
        },
        {
            icon: <Users className="w-5 h-5 text-purple-500" />,
            text: "At least one author must register and present the paper."
        },
        {
            icon: <FileText className="w-5 h-5 text-orange-500" />,
            text: "Camera-ready papers must incorporate all reviewer feedback and corrections."
        },
        {
            icon: <CheckCircle className="w-5 h-5 text-green-500" />,
            text: "Certificates issued only to authors who register and present."
        }
    ];
    return (
        <div>
            <div className="lg:h-90 h-70   relative bg-cover bg-center " style={{ backgroundImage: "url('/images/allhero1.jpg')" }}>
                <div className="absolute inset-0 bg-[#000000] opacity-65 lg:h-90 h-70 "></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-2">
                    <h2 className="text-[24px] md:text-[36px] lg:text-[45px] namdhinggo-medium text-white lg:mt-10 mt-15">Paper Submission</h2>
                    <h2 className="lg:text-[28px] md:text-[20px] text-[18px] text-center namdhinggo-medium text-white  ">International Conference on Human-Computer Interaction and Emerging Technologies</h2>
                    <div className="flex space-x-2 ">
                        <Link to='/'>
                            <h2 className="md:text-[24px] text-[20px] namdhinggo-medium text-white hover:text-[#2AA11F] duration-300 ">Home</h2>
                        </Link>
                        <h2 className="md:text-[24px] text-[20px] namdhinggo-medium  text-[#2AA11F] "><span className="text-white">/ </span>Paper Submission</h2>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="2xl:text-[32px] xl:text-[28px] lg:text-[28px] text-[28px] namdhinggo-extrabold text-[#2AA11F] text-center lg:mt-15 mt-10">Paper Submission</h2>
            </div>


            <div className=" max-w-[1400px] mx-auto px-4 2xl:px-0  mt-5 ">
                <div className="space-y-4">
                    <p className=" text-[16px] leading-[30px] text-justify inter-regular opacity-85">The International Conference on Advanced Business and Digital Transformation invites original research papers, case studies, and innovative insights that align with the conference’s core themes. Authors are encouraged to submit high-quality, unpublished work that contributes to the advancement of business strategies and digital transformation. All submissions will undergo a rigorous peer-review process to ensure academic integrity and relevance. Accepted papers will be published in the conference proceedings and considered for journal publication. We look forward to your valuable contributions.</p>
                </div>
            </div>

            <div className="grid grid-cols-1  gap-8 max-w-[1000px] mx-auto lg:mt-15 mt-10 ">


                {/* Form Section */}

                <div className="">
                    <div className="bg-white rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-[#2AA11F] to-[#197411] p-8 text-white text-center">
                            <h2 className="text-3xl poppins-bold mb-2">Submit Your Paper</h2>
                            <p className="text-indigo-100 poppins-medium ">Fill out the form below to submit your research paper</p>
                        </div>

                        <form onSubmit={handleSubmit}  >
                            <div className="p-8 space-y-6">
                                {/* Paper Title */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Paper Title</label>
                                    <div className="relative">
                                        <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                        <input
                                            type="text"
                                            name="Paper_Title"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 poppins-medium  border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300  placeholder-gray-500"
                                            placeholder="Enter your paper title"
                                            required
                                            value={formData.Paper_Title}
                                            onChange={handleFileInputChange}
                                        />
                                    </div>
                                </div>

                                {/* Institution Name */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Institution Name</label>
                                    <div className="relative">
                                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                        <input
                                            type="text"
                                            name="Institution_Name"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                            placeholder="Enter your institution name"
                                            required
                                            value={formData.Institution_Name}
                                            onChange={handleFileInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Author Name */}
                                    <div className="space-y-2">
                                        <label className="block text-sm poppins-semibold text-gray-700">Author's Full Name</label>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2AA11F] w-5 h-5" />
                                            <input
                                                type="text"
                                                name="Author_FUll_Name"
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50 poppins-medium  border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                                placeholder="Enter author's full name"
                                                required
                                                value={formData.Author_FUll_Name}
                                                onChange={handleFileInputChange}
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
                                                name="Email_Address"
                                                className="w-full pl-12 pr-4 py-4 bg-gray-50  poppins-medium border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800 placeholder-gray-500"
                                                placeholder="Enter author's email"
                                                required
                                                value={formData.Email_Address}
                                                onChange={handleFileInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Paper Track */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Paper Category</label>
                                    <select
                                        name="Paper_Track"
                                        className="w-full px-4 py-4 bg-gray-50 poppins-medium border-2 border-[#2AA11F] rounded-2xl focus:border-[#2AA11F] focus:outline-none focus:bg-white transition-all duration-300 text-gray-800"
                                        required
                                        value={formData.Paper_Track}
                                        onChange={handleFileInputChange}
                                    >
                                        <option value="">Select Your Category</option>
                                        <option value="AI">Artificial Intelligence</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="HCI">Human-Computer Interaction</option>
                                        <option value="Security">Cybersecurity</option>
                                        <option value="IoT">Internet of Things</option>
                                    </select>
                                </div>

                                {/* File Upload */}
                                <div className="space-y-2">
                                    <label className="block text-sm poppins-semibold text-gray-700">Upload Paper</label>
                                    <div className="relative">
                                        <div className="border-2 border-dashed border-[#2AA11F] rounded-2xl p-8 text-center hover:border-[#2AA11F]  focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-[#e8ffe6] group cursor-pointer">
                                            <input
                                                name="Paper_File"
                                                accept=".pdf,.doc,.docx"
                                                type="file"
                                                onChange={handleFileInputChange}
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                            />
                                            <div className="space-y-4">
                                                <div className="w-16 h-16 mx-auto bg-[#2AA11F] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Upload className="w-8 h-8 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                        {fileName || "Click to Upload Paper"}
                                                    </p>
                                                    <p className="text-sm poppins-medium  text-gray-500">
                                                        PDF, DOC, or DOCX files only (Max 5MB)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="namdhinggo-extrabold text-[20px] flex justify-center items-center col-span-1 sm:col-span-2 md:col-span-2">
                                    <button className="cursor-pointer text-white px-4 bg-[#2AA11F] p-2 rounded-lg  ">
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}

                                    </button>
                                </div>
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
                                <div className="flex gap-3"><IoLocationSharp className='text-[26px] text-white' /><p className="namdhinggo-extrabold text-[20px] text-white">Riyadh, Saudi Arabia</p></div>
                                <div className="flex gap-3"><FaCalendar className='text-[24px] text-white ' /><p className="namdhinggo-extrabold text-[20px] text-white">September 29, 2025</p></div>
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

export default Papersubmission