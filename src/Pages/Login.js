import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const Login = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Submitted values:", values);
    setSubmitting(false);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .max(20, "name cannot be more than 10 characters")
      .required("name cannot be empty"),
    email: Yup.string().email().required("Email cannot be empty"),
    password: Yup.string()
      .max(10, "password should be 10 words max")
      .min(5, "password should be 5 words minimum")
      .required("password cannot be empty"),
  });

  return (
    <>
      <h1 className="p-6 text-greenColor font-semibold text-[20px]   w-[90.22px] h-[25.73px] top-[53px] left-[30px]">
        Sigflow
      </h1>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10 border border-borderColor">
        <h2 className="text-2xl font-semibold text-center text-[24px] text-blackColor">
          Welcome back!
        </h2>
        <p className="text-center mb-6 text-[14px] text-grayColor">
          Sign in to access your account
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-blackColor text-[12px]"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="mb-6">
                {/* <div className="flex flex-row justify-between">
                  <label htmlFor="password" className="text-gray-700">
                    Password
                  </label>
                  <label htmlFor="password" className="text-skyblueEgo">
                    Forget password
                  </label>
                </div> */}
                <label
                  htmlFor="password"
                  className="block text-blackColor text-[12px] text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <Field
                  type={open ? "text" : "password"}
                  id="password"
                  name="password"
                  className="block  border bg-gray-100 border-gray-300 focus:outline-none focus-border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full px-4 py-2 rounded-lg" // Add styling here
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-sm font-semibold"
                />{" "}
                {/* Add styling here */}
              </div>
              {open ? (
                <FaEye
                  className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10"
                  onClick={toggle}
                />
              ) : (
                <FaEyeSlash
                  className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10"
                  onClick={toggle}
                />
              )}

              {/* <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-blackColor text-[12px] text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div> */}

              <div>
                <button
                  type="submit"
                  className="w-full bg-mainColor text-white font-semibold p-2 rounded-lg text-[14px]"
                >
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-center">
          <div className="m-2 text-grayColor text-[16px]">OR</div>
          <div className="inline-flex">
            <button className="w-[150px] text-[13px] h-8 rounded-[8px] border border-gray-300 mr-4 mb-4 flex items-center">
              Sign in with Github{" "}
              <FaGithub size={24} className="m-1 text-blackColor" />
            </button>
            <button className="w-[150px] text-[13px] h-8 rounded-[8px] border border-gray-300 mr-4 mb-4 flex items-center">
              Sign in with Google{" "}
              <FaGoogle size={24} color="blue" className="m-1" />
            </button>
          </div>
          <div>
            <button className="w-[120px] text-[13px] h-8 rounded-[8px] border border-gray-300">
              Sign in with SSO
            </button>
          </div>
        </div>

        {/* <div className="text-center ">
          <div className="m-2 text-grayColor text-[16px]">OR</div>

          <button className="w-[150px] text-[13px] h-8 rounded-[8px] border border-gray-300 mr-4 mb-4 flex items-center">
            Sign in with Github{" "}
            <FaGithub size={24} color="blue" className="m-1" />
          </button>
          <button className="w-[150px] text-[13px] h-8 rounded-[8px] border border-gray-300 mr-4 mb-4 flex items-center">
            Sign in with Google{" "}
            <FaGoogle size={24} color="blue" className="m-1" />
          </button>

          <div>
            {" "}
            <button className="w-[120px] text-[13px] h-8 rounded-[8px] border border-gray-300">
              Sign in with SSO
            </button>
          </div>
        </div> */}
      </div>
      <div className="text-center text-[12px]">
        {" "}
        Dont have an account? <span className="text-greenColor">sign in</span>
      </div>
    </>
  );
};

export default Login;
