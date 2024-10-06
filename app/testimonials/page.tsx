"use client";
import Navbar from "@/components/Navbar";
import React, { FormEvent, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { addTestimonial } from "../actions/user";
import { useRouter } from "next/navigation";

const Testimonials = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  console.log("--------start---------");

  console.log(name);
  console.log("---------------------");
  console.log(message);
  console.log("-------end----------");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await addTestimonial(message, name);
    console.log(res);

    if (res.success) {
      toast.success("successfully created testimonial");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      toast.error("failed to create testimonial");
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex min-h-screen bg-gray-100 p-5 bg-gradient-to-r from-orange-200 to-pink-100 ">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-24 bg-gradient-to-r from-cyan-100 to-amber-200   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl">
          {/* <h1 className="text-2xl font-bold mb-6">Write Testimonials</h1> */}
          <h1 className="flex flex-col  relative w-[500px] h-[100px]">
            <p className="text-5xl absolute bottom-6 left-6 font-bold z-10 ">
              {"Sportsy Say's"}
            </p>
            <p className="text-7xl font-bold text-slate-400 opacity-[30%]">
              Testimonials
            </p>
          </h1>
          <form onSubmit={handleSubmit} className="mb-6 mt-6">
            <div className="mb-4">
              <input
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={250}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg h-56"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={250}
                placeholder="Say something"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-b from-orange-200 to-red-200 w-full  px-4 py-2 rounded-lg hover:bg-blue-600 text-black font-bold   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Testimonials;
