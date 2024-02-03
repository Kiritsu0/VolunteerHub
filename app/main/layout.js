import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoListOutline } from "react-icons/io5";

const Layout = ({children}) => {
  return (
    <div>
      <header className="flex justify-between items-center w-screen min-h-14">
        <h1 className="font-medium ml-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl">Volunteer<span className="font-bold text-green-600">Hub</span></h1>
        <div className="flex items-center gap-5 mr-8">
          <div className="group relative">
            <IoMdSettings className=" bg-gray-200 rounded-full p-1 cursor-pointer text-2xl sm:text-2xl lg:text-3xl"/>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Settings
            </span>
          </div>

          <div className="group relative flex items-center gap-3 border-slate-400 border-2 shadow-md shadow-slate-500 cursor-pointer py-1 px-2 rounded-3xl hover:shadow-xl">
            <IoListOutline className="text-2xl"/>
            <FaUser className="bg-gray-200 rounded-full p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"/>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Account
            </span>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export default Layout