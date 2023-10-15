import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
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
      <h1 className="p-6">Sigflow</h1>
      <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-14 border border-borderColor">
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
              </div>
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
        <div className="text-center ">
          <div className="m-2 text-grayColor text-[16px]">OR</div>
          <button className="w-[120px] text-[13px] h-8 rounded-[8px] border border-gray-300 mr-4 mb-4">
            Sign in with Github
          </button>
          <button className="w-[120px] text-[13px] h-8 rounded-[8px] border border-gray-300">
            Sign in with Google
          </button>
          <div>
            {" "}
            <button className="w-[120px] text-[13px] h-8 rounded-[8px] border border-gray-300">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-[12px]">
        {" "}
        Dont have an account? sign in
      </div>
    </>
  );
};

export default Login;
