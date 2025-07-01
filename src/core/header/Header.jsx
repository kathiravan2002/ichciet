import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavItems from './NavItems';
import { FaChevronDown } from 'react-icons/fa';
import { RiMenuFoldLine } from 'react-icons/ri';


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const [scroll, setScroll] = useState(false);
    const dropdown1Ref = useRef(null);
    const dropdown2Ref = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
        setMenuOpen(!MenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (dropdown1Ref.current && !dropdown1Ref.current.contains(event.target)) {
                setDropdown1(false);
            }

            if (dropdown2Ref.current && !dropdown2Ref.current.contains(event.target)) {
                setDropdown2(false);
            }

        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        console.log();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const about = [
        { name: "About the Conference", path: "/about" },
        { name: "Scope of Conference", path: "/scope" },
        { name: "Organizing Committee", path: "/organize" },
        { name: "Editorial Board", path: "/editorial" },

    ];
    const author = [
        { name: "Conference Tracks", path: "/conference-tracks" },
        { name: "Key Dates", path: "/key-dates" },
        { name: "Paper Submission", path: "/paper-submission" },

    ];
    return (
        <div className='flex justify-center'>
            <div className={` fixed top-0 w-full   rounded-br-[10px] rounded-bl-[10px] z-50  duration-300 ${scroll ? 'bg-white shadow-lg  ':'  py-5 '} `}>
                <div className='flex justify-between  items-center py-5 px-10 md:px-7 lg:px-7 xl:px-7 2xl:px-0  relative w-full max-w-[1400px] mx-auto'>
                    <Link to="/">
                        <div >
                            <img src="/images/ICHCIET.png" alt="logo" className="md:w-55 w-45" />
                            {/* <p className="namdhinggo-extrabold text-4xl text-[#2AA11F]">ICHCIET</p> */}
                        </div>
                    </Link>
                    <div className="hidden md:block ">
                        <ul className="flex lg:gap-10 gap-5 poppins-medium lg:text-xl md:text-lg  text-[#2AA11F]">
                            <li className="">
                                <Link to='/' className={` ${isActive == '/' ? 'text-[#2AA11F] ' : '  '}`}>Home</Link>
                            </li>
                            <li ref={dropdown1Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown1(!dropdown1)} className={`flex items-center gap-1  ${about.some(link => location.pathname === link.path) ? 'text-[#2AA11F]' : ''}`} >
                                About Us
                                <FaChevronDown className={`${dropdown1 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown1 &&
                                    <div className={`absolute  border border-[#2AA11F] mt-2 rounded-lg  ${scroll ? ' bg-white' : 'bg-[#FFFFFF] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {about.map((link, index) => {
                                                const isActive = location.pathname === link.path;

                                                return (
                                                    <Link key={index} onClick={() => setDropdown1(!dropdown1)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? 'text-[#2AA11F]  ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                );
                                            })}
                                        </ul>
                                    </div>}
                            </li>
                            <li ref={dropdown2Ref} className="cursor-pointer relative"><Link onClick={() => setDropdown2(!dropdown2)} className={`flex items-center gap-1  ${author.some(link => location.pathname === link.path) ? 'text-[#2AA11F]' : '   '}`}>Author’s Desk<FaChevronDown className={`${dropdown2 ? 'rotate-180' : 'rotate-0'} duration-200 text-xs `} /> </Link>
                                {dropdown2 &&
                                    <div className={`absolute  border border-[#2AA11F] mt-2  rounded-lg    ${scroll ? ' bg-white' : 'bg-[#FFFFFF] opacity-100'}`}>
                                        <ul className="p-2 text-[16px] max-w-none w-full whitespace-nowrap ">
                                            {author.map((link, index) => {
                                                const isActive = location.pathname === link.path;
                                                return (
                                                    <Link key={index} onClick={() => setDropdown2(!dropdown2)} to={link.path} className="!w-full" >
                                                        <li className={`px-4 py-1.5 rounded-md transition cursor-pointer ${isActive ? 'text-[#2AA11F]  ' : ''}`} >{link.name} </li>
                                                    </Link>
                                                )
                                            })}
                                        </ul>
                                    </div>}
                            </li>


                            <li >
                                <Link to='/contact-us' className={` ${isActive == '/contact-us' ? ' text-[#2AA11F]' : ' '}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        onClick={ToggleMenu}
                        className={`${scroll ? "" : ""
                            } text-[#2AA11F]  inline-flex align-middle cursor-pointer items-center duration-300  select-none md:hidden `}
                    >
                        {" "}

                        < RiMenuFoldLine
                            className={`${scroll ? " " : ""}   text-3xl  cursor-pointer duration-300  `}
                        />

                    </div>

                </div>
                <div className="md:hidden">
                    <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive} dropdown1Ref={dropdown1Ref} setDropdown1={setDropdown1} dropdown1={dropdown1} />
                    {MenuOpen && (
                        <div
                            onClick={() => setMenuOpen(false)}
                            className="h-screen w-full bg-black/40 absolute top-0 "
                        ></div>

                    )}
                </div>
            </div>

        </div>
    )
}

export default Header