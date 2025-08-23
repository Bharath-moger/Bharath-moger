import React from "react";
import QuizLogic from "../components/QuizLogic";
import questions from "./Quetion";

export default function JsQuiz() {
  return <QuizLogic topic="JavaScript" questions={questions.js} />;
}
