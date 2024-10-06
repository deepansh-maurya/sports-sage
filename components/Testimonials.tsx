"use client";
import { useEffect, useState } from "react";
import male from "../public/male.png";
import pen from "../public/pen.png";
import { RiArrowLeftWideLine } from "react-icons/ri";
import Image from "next/image";
import { RiArrowRightWideLine } from "react-icons/ri";
import { getTestimonial } from "@/app/actions/user";

interface Testi {
  content: string;
  name: string;
}

export default function Testimonials() {
  const [message, setMessage] = useState<Testi[]>();
  const [totalLength, setTotalLength] = useState<number | undefined>();
  const [index, setIndex] = useState(0);
  console.log(index);

  async function getTesti() {
    const res = await getTestimonial();
    console.log(res);
    if (res.success && res.testimonial) {
      setMessage(res.testimonial);
      setTotalLength(res.testimonial?.length);
    }
  }
  useEffect(() => {
    getTesti();
  }, []);
  console.log(index, totalLength);

  return (
    <div className=" p-6 rounded-lg shadow-2xl shadow-black w-[60%] relative mt-32">
      <div
        onClick={() => {
          if (index > 0) setIndex(index - 1);
        }}
        className="absolute top-32 text-2xl left-0 cursor-pointer"
      >
        <RiArrowLeftWideLine />
      </div>
      <h1 className="text-2xl font-medium bottom-52 absolute left-[25%]">
        {message && message[index].name}
      </h1>
      <div className="flex  justify-center items-center mt-7">
        <Image
          src={male}
          alt="Placeholder Image"
          className="w-[190px] rounded-full mb-4"
        />
        <p className="text-gray-700 relative right-2 mb-6">
          {message && message[index]?.content
            ? message[index].content
            : "Lorem ipsum is a placeholder text commonly used in the graphic, print, and publishing industries for tsting layouts and visual mockups. It helps designers focus on the design aspects rather than the actual content."}
        </p>
      </div>
      <button className="text-lg font-medium bottom-7  flex justify-center items-center  text-slate-600 absolute left-[16%]">
        <Image src={pen} alt="" className="w-[10%]" />
        <a href="/testimonials"> Write a Testimonial</a>
      </button>
      <RiArrowRightWideLine
        onClick={() => {
          if (totalLength && index < totalLength - 1) setIndex(index + 1);
        }}
        className="absolute top-32 right-0 text-2xl cursor-pointer"
      />
    </div>
  );
}
