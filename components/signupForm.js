"use client";

import { FaUser } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const SignUpForm = () => {
  // for type value
  const searchParams = useSearchParams();
  const router = useRouter();

  const hasSearchParams = Object.keys(searchParams).length > 0;

  const type = searchParams.get("type");
  const isValidType = type === "individual" || type === "organization";

  if (!hasSearchParams || !isValidType) {
    router.push("/");
  }

  // for auth
  const isOrganization = type === "organization" ? true : false;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("All Fields Required");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setError("Email must ends with @gmail.com");
      return;
    } else if (email.length - 10 < 4) {
      setError("Email is too short");
      return;
    }

    setLoading(true);
    try {
      const resUserExist = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExist.json();

      if (user) {
        setError("User Already Exists");
        setLoading(false);
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          isOrganization,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
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
      } else {
        setLoading(false);
        console.log("registeration failed");
      }
    } catch (error) {
      console.log("error during registration", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <FaUser className="rounded-full text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-green-600 border-2 border-black p-1 mx-auto" />
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your Username"
              minLength="3"
              required
            />
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
            Already have an account?
            <span className="text-blue-500 underline hover:text-blue-700">
              <Link href="/login">login</Link>
            </span>
          </p>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm mb-2 py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-500 text-white w-fit text-sm mb-2 py-1 px-3 rounded-md mt-2">
              {success}
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
            {loading ? "" : "Sign Up"}{" "}
            {/* Show "Sign Up" text when not loading */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
