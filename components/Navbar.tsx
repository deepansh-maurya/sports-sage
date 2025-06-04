"use client";
import logo from "../public/image.png";
import Image from "next/image";
import { checkAuth } from "@/app/actions/user";
import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa"; // Using FontAwesome for notification bell icon
import { addNotificationToLocalStorage, getStoredNotifications } from "@/utils/gemini";

const Navbar = () => {
  const [kAuth, setCheckAuth] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false); // State to control notification sidebar visibility
  const [notifications, setNotifications] = useState<string[]>([]); // State to hold notifications
  const [notificationCount, setNotificationCount] = useState(0); // State to manage the count of notifications

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

  // Simulate receiving new notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Update component state with notifications from localStorage
      const updatedNotifications = getStoredNotifications();
      setNotifications(updatedNotifications);
      setNotificationCount(updatedNotifications.length);

    }, 5000); // Every 5 seconds to simulate a new notification

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
    // Reset the notification count when the sidebar is opened or closed
    if (showNotifications) {
      setNotificationCount(0); // Reset count when closing the sidebar
    }
  };

  return (
    <div className="w-[100vw] fixed h-[70px] z-20 top-0 bg-gradient-to-t bg-gradient-to-r from-red-200 to-yellow-200 font-medium flex justify-evenly shadow-md">
      <div className="flex w-[15%] gap-2 justify-center items-center">
        <a href="/">
          <Image src={logo} alt="" className="h-[130%] w-[130%]" />
        </a>
        <h1 className="text-2xl w-[400px]">SPORTS SAGE</h1>
      </div>
      <ul className="flex justify-center text-xl gap-9 font-medium items-center">
        <li>{kAuth ? <a href="/sports">Sports</a> : <div>Sports</div>}</li>
        <li>{kAuth ? <a href="/dashboard">Dashboard</a> : <div>Dashboard</div>}</li>
        <a href="/how-it-works">How it Works?</a>
        <a href="/testimonials">Testimonial</a>

        {!kAuth && (
          <li className="px-6 py-2 bg-purple-500 rounded-3xl text-pink-100 font-bold">
            <a href="/auth/signup">Register</a>
          </li>
        )}

        {/* Notification Icon */}
        <li className="relative">
          <FaBell
            size={24}
            className="cursor-pointer"
            onClick={handleBellClick} // Toggle notification sidebar
          />
          {/* Notification Badge */}
          {notificationCount > 0 && !showNotifications && (
            <div className="absolute top-[-5px] right-[-5px] bg-red-500 text-white rounded-full text-xs px-2 py-1 z-20">
              {notificationCount}
            </div>
          )}
        </li>
      </ul>

      {/* Notification Sidebar */}
      {showNotifications && (
        <div className="fixed top-0 right-0 w-[320px] h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl z-30 p-6 rounded-l-xl overflow-y-auto max-h-full">
          <h2 className="text-2xl font-semibold text-white mb-6">Notifications</h2>
          <ul className="space-y-4 text-white max-h-[calc(100vh-150px)] overflow-y-auto">
            {notifications.map((notification, index) => (
              <li
                key={index}
                className="bg-white text-gray-800 p-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
              >
                {notification}
              </li>
            ))}
          </ul>
          <button
            className="mt-6 text-red-500 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition duration-200"
            onClick={() => {
              setShowNotifications(false); // Close the sidebar
              setNotificationCount(0); // Reset the notification count when closing
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
