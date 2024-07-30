"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { login } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    const response = await login(formdata);
    console.log(response);

    if (response.success) {
      toast.success("logged in successfull");
      router.push("/");
    } else {
      toast.error("login failed");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-300 to-orange-200">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md bg-gradient-to-r from-orange-300 to-fuchsia-300  transform transition-transform duration-300 hover:scale-105  hover:shadow-xl">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              />
            </div>
            {loading && (
              <div className="flex flex-row space-x-4 w-[100%]  justify-center items-center">
                <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

                <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
              </div>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-emerald-300 rounded  focus:outline-none focus:bg-indigo-700 transform transition-transform duration-300 hover:scale-105  hover:shadow-xl"
            >
              Login
            </button>
            <p className="text-center">
              Not Registered{" "}
              <a className="text-blue-600 underline" href="/auth/signup">
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
