import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" h-screen flex justify-center items-center">
          <div className="modal-box h-[460px] w-[600px] dark:bg-slate-900 dark:text-white">
            <h1 className="text-3xl">Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-1 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <br />
              </div>
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <textarea
                  name="message"
                  placeholder="Type your message"
                  rows={4}
                  className="outline-gray-100 border w-full rounded px-3.5 py-2 dark:bg-slate-900 dark:text-white"
                  defaultValue={""}
                  {...register("message", { required: false })}
                />
                <br />
              </div>
              <button
                type="submit"
                className="block rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
