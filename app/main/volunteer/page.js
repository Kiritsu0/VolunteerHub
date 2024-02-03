import { FaUser } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";


const Volunteer = () => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="bg-white flex w-1/2 rounded-full cursor-pointer">
          <div className="rounded-full hover:bg-slate-300 h-full py-3 pl-5">
            <h2>Region</h2>
            <input placeholder="Enter Location" className="bg-transparent outline-none"/>
          </div>
          <div className="rounded-full hover:bg-slate-300 h-full py-3 pl-5">
            <h2>Skills</h2>
            <input placeholder="Add Skills" className="bg-transparent outline-none"/>
          </div>
          <div className="rounded-full hover:bg-slate-300 h-full py-3 pl-5 ">
            <h2>Duration</h2>
            <input type="date" className="bg-transparent outline-none"/>
          </div>
          <button className="rounded-full hover:bg-slate-300 h-full py-3 pl-5 flex-1 flex items-center gap-2">
            <IoIosSearch className="text-2xl"/>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Volunteer