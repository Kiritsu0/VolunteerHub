"use client"

import { BiEdit } from "react-icons/bi";
import { MdSettings } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useState } from "react"

const Settings = () => {
  const { data: session } = useSession();
  const [location, setLocation] = useState("Location")
  const [domainName, setDomainName] = useState("Add field name")
  const [description, setDescription] = useState("Description")

  const handleLocation = (event) => {
    event.preventDefault(); // Prevents the default form submission(default behavior sends a request to the server that reloads the page)
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
        setLocation(inputValue);
        event.target.reset()
    }
  };

  const handleDomain = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
        setDomainName(inputValue);
        event.target.reset()
    }
  };

    const handleDescription = (event) => {
    event.preventDefault();
    const inputValue = event.target.elements["inputName"].value;
    if (inputValue) {
        setDescription(inputValue);
        event.target.reset()
    }
  };

  return (
    <div className="flex w-full h-full justify-center bg-green-500 mt-5 pt-5">
        <div className="w-1/2">
            <div className="flex items-center gap-2 mb-5">
                <MdSettings className="text-3xl"/>
                <h1 className="text-3xl font-semibold">Settings</h1>
            </div>
            <div className="ml-7">
                <h1 className="text-3xl mb-3 font-medium">Account:</h1>

                <div className="ml-7">
                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Username</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form className="flex items-center gap-1 ml-5">
                        <input placeholder={session?.user?.name} className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"/>
                        <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>

                    <hr className="my-8"/>

                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Email</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form className="flex items-center gap-1 ml-5">
                        <input placeholder={session?.user?.email} className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"/>
                        <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>

                    <hr className="my-8"/>

                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Password</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form className="flex items-center gap-1 ml-5">
                        <input placeholder=".........." className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24"/>
                        <button className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>
                    <hr className="my-8"/>
                </div>

                <h1 className="text-3xl mb-3 font-medium">Profile Settings:</h1>

                <div className="ml-7">
                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Location</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form onSubmit={handleLocation} className="flex items-center gap-1 ml-5">
                        <input
                        name="inputName"
                        placeholder={location}
                        className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" />
                        <button type="submit" className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>
                    
                    <hr className="my-8"/>

                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Domain Name</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form onSubmit={handleDomain} className="flex items-center gap-1 ml-5">
                        <input
                        name="inputName"
                        placeholder={domainName}
                        className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" />
                        <button type="submit" className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>

                    <hr className="my-8"/>

                    <div className="flex justify-between mb-3 items-center">
                        <h2 className="text-2xl font-extralight">Description</h2>
                        <BiEdit className="text-2xl"/>
                    </div>
                    <form onSubmit={handleDescription} className="flex items-center gap-1 ml-5">
                        <textarea
                        name="inputName"
                        placeholder={description}
                        className="rounded-md px-3 py-1 placeholder-slate-400 outline-none w-1/4 min-w-24" />
                        <button type="submit" className="bg-green-600 rounded-md py-1 px-2 font-semibold hover:bg-green-700">Save</button>
                    </form>

                    <hr className="my-8"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings