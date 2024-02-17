import { BiEdit } from "react-icons/bi";

const Asettings = ({ name, email }) => {
  return (
    <div className="ml-7">
      <div className="flex justify-between mb-3 items-center">
        <h2 
        className="text-2xl font-extralight">Username</h2>
          <BiEdit className="text-2xl"/>
      </div>
      <form className="flex items-center gap-1 ml-5">
        <input 
          placeholder={name} 
          className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
        />
        <button 
          className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
          Save
        </button>
      </form>

      <hr className="my-8"/>

      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-2xl font-extralight">Email</h2>
        <BiEdit className="text-2xl"/>
      </div>
      <form className="flex items-center gap-1 ml-5">
        <input 
          placeholder={email} 
          className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
        />
        <button 
          className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
          Save
        </button>
      </form>

      <hr className="my-8"/>

      <div className="flex justify-between mb-3 items-center">
        <h2 className="text-2xl font-extralight">Password</h2>
        <BiEdit className="text-2xl"/>
      </div>
      <form className="flex items-center gap-1 ml-5">
        <input 
          placeholder=".........." 
          className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"
        />
        <button 
          className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
          Save
        </button>
      </form>
      <hr className="my-8"/>
    </div>
  )
}

export default Asettings