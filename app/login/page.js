"use client";

import { FaUser } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";

import Link from "next/link";
const LogIn = () => {
  const searchParams = useSearchParams();
  const route = useRouter();
  const url = `/signup?${searchParams}`;

  // Check if there are any search parameters in the URL
  const hasSearchParams = Object.keys(searchParams).length > 0;

  // Check if the "type" parameter is set to "individual" or "organization"
  const type = searchParams.get("type");
  const isValidType = type === "individual" || type === "organization";

  // If there are no search parameters or invalid "type", redirect the user to /
  if (!hasSearchParams || !isValidType) {
    route.push("/");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <FaUser className="rounded-full text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 border-2 border-black p-1 mx-auto" />
        <form>
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <p className="font-light mb-4">
            Do not have account?
            <span className="text-blue-500 underline hover:text-blue-700">
              <Link href={url}>signup</Link>
            </span>
          </p>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
