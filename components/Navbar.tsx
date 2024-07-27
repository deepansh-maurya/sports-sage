import logo from "../public/logo.png";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="w-[100vw]  fixed h-[70px]   z-20 top-0 bg-gradient-to-t from-fuchsia-100 to-fuchsia-300  font-medium flex justify-evenly">
      <div className="flex w-[15%] gap-2 justify-center items-center">
        <Image src={logo} alt="" className="h-[100%] w-[130%]" />
        <h1 className="text-3xl">Sportsy</h1>
      </div>
      <ul className="flex justify-center text-xl gap-9 font-medium items-center">
        <li>Sports</li>
        <li>How it Works?</li>
        <li>Testimonial</li>
        <li className="px-6 py-2 bg-purple-500 rounded-3xl text-pink-100 font-bold">
          Register
        </li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Navbar;
