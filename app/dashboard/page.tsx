"use client";

import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

interface QuizHistory {
  date: string;
  lesson: string;
  level: string;
  score: number;
  totalQuestions: number;
}

function QuizHistoryList() {
  const [history, setHistory] = useState<QuizHistory[]>([]);
  const [sortField, setSortField] = useState<keyof QuizHistory>("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    setHistory(storedHistory);
  }, []);

  // Calculate total quizzes, average score, best score, and highest level
  const totalQuizzes = history.length;
  const averageScore =
    totalQuizzes > 0
      ? history.reduce((sum, entry) => sum + entry.score, 0) / totalQuizzes
      : 0;
  const bestScore = Math.max(...history.map((entry) => entry.score), 0);
  const highestLevel = Math.max(...history.map((entry) => parseInt(entry.level) || 0), 0);

  // Sort the quiz history based on selected field and order
  const sortedHistory = [...history].sort((a, b) => {
    if (sortField === "date") {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    } else {
      return sortOrder === "asc"
      //@ts-ignore
        ? a[sortField] - b[sortField]
        //@ts-ignore
        : b[sortField] - a[sortField];
    }
  });

  // Paginate the quiz history
  const paginatedHistory = sortedHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedHistory.length / itemsPerPage);

  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Quiz History
          </h2>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-r from-orange-300 to-red-300 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Total Quizzes Taken</h3>
              <p className="text-2xl font-bold">{totalQuizzes}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-indigo-300 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Average Score</h3>
              <p className="text-2xl font-bold">{averageScore.toFixed(2)}</p>
            </div>
            <div className="bg-gradient-to-r from-green-300 to-teal-300 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Best Score</h3>
              <p className="text-2xl font-bold">{bestScore}</p>
            </div>
          </div>

          {/* Sorting Section */}
          <div className="mb-4">
            <label className="mr-4">Sort by:</label>
            <select
              value={sortField}
              onChange={(e) => setSortField(e.target.value as keyof QuizHistory)}
              className="p-2 border rounded-lg"
            >
              <option value="date">Date</option>
              <option value="score">Score</option>
              <option value="level">Level</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="ml-4 p-2 bg-gray-200 rounded-lg"
            >
              {sortOrder === "asc" ? "Ascending" : "Descending"}
            </button>
          </div>

          {/* Quiz History Table */}
          {history.length === 0 ? (
            <p className="text-gray-500">No quiz history available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gradient-to-r from-orange-300 to-red-300 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Level</th>
                    <th className="py-3 px-4 text-left">Lesson</th>
                    <th className="py-3 px-4 text-left">Score</th>
                    <th className="py-3 px-4 text-left">Total Questions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedHistory.map((entry, index) => (
                    <tr
                      key={index}
                      className="hover:bg-orange-100 transition duration-200"
                    >
                      <td className="py-2 px-4 text-gray-700">
                        {new Date(entry.date).toLocaleString()}
                      </td>
                      <td className="py-2 px-4 text-gray-700">{entry.lesson}</td>
                      <td className="py-2 px-4 text-gray-700">{entry.level}</td>
                      <td className="py-2 px-4 text-gray-700 font-semibold">
                        {entry.score}
                      </td>
                      <td className="py-2 px-4 text-gray-700">
                        {entry.totalQuestions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination Section */}
          <div className="flex justify-between mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6 mb-10">Dashboard</h1>
      <QuizHistoryList />
    </div>
  );
}
