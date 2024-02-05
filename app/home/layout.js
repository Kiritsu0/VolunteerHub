"use client";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { signOut, useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const signout = () => {
    console.log("signout function called");
    signOut();
  };

  const { data: session } = useSession();
  const userName = session?.user?.name;

  return (
    <div>
      <header className="flex justify-between items-center w-screen min-h-14">
        <h1 className="font-medium ml-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          Volunteer<span className="font-bold text-green-600">Hub</span>
        </h1>
        <div className="flex items-center gap-5 mr-8">
          <div onClick={signout} className="group relative">
            <CiLogout className=" bg-gray-200 rounded-full p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl" />
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              LogOut
            </span>
          </div>

          <div className="group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl">
            <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl" />
            <h4>{userName}</h4>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Account
            </span>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
