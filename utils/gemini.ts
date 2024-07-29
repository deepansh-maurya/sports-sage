import { GoogleGenerativeAI } from "@google/generative-ai";

export let genAI: GoogleGenerativeAI;

if (process.env.NEXT_PUBLIC_OPENAI_API_KEY)
  genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
