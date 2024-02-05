import { IoIosSearch } from "react-icons/io";

const Volunteer = () => {
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="bg-white flex justify-between rounded-full cursor-pointer w-2/3">
          <div className="rounded-full hover:bg-slate-300 h-full py-3 pl-5">
            <h2>Region</h2>
            <input
              placeholder="Enter Location"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="rounded-full hover:bg-slate-300 h-full py-3 pl-5">
            <h2>Skills</h2>
            <input
              placeholder="Add Skills"
              className="bg-transparent outline-none"
            />
          </div>
          <div className="rounded-full hover:bg-slate-300 h-full mr-3 py-3 pl-5 pr-3">
            <h2>Duration</h2>
            <input type="date" className="bg-transparent outline-none" />
          </div>
          <button className="rounded-full h-full hover:bg-green-700 py-3 pl-5 flex items-center gap-2 bg-green-600 self-end w-32">
            <IoIosSearch className="text-2xl" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
