import { IoIosSearch } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Layout = ({children}) => {
  return (
    <div>
      <header className="flex justify-around items-center w-screen bg-white min-h-14">
        <h1 className="text-4xl font-medium">Volunteer<span className="font-bold text-green-600">Hub</span></h1>
        <div className="flex items-center bg-gray-200 w-1/4 p-1 gap-3 rounded-3xl">
          <IoIosSearch className="text-3xl ml-3"/>
          <input placeholder="Search VolunteerHub" className="outline-none bg-gray-200 w-full"/>
        </div>
        <div className="flex items-center gap-3">
          <div className="group relative">
            <IoMdSettings className="text-3xl bg-gray-200 rounded-full p-1 cursor-pointer"/>
            <span className="hidden group-hover:block absolute top-14 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-md text-sm">
              Settings
            </span>
          </div>
          <div className="group relative flex items-center gap-1">
            <FaUser className="text-3xl bg-gray-200 rounded-full p-1 cursor-pointer"/>
            <span className="font-medium">User</span>
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