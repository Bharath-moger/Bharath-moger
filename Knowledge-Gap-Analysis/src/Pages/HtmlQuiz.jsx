import React from "react";
import questions from "./Quetion";
import QuizLogic from "../components/QuizLogic";

export default function HtmlQuiz() {
  return <QuizLogic topic="HTML" questions={questions.html} />;
}
