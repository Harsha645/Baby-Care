import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [newEmployee, setNewEmployee] = useState({ status: "n/a" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    password: "",
  });

  function onChange() {}

  return (
    <section>
      <h1 className="text-5xl font-serif mt-6 text-center">Get started!</h1>
      <div className=" flex justify-center items-center px-6 py-16 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 mt-4">
          <img
            className="w-5/6  h-3/5 object-contain rounded-2xl hover:scale-105 duration-700 ease-in"
            src="src/assets/2.jfif"
            alt="key"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onChange={onChange}>
            <input
              type="text"
              id="name"
              // value={name}
              placeholder="Full name"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <input
              type="email"
              id="email"
              // value={email}
              placeholder="Email address"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <input
              type="tel"
              id="contact_number"
              // value={contact_number}
              placeholder="Phone number"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                // value={password}
                placeholder="Password"
                onChange={onChange}
                className="w-full px-4 py-2 text-xl text-gray-800 bg-white rounded transition ease-in-out mb-6"
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                />
              )}

              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6">
                  Have an account?
                  <Link
                    to="/sign-in"
                    className="text-red-500 hover:text-red-600 ml-1"
                  >
                    Sign in{" "}
                  </Link>
                </p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?{" "}
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-7 py-3 rounded font-medium uppercase text-lg shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                Sign Up
              </button>
              <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
