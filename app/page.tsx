"use client";
import Navbar from "@/components/Navbar";
import logo from "../public/logo.png";
import lecture from "../public/lecture.png";
import player1 from "../public/player1.png";
import player2 from "../public/player2.png";
import track from "../public/track.png";
import date from "../public/date.png";
import target from "../public/target.png";
import testi from "../public/testi.png";
import insta from "../public/insta.jpeg";
import x from "../public/x.png";
import link from "../public/link.png";
import face from "../public/face.jpeg";
import utube from "../public/utube.png";

import Image from "next/image";
import hero from "../public/hero.png";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";
import { getTestimonial } from "./actions/user";

interface Testi {
  content: string;
}

export default function Home() {
  const [message, setMessage] = useState<Testi[]>();
  async function getTesti() {
    const res = await getTestimonial();
    console.log(res);
    if (res.success) setMessage(res.testimonial);
  }
  useEffect(() => {
    getTesti();
  }, []);
  console.log(message);

  return (
    <div className="">
      <Navbar />
      <section className="w-[100vw] mt-[124px]  flex justify-center items-center h-[500px] bg-gradient-to-b from-fuchsia-100  to-fuchsia-300  drop-shadow-2xl ">
        <div className="relative ">
          <Image
            src={hero}
            alt=""
            className="w-[100%]   absolute left-3 top-0   h-[400px]  "
          />
          <Image
            src={hero}
            alt=""
            className="w-[100%] filter  blur-sm   opacity-[0.28]  h-[400px]  "
          />
        </div>
        <h1 className="text-6xl font-bold drop-shadow-2xl relative">
          <p className="absolute left-5 bottom-5">Train Smart Play Hard</p>
          <p className=" text-gray-400 filter blur-sm opacity-70">
            Train Smart Play Hard{" "}
          </p>
        </h1>
      </section>
      <section className="w-[100vw] h-[500px] flex flex-col justify-center relative gap-40 top-[70px] items-center ">
        <h2 className="text-6xl font-bold drop-shadow-2xl relative w-[600px] left-10 top-28">
          <p className="absolute left-5 bottom-5">How it Works?</p>
          <p className=" text-gray-400 filter blur-sm opacity-70">
            How it Works?
          </p>
        </h2>
        <div className="w-[100%] flex justify-center font-medium items-center gap-4">
          <main
            className="w-[30%] h-[500px] border relative bg-gradient-to-b from-green-500 to-emerald-200 rounded-xl flex flex-col justify-center items-center 
          transform transition-transform duration-300 hover:scale-105  hover:shadow-xl"
          >
            <h1 className="text-center text-3xl">WELCOME</h1>
            <Image src={logo} alt="" className="w-[60%]" />
            <p className="text-center text-2xl font-m">
              A personalised app to learn,
              <br /> nurture & build sports skills
            </p>
            <p className="text-center text-xl mt-9 text-slate-500 relative right-4 ">
              Spot your Sport ... <br />
              Be the Best Sportitech!
            </p>
            <Image
              src={player1}
              alt=""
              className="absolute bottom-[-10%] right-[-10%] w-[40%]"
            />
          </main>
          <main className="w-[30%] h-[500px] border relative bg-gradient-to-b from-amber-400 to-orange-100 rounded-xl flex flex-col justify-center items-center gap-5  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl">
            <h1 className="text-center text-3xl">Learn</h1>
            <Image src={lecture} alt="" className="w-[60%]" />
            <p className="text-center text-2xl font-m">
              Select a sport & learn
            </p>
            <div className="text-slate-500">
              <p className="text-center text-xl font-m">
                <span className="text-black"> ✔</span> Skills required to play
                the sport
              </p>
              <p className="text-center text-xl font-m">
                <span className="text-black">✔</span> Drills required to master
                the skill
              </p>
            </div>
            <p className="text-center text-slate-600 text-xl relative right-6">
              Watch video lectures by experts
            </p>
            <Image
              src={player2}
              alt=""
              className="absolute bottom-[-10%] w-[60%] right-[-18%]"
            />
          </main>
          <main className="w-[30%] h-[500px] border relative bg-gradient-to-b from-blue-500 to-sky-200 rounded-xl flex flex-col justify-center items-center gap-5  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl">
            <h1 className="text-center text-3xl">Track progress</h1>
            <Image src={track} alt="" />
            <p>Choose level</p>
            <div className="w-[100%] h-[10%]  rounded-3xl flex relative right-6">
              <div className="w-[33%] h-[100%] bg-red-200 rounded-l-3xl absolute flex justify-center items-center right-[55%]">
                {" "}
                Beginner
              </div>
              <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-300 rounded-l-3xl absolute right-[27%] ">
                <span className="relative right-2">Intermediate </span>
              </div>
              <div className="w-[33%] h-[100%] flex justify-center items-center bg-red-500 rounded-3xl absolute right-0">
                Advance
              </div>
            </div>

            <div className="flex justify-center items-center text-lg">
              {" "}
              <Image src={date} alt="" /> Set your daily routine
            </div>
            <div className="flex justify-center items-center text-lg">
              {" "}
              <Image src={target} alt="" /> Monitor the skill level
            </div>
          </main>
        </div>
      </section>

      <section className="w-[100vw] flex flex-col justify-center items-center h-[550px] bg-gradient-to-r from-rose-300 to-teal-100 mt-80 relative">
        <div className="flex gap-0 justify-center items-center absolute top-0 right-[24%]">
          <Image src={testi} alt="" className="relative w-80 left-24" />
          <h1 className="flex flex-col relative w-[500px]">
            <p className="text-5xl absolute bottom-6 left-6 font-bold z-10 ">
              {"Sportsy Say's"}
            </p>
            <p className="text-7xl font-bold text-slate-400 opacity-[30%]">
              Testimonials
            </p>
          </h1>
        </div>
        <Testimonials />
      </section>

      <section className="w-[100vw] flex h-[470px] justify-center mt-16 bg-gradient-to-r from-rose-50 to-rose-100">
        <main className="w-[20%]  mt-7">
          <h1 className="text-3xl mb-3">Quick Links</h1>
          <p>About Sportsy</p>
          <p>How it works?</p>
          <p>Testimonial</p>
          <p>Popular videos</p>
          <p>sitemap</p>
        </main>
        <main className="w-[20%] mt-7">
          <h1 className="text-3xl mb-3">Sports</h1>
          <p>Football</p>
          <p>Hockey</p>
          <p>Cricket</p>
          <p>Baseball</p>
          <p>Volleyball</p>
          <p>Tennis</p>
          <p>Badminton</p>
          <p>Squash</p>
          <p>Golf</p>
          <p>Carrom</p>
          <p>Darts</p>
          <p>Table Tennis</p>
          <p>Kabbadi</p>
          <p>Kite Flying</p>
          <p>Kho Kho</p>
        </main>
        <main className="w-[20%] mt-7">
          <h1 className="text-3xl mb-3">INFO</h1>
          <p>Why Sportsy</p>
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
          <p>FAQs</p>
        </main>
        <main className="w-[20%] flex flex-col gap-4 mt-7  ">
          <h1 className="text-3xl mb-3">ABOUT US</h1>
          <h2>
            At Sportstoon, we understand that a balance of fascination, skill
            and passion towards adolescent growth is imbibed through sports and
            participation in sporting activities provides room for opportunities
            for young blood to enrich their social and physical capabilities.
          </h2>
          <button className="relative right-20 font-medium">
            Read More ...
          </button>
          <div className="flex gap-2">
            <Image src={insta} alt="" className="w-[10%] rounded-full" />
            <Image src={x} alt="" className="w-[10%] rounded-full" />
            <Image src={face} alt="" className="w-[10%] rounded-full" />
            <Image src={link} alt="" className="w-[10%] rounded-full" />
            <Image src={utube} alt="" className="w-[20%] rounded-full" />
          </div>
          <div>
            <h3>Email : info@sportstoon.com</h3>
            <h3>Web : www.sportstoon.com</h3>
          </div>
        </main>
      </section>
    </div>
  );
}
