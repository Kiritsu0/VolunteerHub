import { MdHail } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

import Link from "next/link"

const Home = () => {
  return (
    <>
      <h1 className="text-4xl font-bold my-7 ml-16 cursor-pointer">Welcome to Volunteer<span className="text-green-600">Hub!</span></h1>
      <div className="w-1/2 mx-auto">
        <p className="text-center font-light">Whether you're on a quest to find meaningful volunteer opportunities or seeking dedicated individuals 
          to support your cause, you've landed at the perfect destination. <b className="text-green-600">VolunteerHub</b> is your go-to platform for 
          connecting with a vibrant community of individuals and organizations dedicated to making a positive impact.
        </p>
        <p className="font-bold mt-9 ml-4">Follow the options below to begin your journey:</p>
      </div>

      <div className="mx-auto mt-10 bg-white rounded-md w-3/12 p-10">
        <p className="text-center font-medium">Choose your role below to get started:</p>
        <div className="flex gap-8 justify-center mt-5">
          <Link href="">
            <MdHail className="rounded-full text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400"/>
            <b>Volunteer</b>
          </Link>

          <Link href="">
            <VscOrganization className="rounded-full text-6xl text-green-600 border-2 border-black p-1 mx-auto hover:bg-green-400"/>
            <b>Organization</b>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home