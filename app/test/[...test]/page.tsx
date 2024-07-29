"use client";
import { useEffect, useState } from "react";
import { genAI } from "@/utils/gemini";
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
export default function Page({ params }: { params: { test: string } }) {
  const searchParams = useSearchParams();
  const lesson = searchParams.get("lesson");
  const lessAndLevel = lesson?.split(",") || ["sport", "sport"];
  console.log(lessAndLevel);

  const [quiz, setQuiz] = useState<quiz>();
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [answerFlag, setAnwserFlag] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `create a quiz on ${lessAndLevel[1]} ${lessAndLevel[0]} skills 10 questions and convert the reponse in json format and please donot add anything extra after the  json {} curly braces beacuse i have to convert this into json, this text`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    console.log(response);

    const text = await response.text();
    console.log(text);

    const json = await JSON.parse(text);
    setQuiz(json);
    console.log(json);
  }
  console.log(answers);

  useEffect(() => {
    run();
  }, [tryAgain]);

  const handleSubmit = () => {
    if (answers.includes(null)) {
      console.log("aagya");
    } else {
      setAnwserFlag(true);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-orange-200 to-orange-300 relative bottom-4 w-[100%] h-[100vh] pt-6 pb-10 overflow-y-scroll">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg mt-24 bg-gradient-to-r from-orange-200 to-red-50   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl ">
        {Array.isArray(quiz?.questions) ? (
          <div>
            <h1 className="text-2xl font-bold mb-4">
              {lessAndLevel[0]} Skills Quiz - {`Level  ${lessAndLevel[1]}`}
            </h1>
            {Array.isArray(quiz?.questions) &&
              quiz.questions &&
              quiz.questions.map((data, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">
                    {data.question}
                  </h2>
                  {data.options.map((option, idx) => (
                    <label
                      key={idx}
                      className="block mb-2"
                      onClick={() => {
                        let anwsers = answers;
                        answers[index] = option;
                        setAnswers(anwsers);
                      }}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        className="mr-2"
                        onClick={() => {
                          let anwsers = answers;
                          answers[index] = option;
                          setAnswers(anwsers);
                        }}
                      />
                      {option}
                    </label>
                  ))}
                  {answerFlag && (
                    <p
                      className={`${
                        answers[index] == data.answer
                          ? "bg-green-400  "
                          : "bg-red-500"
                      } inline rounded-md pl-5 pr-5 text-white font-medium`}
                    >
                      {data.answer}
                    </p>
                  )}
                </div>
              ))}
            <button
              className=" border bg-gradient-to-r from-orange-100 to-red-400 w-[300px] text-center text-lg font-medium   transform transition-transform duration-300 hover:scale-105  hover:shadow-xl shadow-xl  py-4 rounded-md"
              onClick={handleSubmit}
            >
              {isSubmitted ? (
                <div
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Try Again
                </div>
              ) : (
                "Check Scores"
              )}
            </button>
          </div>
        ) : (
          <div className="flex flex-row space-x-4 w-[100%]  justify-center items-center">
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
