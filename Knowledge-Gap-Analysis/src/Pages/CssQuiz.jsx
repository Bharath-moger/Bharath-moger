import React from "react";
import QuizLogic from "../components/QuizLogic";
import questions from "./Quetion";

export default function CssQuiz() {
  return <QuizLogic topic="CSS" questions={questions.css} />;
}
