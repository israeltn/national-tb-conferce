import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import swal from "sweetalert";

export const AddUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [registerInput, setRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      email: registerInput.email,
      role: registerInput.role,
      password: registerInput.password,
    };
    setLoading(true);
    axios.get("/sanctum/csrf-cookie").then((response) => {
      // Login...
      axios.post(`/api/reg-user`, data).then((res) => {
        if (res.data.status === 200) {
          //  console.log(res.data);
          setLoading(false);
          setIsSubmitting(false);
          swal("Success", res.data.message, "success");
          navigate("/dashboard/abstractreviewers");
        } else if (res.data.status === 500) {
          setLoading(false);
          swal("Warning", "Server or Network failure", "warning");
          // toast.error(res.data.message);
          navigate("/dashboard/adduser");
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
          setLoading(false);
        }
        setLoading(false);
        setIsSubmitting(false);
      });
    });
  };

  if (loading) {
    return (
      <div className="text-center max-w-screen-xl max-h-screen-[72] mx-auto justify-center items-center ">
        <div role="status" className="mt-[20rem]">
          <svg
            aria-hidden="true"
            className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white justify-center items-center max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="pt-12 justify-center items-center mx-auto w-auto md:w-full lg:max-w-md  md:max-w-md">
          <div className="justify-center items-center text-gray-600 text-2xl mb-4 text-center w-auto font-bold">
            Register Users
          </div>

          <div className="bg-white shadow w-full mb-4 rounded-md">
            <form onSubmit={registerSubmit}>
              <div className="px-5 py-7 justify-center item-center">
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleInput}
                    value={registerInput.firstname}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {registerInput.error_list.firstname}
                  </span>
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600  block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleInput}
                    value={registerInput.lastname}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {registerInput.error_list.lastname}
                  </span>
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    E-mail
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={registerInput.email}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {registerInput.error_list.email}
                  </span>
                </div>
                <div className="mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      type="text"
                      name="role"
                      onChange={handleInput}
                      value={registerInput.role}
                      className="block border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                      required
                      id="grid-gender"
                    >
                      <option>Select</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option selected="selected" value="reviewer">
                        Reviewer
                      </option>
                    </select>
                  </div>
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {registerInput.error_list.role}
                  </span>
                </div>
                <div className="mt-5 mb-5">
                  <label className="font-semibold text-sm text-gray-600 block">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    value={registerInput.password}
                    className="border rounded-lg px-3 py-2 mt-1 text-sm w-full"
                  />
                  <span className="pb-2 mb-2 text-xs text-red-600">
                    {registerInput.error_list.password}
                  </span>
                </div>
                <div className="item-center justify-center flex">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="transition w-full duration-200 bg-red-700 hover:bg-red-600  focus:ring-opacity-50 text-white py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                  >
                    <span className="inline-block mr-2">
                      {" "}
                      {isSubmitting ? "Submitting Data..." : "Register"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  );
};
