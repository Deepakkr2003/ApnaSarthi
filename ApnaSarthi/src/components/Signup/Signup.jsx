import React from "react";
import { useFormik} from "formik";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
};

const formStyle = {
  width: "100%",
display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1.25rem",
  // backgroundColor: "rgba(28, 16, 25, 0.31)",
  backgroundColor:"#cbd5e1",
  border: "1px solid #001",
  borderRadius: "2rem",
  boxShadow: "2px 3px #888888"
};

function Signup() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: 91,
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/")
        })
        .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <div class="lg:mx-8 mx-2 flex justify-center items-center m-5 bg-gray-300 border-4 border-blue-600 rounded-xl shadow-md shadow-gray-300">
        <form className="w-full max-w-sm m-5" onSubmit={formik.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="firstName"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Username :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
            </div>

            {formik.touched.username && formik.errors.username ? (
              <p style={{ color: "red", margin: "0.25rem"}}>{formik.errors.username}</p>
            ) : null}
          </div>
          <div className="md:flex md:items-center mb-6 ">
            <div className="md:w-1/3">
              <label
                htmlFor="email"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Email :
              </label>
            </div>
            <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: "red", margin: "0.25rem" }}>{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="md:flex md:items-center mb-6 md:mr-16">
            <div className="md:w-1/3">
              <label
                htmlFor="phone"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Phone :
              </label>
            </div>
            <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
               name="phone"
              id="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
              <p style={{ color: "red", margin: "0.25rem" }}>{formik.errors.phone}</p>
            ) : null}
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="password"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Password :
              </label>
            </div>
            <div className="md:w-2/3">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p style={{ color: "red" , margin: "0.25rem"}}>{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:ml-36"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
