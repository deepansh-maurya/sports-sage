import male from "../public/male.png";
import pen from "../public/pen.png";

import Image from "next/image";
export default function Testimonials() {
  return (
    <div className=" p-6 rounded-lg shadow-2xl shadow-black w-[60%] relative mt-32">
      <h1 className="text-2xl font-medium bottom-52 absolute left-[25%]">
        Pankaj
      </h1>
      <div className="flex  justify-center items-center mt-7">
        <Image
          src={male}
          alt="Placeholder Image"
          className="w-[190px] rounded-full mb-4"
        />
        <p className="text-gray-700 relative right-2 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea
          unde dolor nesciunt distinctio expedita dolore? Doloribus hic
          accusamus assumenda, cum aliquam laboriosam, iste tempora
          exercitationem magni possimus fuga commodi.
        </p>
      </div>
      <button className="text-lg font-medium bottom-7  flex justify-center items-center  text-slate-600 absolute left-[16%]">
        <Image src={pen} alt="" className="w-[10%]" /> Write a Testimonial
      </button>
    </div>
  );
}
