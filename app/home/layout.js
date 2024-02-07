"use client";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode, MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { signOut, useSession } from "next-auth/react";
import {useState} from "react"
import Link from "next/link"

const Layout = ({ children }) => {
  const [showDropdown, setDropdown] = useState(false)

  const dropdown = () => {
    setDropdown(!showDropdown)
  }
  const signout = () => {
    console.log("signout function called");
    signOut();
  };

  const { data: session } = useSession();
  const userName = session?.user?.name;

  return (
    <div>
      <header className="flex justify-between items-center w-screen min-h-14">
        <h1 className="font-medium ml-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Volunteer<span className="font-bold text-green-600">Hub</span>
        </h1>

        <div className="flex bg-slate-200 gap-3 p-2 rounded-full w-1/3">
          <IoIosSearch className="text-2xl"/>
          <input placeholder="Search" className="bg-slate-200 outline-none w-full"/>
        </div>

        <div className="flex items-center gap-5 mr-8">
          <div onClick={dropdown} className="group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl">
            <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
            <h4>{userName}</h4>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Account
            </span>
            { showDropdown && ( 
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white text-sm h-48 w-40 rounded-md">
                <Link onClick={signout} href="" className="flex gap-2 items-center p-2 hover:bg-slate-200 rounded-t-md">
                  <CiLogout className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                  Logout
                </Link>
                <hr />
                <Link onClick={signout} href="" className="flex gap-2 items-center p-2 hover:bg-slate-200">
                  <MdSettings className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                  Settings
                </Link>
                <hr />
                <Link onClick={signout} href="" className="flex gap-2 items-center p-2 hover:bg-slate-200">
                  <CgProfile className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                  Profile
                </Link>
                <hr />
                <Link onClick={signout} href="" className="flex gap-2 items-center p-2 hover:bg-slate-200">
                  <MdDarkMode className="p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
                  Dark Mode
                </Link>
                <hr />
              </div>
              )
            }
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
