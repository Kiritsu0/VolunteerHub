"use client";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosSearch, IoIosAddCircle } from "react-icons/io";
import { BiSolidBookContent } from "react-icons/bi";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdDarkMode, MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const [showDropdown, setDropdown] = useState(false);
    const [showEvent, setEvent] = useState(false)
    const pathname = usePathname();
  
    const dropdown = () => {
      setDropdown(!showDropdown);
    };
  
    const eventDropdown = () => {
      setEvent(!showEvent);
    };
  
    const signout = () => {
      console.log("signout function called");
      signOut();
    };
  
    const { data: session } = useSession();

    return (
        <header className="flex justify-between items-center w-screen min-h-14">
            <h1 className="font-medium ml-4 text-2xl hidden sm:block sm:text-2xl md:text-3xl lg:text-4xl">
            Volunteer<span className="font-bold text-green-600">Hub</span>
            </h1>

            <div className="flex bg-slate-200 gap-3 p-2 rounded-full w-1/3 ml-4 sm:ml-0">
            <IoIosSearch className="text-2xl" />
            <input
                placeholder="Search"
                className="bg-slate-200 outline-none w-full"
            />
            </div>

            <div className="flex items-center gap-5">
            {pathname.includes("/home/volunteer") ? (
                <Link
                href=""
                className="relative cursor-pointer group overflow-hidden "
                >
                <h2 className="font-medium mb-2 sm:text-1xl md:text-1xl lg:text-2xl">
                    Joined Events
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transition-transform transform translate-x-60 group-hover:translate-x-0"></div>
                </Link>
            ) : (

                <div
                    onClick={eventDropdown}
                    className="group relative flex items-center gap-2 cursor-pointer">
                    {!showEvent && (
                    <MdOutlineArrowDropDown className="sm:text-3xl"/>
                    )}
                    {showEvent && (
                    <MdOutlineArrowDropUp className="sm:text-3xl"/>
                    )}
                    <span className="sm:text-2xl">Events</span>
                    <span className="hidden group-hover:block absolute w-28 text-center m-auto top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                    Events Menu
                    </span>

                    {showEvent && (
                    <div
                        className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-sm w-40 rounded-md">
                        <Link
                        href=""
                        className="relative cursor-pointer group overflow-hidden flex gap-2 items-center p-2 hover:bg-slate-200  rounded-md"
                        >
                        <IoIosAddCircle className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl text-green-600"/>
                        <h2 className="font-medium">
                            Created Events
                        </h2>
                        </Link>
                        <Link
                        href=""
                        className="relative cursor-pointer group overflow-hidden flex gap-2 items-center p-2 hover:bg-slate-200 rounded-md"
                        >
                        <BiSolidBookContent className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl text-green-600"/>
                        <h2 className="font-medium">
                            Create Event
                        </h2>
                        </Link>
                    </div>
                    )}
                </div>
            )}

            <div className="flex items-center gap-5 mr-8">
                <div
                onClick={dropdown}
                className="group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl"
                >
                <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
                <h4>{session?.user?.name}</h4>
                <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
                    Account
                </span>
                {showDropdown && (
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-sm h-48 w-36 rounded-md">
                    <Link
                        onClick={signout}
                        href=""
                        className="flex gap-2 items-center p-2 hover:bg-slate-200 rounded-t-md"
                    >
                        <CiLogout className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                        Logout
                    </Link>
                    <hr />
                    <Link
                        href={pathname === "/home/volunteer"? "/home/volunteer/settings" : "/home/organization/settings"}
                        className="flex gap-2 items-center p-2 hover:bg-slate-200"
                    >
                        <MdSettings className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                        Settings
                    </Link>
                    <hr />
                    <Link
                        href=""
                        className="flex gap-2 items-center p-2 hover:bg-slate-200"
                    >
                        <CgProfile className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                        Profile
                    </Link>
                    <hr />
                    <Link
                        href=""
                        className="flex gap-2 items-center p-2 hover:bg-slate-200"
                    >
                        <MdDarkMode className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                        Dark Mode
                    </Link>
                    </div>
                )}
                </div>
            </div>
            </div>
        </header>
    )
}
export default Header;