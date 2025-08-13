import React, { useState } from 'react';
import './netflix.css'; // We'll add styles next

const faqData = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, and more.",
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your devices for a fixed monthly fee. Plans range by features.",
    },
    {
        question: "Where can I watch?",
        answer: "You can watch on multiple devices like TVs, phones, laptops, and tablets.",
    },
];


const FAQ = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {

        setActiveIndex(prevIndex => prevIndex === index ? null : index);
        console.log(activeIndex);
    };
console.log(activeIndex);

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    onClick={() => handleClick(index)}
                    isActive={activeIndex == index}
                />
            ))}
        </div>
    );


};

export default FAQ;


const FAQItem = ({ question, answer, isActive, onClick }) => (
    <div className={`faq-item ${isActive ? 'activee' : ''}`}>
        <div className="faq-question" onClick={onClick}> {question} <span className="symbol">{isActive ? '-' : '+'}</span> </div>
        <div className="faq-answer">{isActive && <p>{answer}</p>}</div>
    </div>
);
