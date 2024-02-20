"use client"

import Asettings from "@/components/vol_org_asetting";
import { useSession } from "next-auth/react";
import { useState } from "react"

// Icons
import { MdSettings } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Settings = () => {
// Variables
  const { data: session } = useSession();
  const [location, setLocation] = useState("Location")
  const [aboutus, setAboutus] = useState("About")
  const [services, setServices] = useState("")
  const [phone_number, setPhoneNumber] = useState("Phone number")
  const [email_address, setEmailAddress] = useState("Email Address")

// Functions

  // Location
  const handleLocation = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setLocation(inputValue);
      event.target.reset()
    }
  };

  // About Us
  const handleAboutus = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
      setAboutus(inputValue);
      event.target.reset()
    }
  };

    // Delete Service
    const handleServiceDelete = (index) => {
      setServices((prevSkills) => {
        const newSkills = [...prevSkills];
        newSkills[index] = "";
        return newSkills;
      });
    }
  
    // Add service
    const handleAddService = (event) => {
      event.preventDefault();
      const inputValue = event.target.elements["inputName"].value;
      if (inputValue) {
        setServices(previous => [...previous,
        (
          <span key={previous.length} className="bg-white rounded-md inline-flex items-center px-2 py-1 gap-3 mr-4 mt-5">
            {inputValue}
            <RxCross2 
              className="hover:bg-slate-200 cursor-pointer rounded-full"
              onClick={() => handleServiceDelete(previous.length)}
            />
          </span>
        )]);
        event.target.reset()
      }
    };

    // Phone Number
    const handlePhoneNumber = (event) => {
      event.preventDefault();
      const inputValue = event.target.elements["inputName"].value;
      if (inputValue) {
        setPhoneNumber(inputValue);
        event.target.reset()
      }
    };

    // Email Address
    const handleEmailAddress = (event) => {
      event.preventDefault();
      const inputValue = event.target.elements["inputName"].value;
      if (inputValue) {
        setEmailAddress(inputValue);
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

            {/* About Us */}
            <form onSubmit={handleAboutus} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="about_us">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">About Us</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1 items-center">
                <textarea
                  id="about_us"
                  aria-label="About Us"
                  placeholder={aboutus}
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

            {/* Services */}
            <form onSubmit={handleAddService} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="add_service">
                <div className="flex justify-between mb-3 items-center">
                  <h2 className="text-2xl font-extralight">Services</h2>
                  <BiEdit className="text-2xl"/>
                </div>
              </label>
              <div className="flex gap-1">
                <input
                  id="add_service"
                  placeholder="Add Service"
                  aria-label="Add Service"
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
              {services}
            </div>
            <hr className="my-8"/>

            
            {/* Not finished, Will continue later */}
            <form onSubmit={""} className="flex flex-col gap-1 ml-5">
              <label className="cursor-pointer" htmlFor="add_event">
              <div className="flex justify-between mb-3 items-center">
                <h2 className="text-2xl font-extralight">Events</h2>
                <BiEdit className="text-2xl"/>
              </div>
              </label>
              <div className="flex gap-1">
                <select
                  id="add_event"
                  type=""
                  aria-label="Add Event"
                  name="inputName"
                  className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                >
                  <option>Event 1</option>
                  <option>Event 2</option>
                  <option>Event 3</option>
                  <option selected>Add Event</option>
                </select>
                <button 
                  type="submit"
                  className="bg-green-500 rounded-full font-semibold">
                  <IoIosAddCircle className="text-4xl text-green-700 hover:opacity-80"/>
                </button>
              </div>
            </form>
            <hr className="my-8 border-green-800 border-2"/>

            {/* Contacts Info */}
            <h1 className="text-3xl mb-3 font-medium">Contacts Info:</h1>
            <div className="ml-7">
              <form onSubmit={handlePhoneNumber} className="flex flex-col gap-1 ml-5">
                <label className="cursor-pointer" htmlFor="phone_number">
                  <div className="flex justify-between mb-3 items-center">
                    <h2 className="text-2xl font-extralight">Phone Number</h2>
                    <BiEdit className="text-2xl"/>
                  </div>
                </label>
                <div className="flex gap-1">
                  <input
                    id="phone_number"
                    type="tel"
                    placeholder={phone_number}
                    aria-label="Phone Number"
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

              {/* Email Address*/}
              <form onSubmit={handleEmailAddress} className="flex flex-col gap-1 ml-5">
                <label className="cursor-pointer" htmlFor="email_address">
                  <div className="flex justify-between mb-3 items-center">
                    <h2 className="text-2xl font-extralight">Email Address</h2>
                    <BiEdit className="text-2xl"/>
                  </div>
                </label>
                <div className="flex gap-1">
                  <input
                    id="email_address"
                    type="tel"
                    placeholder={email_address}
                    aria-label="Email Address"
                    className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" 
                  />
                  <button 
                    type="submit" 
                    className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings