"use client";
import Navbar from "@/components/Navbar";
import { useState, ChangeEvent, FormEvent } from "react";
import { signup } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { addNotificationToLocalStorage } from "@/utils/gemini";
const Signup: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);

    const response = await signup(formdata);
    setLoading(false);

    if (response.success) {
      addNotificationToLocalStorage("User signed up successfully")
      toast.success("sign up successfully");
      router.push("/auth/login");
    } else toast.error("signup failed");

    console.log(response);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r mt-4  ">
        <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-r  rounded shadow-md  bg-gradient-to-r from-red-200 to-yellow-200  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl">
          <h2 className="text-2xl font-bold text-center">Signup</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-emerald-300 rounded  focus:outline-none focus:bg-indigo-700 transform transition-transform duration-300 hover:scale-105  hover:shadow-xl"
            >
              Signup
            </button>
            {loading && (
              <div className="flex flex-row space-x-4 w-[100%]  justify-center items-center">
                <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
              </div>
            )}
            <p className="text-center">
              Already Registered{" "}
              <a className="text-blue-600 underline" href="/auth/login">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
