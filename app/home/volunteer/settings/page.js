"use client"

import Asettings from "@/components/vol_org_asetting";
import { useSession } from "next-auth/react";
import { useState } from "react"

// Icons
import { BiEdit } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Settings = () => {
// Variables
  const { data: session } = useSession();
  const [location, setLocation] = useState("Location")
  const [domainName, setDomainName] = useState("Add field name")
  const [description, setDescription] = useState("Description")
  const [skills, setSkills] = useState([])

// Functions

  // Location
  const handleLocation = (event) => {
    event.preventDefault(); // Prevents the default form submission(default behavior sends a request to the server that reloads the page)
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setLocation(inputValue);
      event.target.reset()
    }
  };

  // Domain Name
  const handleDomain = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setDomainName(inputValue);
      event.target.reset()
    }
  };

  // Description
  const handleDescription = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setDescription(inputValue);
      event.target.reset()
    }
  };

  // Delete skills
  const handleSkillsDelete = (index) => {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index] = "";
      return newSkills;
    });
  }

  // Add skills
  const handleAddSkills = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setSkills(previous => [...previous,
      (
        <span key={previous.length} className="bg-white rounded-md inline-flex items-center px-2 py-1 gap-3 mr-4 mt-5">
          {inputValue}
          <RxCross2 
            className="hover:bg-slate-200 cursor-pointer rounded-full"
            onClick={() => handleSkillsDelete(previous.length)}
          />
        </span>
      )]);
      event.target.reset()
    }
  };

  return (
    <div className="flex w-full h-full justify-center bg-green-500 mt-5 pt-5">
      <div className="w-1/2 pb-10">
        <div className="flex items-center gap-2 mb-5">
          <MdSettings className="text-3xl"/>
            <h1 className="text-3xl font-semibold">Settings</h1>
        </div>

        <div className="ml-7">
          {/* Account */}
          <h1 className="text-3xl mb-3 font-medium">Account:</h1>
          <Asettings 
            name={session?.user?.name} 
            email={session?.user?.email}
          />

          {/* Profile Settings */}
          <h1 className="text-3xl mb-3 font-medium">Profile Settings:</h1>
          <div className="ml-7">
            {/* Location */}
            <form onSubmit={handleLocation} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="location">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Location</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="location"
                  aria-label="Location"
                  placeholder={location}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>

            <hr className="my-8"/>

            {/* Domain name */}
            <form onSubmit={handleDomain} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="domain_name">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Domain Name</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="domain_name"
                  aria-label="Domain Name"
                  placeholder={domainName}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>

            <hr className="my-8"/>

            {/* Description */}
            <form onSubmit={handleDescription} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="description">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Description</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1 items-center">
                <textarea
                  id="description"
                  aria-label="Description"
                  placeholder={description}
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit" 
                  className="bg-green-600 rounded-md py-1 px-2 h-7 font-semibold hover:bg-green-700">
                  Save
                </button>
              </div>
            </form>
            <hr className="my-8"/>

            {/* Skills */}
            <form onSubmit={handleAddSkills} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="skills">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Skills</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="skills"
                  aria-label="Skills"
                  placeholder="Add Skills"
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                />
                <button 
                  type="submit"
                  className="bg-green-500 rounded-full font-semibold">
                  <IoIosAddCircle className="text-4xl text-green-700 hover:opacity-80"/>
                </button>
              </div>
            </form>
            <div className="ml-7">
              {skills}
            </div>
            <hr className="my-8"/>

            {/* Not finished, Will continue later */}
            <form onSubmit={""} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="join_event">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Joined Events</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <select
                  id="join_event"
                  aria-label="Joined Events"
                  type=""
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                >
                  <option>Work 1</option>
                  <option>Work 2</option>
                  <option>Work 3</option>
                  <option selected>Add work</option>
                </select>
                <button 
                  type="submit"
                  className="bg-green-500 rounded-full font-semibold">
                  <IoIosAddCircle className="text-4xl text-green-700 hover:opacity-80"/>
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Settings