"use client";
import logo from "../public/logo.png";
import Image from "next/image";
import { checkAuth } from "@/app/actions/user";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [kAuth, setCheckAuth] = useState(true);
  async function forAuth() {
    const res = await checkAuth();
    console.log(res);

    if (res) {
      setCheckAuth(true);
    } else setCheckAuth(false);
  }
  useEffect(() => {
    forAuth();
  }, []);
  return (
    <div className="w-[100vw]  fixed h-[70px]   z-20 top-0 bg-gradient-to-t from-fuchsia-100 to-fuchsia-300  font-medium flex justify-evenly shadow-md ">
      <div className="flex w-[15%] gap-2 justify-center items-center">
        <a href="/">
          <Image src={logo} alt="" className="h-[100%] w-[130%]" />
        </a>
        <h1 className="text-3xl">Sportsy</h1>
      </div>
      <ul className="flex justify-center text-xl gap-9 font-medium items-center">
        <li>{kAuth ? <a href="/sports">Sports</a> : <div>Sports</div>}</li>
        <a href="/how-it-works">How it Works?</a>
        <a href="/testimonials">Testimonial</a>

        {!kAuth && (
          <li className="px-6 py-2 bg-purple-500 rounded-3xl text-pink-100 font-bold">
            <a href="/auth/signup">Register</a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
