import { GoogleGenerativeAI } from "@google/generative-ai";

export let genAI: GoogleGenerativeAI;

if (process.env.NEXT_PUBLIC_OPENAI_API_KEY)
  genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);



// utils/notificationUtils.ts

// Function to get notifications from localStorage
export const getStoredNotifications = (): string[] => {
  if (typeof window !== "undefined") {
    const storedNotifications = localStorage.getItem("notifications");
    return storedNotifications ? JSON.parse(storedNotifications) : [];
  }
  return [];
};

// Function to add a notification to localStorage
export const addNotificationToLocalStorage = (message: string) => {
  if (typeof window !== "undefined") {
    const notifications = getStoredNotifications();
    // Check if notification already exists by its message or ID
    if (!notifications.includes(message)) {
      notifications.push(message);
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }
};
