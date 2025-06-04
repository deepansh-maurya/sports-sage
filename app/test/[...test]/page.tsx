"use client";
import { useEffect, useState, useRef } from "react";
import { addNotificationToLocalStorage, genAI } from "@/utils/gemini";
import Navbar from "@/components/Navbar";
import { useSearchParams } from "next/navigation";

interface quiz {
  description: string;
  questions: data[];
  title: string;
}
interface data {
  question: string;
  answer: string;
  options: string[];
}
interface QuizHistory {
  date: string;
  lesson: string;
  level: string;
  score: number;
  totalQuestions: number;
}

function saveQuizHistory(
  lesson: string,
  level: string,
  score: number,
  totalQuestions: number
) {
  const history: QuizHistory[] = JSON.parse(
    localStorage.getItem("quizHistory") || "[]"
  );
  const newEntry: QuizHistory = {
    date: new Date().toISOString(),
    lesson,
    level,
    score,
    totalQuestions
  };
  history.push(newEntry);
  localStorage.setItem("quizHistory", JSON.stringify(history));
}

let score = 0;

export default function Page({ params }: { params: { test: string } }) {
  const searchParams = useSearchParams();
  const lesson = searchParams.get("lesson");
  const lessAndLevel = lesson?.split(",") || ["sport", "sport"];

  const [quiz, setQuiz] = useState<quiz>();
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [answerFlag, setAnwserFlag] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [totalQuizzes, setTotalQuizzes] = useState<number>(0);
  const [averageScore, setAverageScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  // 🕐 Timer states
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins = 300 seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `create a quiz on ${lessAndLevel[1]} ${lessAndLevel[0]} skills 10 questions and convert the reponse in json format and please donot add anything extra after the  json {} curly braces and the json should look like this quiz,questions which is array`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();
    const json = await JSON.parse(
      text.replace("```json", "").replace("```", "")
    );
    if (json?.questions) {
      setQuiz(json.questions);
    } else {
      setQuiz(json.quiz);
    }
  }

  // 👇 Effect for quiz + stats + timer reset
  useEffect(() => {
    run();
    const storedHistory: QuizHistory[] = JSON.parse(
      localStorage.getItem("quizHistory") || "[]"
    );
    setTotalQuizzes(storedHistory.length);
    if (storedHistory.length > 0) {
      const totalScore = storedHistory.reduce(
        (acc, curr) => acc + curr.score,
        0
      );
      setAverageScore(totalScore / storedHistory.length);
      const best = Math.max(...storedHistory.map((entry) => entry.score));
      setBestScore(best);
    }

    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(300); // Reset timer to 5 minutes
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [tryAgain]);

  const handleSubmit = (auto = false) => {
    if (!isSubmitted) {
      const correctCount =
      //@ts-ignore
        quiz?.filter((q, i) => answers[i] === q.answer).length || 0;
      saveQuizHistory(lessAndLevel[1], lessAndLevel[0], correctCount, 10);
      addNotificationToLocalStorage(
        auto
          ? "Time's up! Quiz auto-submitted."
          : "Good job! You've passed the quiz."
      );
      score = correctCount;
      setIsSubmitted(true);
      setAnwserFlag(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-gradient-to-r relative bottom-4 w-[100%] h-[100vh] pt-6 pb-10 overflow-y-scroll">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg mt-24 bg-gradient-to-r from-orange-200 to-red-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ">
        {/* 🕐 Timer UI */}
        <div className="text-right text-xl font-semibold text-red-600 mb-6">
          ⏱️ Time Left:{" "}
          <span className="bg-white px-4 py-1 rounded-full shadow text-black font-bold">
            {formatTime(timeLeft)}
          </span>
        </div>

        {Array.isArray(quiz) ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {lessAndLevel[0]} Skills Quiz - {`Level  ${lessAndLevel[1]}`}
            </h1>
            {quiz.map((data, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-semibold mb-2">{data.question}</h2>
                {data.options.map((option: any, idx: any) => (
                  <label key={idx} className="block mb-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      className="mr-2"
                      onClick={() => {
                        const newAnswers = [...answers];
                        newAnswers[index] = option;
                        setAnswers(newAnswers);
                      }}
                      disabled={isSubmitted}
                    />
                    {option}
                  </label>
                ))}
                {answerFlag && (
                  <p
                    className={`${
                      answers[index] === data.answer
                        ? "bg-green-400"
                        : "bg-red-500"
                    } inline rounded-md pl-5 pr-5 text-white font-medium`}
                  >
                    {data.answer}
                  </p>
                )}
              </div>
            ))}
            <button
              className="border bg-gradient-to-r from-orange-100 to-red-400 w-[300px] text-center text-lg font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-xl py-4 rounded-md"
              onClick={() => {
                if (isSubmitted) {
                  setTryAgain((prev) => !prev); // ⬅ Reset quiz
                  setIsSubmitted(false);
                  setAnwserFlag(false);
                  setAnswers(Array(10).fill(null));
                } else {
                  handleSubmit();
                }
              }}
            >
              {isSubmitted ? "Try Again" : "Check Scores"}
            </button>
          </div>
        ) : (
          <div className="flex flex-row space-x-4 w-[100%] justify-center items-center">
            <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>
            <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>
            <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>
            <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
          </div>
        )}
      </div>
    </div>
  );
}
