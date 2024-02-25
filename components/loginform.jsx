"use client";

import React from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
// Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

// Functions

  // Handling Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      setError("Email must ends with @gmail.com");
      return;
    } else if (email.length - 10 < 4) {
      setError("Email is too short");
      return;
    }

    try {
      setLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        setLoading(false);
        return;
      }

      router.replace("home/volunteer");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <FaUser className="rounded-full text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 border-2 border-black p-1 mx-auto" />
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              required
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
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
              required
              minLength="4"
            />
          </div>
          <p className="font-light mb-4">
            Do not have account?
            <span className="text-blue-500 underline hover:text-blue-700">
              <Link href="/">signup</Link>
            </span>
          </p>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm mb-2 py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="relative p-2 flex items-center justify-center w-full bg-green-500 text-white rounded-md hover:bg-green-600"
            disabled={loading} // Disable the button when loading
          >
            {loading ? ( // Conditionally render based on loading state
              <CgSpinner
                className="animate-spin mr-2"
                style={{ width: "1.5rem", height: "1.5rem" }}
              /> // Show spinner with fixed width and height
            ) : (
              "" // Empty string when not loading
            )}
            {loading ? "" : "LogIn"}{" "}
            {/* Show "Sign Up" text when not loading */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
