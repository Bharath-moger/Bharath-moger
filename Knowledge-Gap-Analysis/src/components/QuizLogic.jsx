import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizLogic({ topic, questions }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Handle answer
  const handleAnswer = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }
    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">{topic} Quiz Finished!</h2>
        <p className="text-lg mb-6">
          Your Score: <span className="font-semibold">{score}</span> / {questions.length}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
          >
            Retry
          </button>
          <button
            onClick={() => navigate("/landContent")}
            className="px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{topic} Quiz</h2>
        <span className="text-red-600 font-semibold">⏳ {timeLeft}s</span>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-medium">
          Q{currentQ + 1}. {questions[currentQ].question}
        </h3>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {questions[currentQ].options.map((opt, idx) => (
          <label
            key={idx}
            className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
              selected === opt ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
              className="mr-3"
            />
            {opt}
          </label>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleAnswer}
        disabled={!selected}
        className={`mt-6 w-full py-3 rounded-lg text-white font-semibold transition ${
          selected
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {currentQ + 1 === questions.length ? "Finish" : "Next"}
      </button>
    </div>
  );
}
