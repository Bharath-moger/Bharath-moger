const questions = {
  html: [
    {
      question: "Which tag is used to define the largest heading in HTML?",
      options: ["<h1>", "<heading>", "<h6>", "<head>"],
      answer: "<h1>",
    },
    {
      question: "Which attribute is used to provide a unique identifier to an element?",
      options: ["class", "id", "style", "name"],
      answer: "id",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<lb>", "<break>", "<br>", "<line>"],
      answer: "<br>",
    },
  ],

  css: [
    {
      question: "Which property is used to change the text color in CSS?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: "color",
    },
    {
      question: "Which CSS property controls the size of text?",
      options: ["font-size", "text-style", "font-weight", "size"],
      answer: "font-size",
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: [".demo", "#demo", "demo", "*demo"],
      answer: "#demo",
    },
  ],

  js: [
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["var", "let", "const", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the output of: typeof [] ?",
      options: ["array", "object", "list", "undefined"],
      answer: "object",
    },
    {
      question: "Which method is used to parse JSON in JavaScript?",
      options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.toObject()"],
      answer: "JSON.parse()",
    },
  ],
};

export default questions;
