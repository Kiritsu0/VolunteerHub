import { FaUser } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const Volunteer = () => {
  return (
    <div>
      <div className="bg-white w-1/4 h-96 p-5">
        <div className="flex items-center gap-1">
          <FaUser className="text-4xl bg-gray-200 rounded-full p-1"/>
          <span>User</span>
        </div>

        <hr className="my-3"/>

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Skills</h1>
          <button><FaCirclePlus className="text-green-600 text-3xl"/></button>
        </div>
      </div>
    </div>
  )
}

export default Volunteer