import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 py-1 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
             {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your password"
              className="w-80 py-1 px-3 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
          </div>
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to={"/signup"}
                className="text-blue-500 underline cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
